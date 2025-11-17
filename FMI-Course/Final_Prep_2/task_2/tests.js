QUnit.module('createTodoList', function(hooks) {
	let todoList;

	hooks.beforeEach(function() {
		todoList = createTodoList();
	});

	QUnit.test('should add a new task and return the new count', function(assert) {
		assert.strictEqual(todoList.add('Buy milk'), 1, 'should return 1 after adding the first task');
		assert.strictEqual(todoList.add('Walk the dog'), 2, 'should return 2 after adding the second task');
		assert.deepEqual(todoList.list(), ['Buy milk', 'Walk the dog'], 'list() should show the added tasks');
	});

	QUnit.test('should remove a task by a valid index', function(assert) {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');
		todoList.remove(1);
		assert.deepEqual(todoList.list(), ['Task 1', 'Task 3'], 'should remove the task at index 1');
		assert.strictEqual(todoList.count(), 2, 'count should be 2 after removal');
	});

	QUnit.test('should return "Invalid index" for an invalid remove index', function(assert) {
		todoList.add('Task 1');
		assert.strictEqual(todoList.remove(5), 'Invalid index', 'should return error for out-of-bounds index');
		assert.strictEqual(todoList.remove(-1), 'Invalid index', 'should return error for negative index');
		assert.deepEqual(todoList.list(), ['Task 1'], 'list should be unchanged after invalid removal');
	});

	QUnit.test('should list all current tasks', function(assert) {
		todoList.add('First');
		todoList.add('Second');
		assert.deepEqual(todoList.list(), ['First', 'Second'], 'should return an array of all tasks');
	});

	QUnit.test('list() should return a copy, not a reference', function(assert) {
		todoList.add('First');
		const listCopy = todoList.list();
		listCopy.push('Something else');
		assert.deepEqual(todoList.list(), ['First'], 'modifying the returned list should not affect the internal list');
	});

	QUnit.test('should return the correct count of tasks', function(assert) {
		assert.strictEqual(todoList.count(), 0, 'should initially be 0');
		todoList.add('One task');
		assert.strictEqual(todoList.count(), 1, 'should be 1 after adding a task');
		todoList.remove(0);
		assert.strictEqual(todoList.count(), 0, 'should be 0 after removing the task');
	});

	QUnit.test('should clear all tasks', function(assert) {
		todoList.add('A');
		todoList.add('B');
		assert.deepEqual(todoList.clear(), [], 'clear() should return an empty array');
		assert.strictEqual(todoList.count(), 0, 'count should be 0 after clearing');
		assert.deepEqual(todoList.list(), [], 'list should be empty after clearing');
	});

	QUnit.test('should find tasks containing a keyword (case-insensitive)', function(assert) {
		todoList.add('Buy milk and bread');
		todoList.add('Walk the dog');
		todoList.add('A new dogma');
		assert.deepEqual(todoList.find('dog'), ['Walk the dog', 'A new dogma'], 'should find tasks with "dog"');
		assert.deepEqual(todoList.find('DOG'), ['Walk the dog', 'A new dogma'], 'should be case-insensitive');
		assert.deepEqual(todoList.find('buy'), ['Buy milk and bread'], 'should find tasks with "buy"');
	});
});
