QUnit.module('analyzeText', function() {
	QUnit.test('should trim whitespace by default', function(assert) {
		const result = analyzeText('  hello world  ');
		assert.strictEqual(result.formattedText, 'hello world', 'should remove leading/trailing spaces');
	});

	QUnit.test('should not trim whitespace when trim is false', function(assert) {
		const result = analyzeText('  hello world  ', { trim: false });
		assert.strictEqual(result.formattedText, '  hello world  ', 'should keep leading/trailing spaces');
	});

	QUnit.test('should convert text to lower case', function(assert) {
		const result = analyzeText('  Hello World  ', { toLowerCase: true });
		assert.strictEqual(result.formattedText, 'hello world', 'should convert to lower case and trim');
	});

	QUnit.test('should count characters correctly (excluding spaces)', function(assert) {
		const result = analyzeText('A quick brown fox jumps over the lazy dog', { charCount: true });
		assert.strictEqual(result.charCount, 33, 'should return correct character count');
	});

	QUnit.test('should find the most common word', function(assert) {
		const result = analyzeText('test test TEST best', { toLowerCase: true, mostCommonWord: true });
		assert.strictEqual(result.mostCommonWord, 'test', 'should find the most common word, case-insensitively');
	});
	
	QUnit.test('should handle multiple options simultaneously', function(assert) {
		const inputText = '  Apple BANANA apple Cherry banana APPLE  ';
		const options = {
			toLowerCase: true,
			charCount: true,
			mostCommonWord: true,
		};
		const result = analyzeText(inputText, options);
		assert.deepEqual(
			result,
			{
				formattedText: 'apple banana apple cherry banana apple',
				charCount: 33,
				mostCommonWord: 'apple',
			},
			'should correctly apply all options together'
		);
	});
	
	QUnit.test('should handle empty string input', function(assert) {
		const result = analyzeText('', { charCount: true, mostCommonWord: true });
		assert.deepEqual(
			result,
			{
				formattedText: '',
				charCount: 0,
				mostCommonWord: '',
			},
			'should handle empty string correctly'
		);
	});

	QUnit.test('should handle non-string input', function(assert) {
		assert.deepEqual(analyzeText(42, {}), {}, 'should return an empty object for a number');
		assert.deepEqual(analyzeText(null, {}), {}, 'should return an empty object for null');
		assert.deepEqual(analyzeText(undefined, {}), {}, 'should return an empty object for undefined');
		assert.deepEqual(analyzeText([], {}), {}, 'should return an empty object for an array');
		assert.deepEqual(analyzeText({}, {}), {}, 'should return an empty object for an object');
	});
});
