QUnit.module('formatProfile', function() {
  const user = { firstName: "john", lastName: "doe", email: "john.doe@email.com" };

  QUnit.test('should format names to title case by default', function(assert) {
    const result = formatProfile({ ...user });
    assert.strictEqual(result.firstName, 'John', 'First name should be capitalized');
    assert.strictEqual(result.lastName, 'Doe', 'Last name should be capitalized');
  });

  QUnit.test('should not format names when formatName is false', function(assert) {
    const result = formatProfile({ ...user }, { formatName: false });
    assert.strictEqual(result.firstName, 'john', 'First name should remain lowercase');
    assert.strictEqual(result.lastName, 'doe', 'Last name should remain lowercase');
  });

  QUnit.test('should create a username', function(assert) {
    const result = formatProfile({ ...user }, { createUsername: true });
    assert.strictEqual(result.username, 'johdoe', 'Should create a username from first 3 letters of names');
  });

  QUnit.test('should not create a username if lastName is missing', function(assert) {
    const result = formatProfile({ firstName: "ana", email: "ana@test.com" }, { createUsername: true });
    assert.notOk(result.username, 'Username should not be created without a last name');
  });

  QUnit.test('should hide email correctly', function(assert) {
    const result = formatProfile({ ...user }, { hideEmail: true });
    assert.strictEqual(result.email, 'j***@email.com', 'Should hide the local part of the email');
  });

  QUnit.test('should handle all options simultaneously', function(assert) {
    const options = { createUsername: true, hideEmail: true };
    const result = formatProfile({ ...user }, options);
    assert.deepEqual(
      result,
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'j***@email.com',
        username: 'johdoe'
      },
      'Should correctly apply all options together'
    );
  });

  QUnit.test('should return an empty object for invalid input', function(assert) {
    assert.deepEqual(formatProfile("invalid"), {}, 'should return an empty object for a string');
    assert.deepEqual(formatProfile(null), {}, 'should return an empty object for null');
    assert.deepEqual(formatProfile(123), {}, 'should return an empty object for a number');
  });
});
