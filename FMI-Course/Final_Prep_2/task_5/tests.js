QUnit.module('createInventory', {
  beforeEach: function() {
    this.inventory = createInventory();
  }
}, function() {
  QUnit.test('should add a new product', function(assert) {
    const newQuantity = this.inventory.add('Apple', 10);
    assert.strictEqual(newQuantity, 10, 'Should return the new quantity');
    assert.deepEqual(this.inventory.list(), [{ name: 'Apple', quantity: 10 }], 'Should add the product to the list');
  });

  QUnit.test('should increase quantity of an existing product', function(assert) {
    this.inventory.add('Apple', 10);
    const newQuantity = this.inventory.add('Apple', 5);
    assert.strictEqual(newQuantity, 15, 'Should return the updated total quantity');
    assert.deepEqual(this.inventory.list(), [{ name: 'Apple', quantity: 15 }], 'Should update the product quantity');
  });

  QUnit.test('should not add product with invalid name or quantity', function(assert) {
    this.inventory.add(123, 10);
    assert.strictEqual(this.inventory.getTotalQuantity(), 0, 'Should not add product with non-string name');
    this.inventory.add('Apple', -5);
    assert.strictEqual(this.inventory.getTotalQuantity(), 0, 'Should not add product with negative quantity');
    this.inventory.add('Apple', 0);
    assert.strictEqual(this.inventory.getTotalQuantity(), 0, 'Should not add product with zero quantity');
  });

  QUnit.test('should remove a product quantity', function(assert) {
    this.inventory.add('Apple', 10);
    this.inventory.remove('Apple', 7);
    assert.deepEqual(this.inventory.list(), [{ name: 'Apple', quantity: 3 }], 'Should decrease the product quantity');
  });

  QUnit.test('should remove a product completely if quantity becomes zero or less', function(assert) {
    this.inventory.add('Apple', 10);
    this.inventory.remove('Apple', 10);
    assert.deepEqual(this.inventory.list(), [], 'Should remove the product if quantity is zero');

    this.inventory.add('Banana', 5);
    this.inventory.remove('Banana', 10);
    assert.deepEqual(this.inventory.list(), [], 'Should remove the product if quantity is less than zero');
  });

  QUnit.test('should return error when removing a non-existent product', function(assert) {
    const result = this.inventory.remove('Orange', 5);
    assert.strictEqual(result, 'Product not found or invalid quantity', 'Should return an error message');
  });
  
  QUnit.test('should find a product case-insensitively', function(assert) {
    this.inventory.add('Apple', 10);
    const found = this.inventory.find('apple');
    assert.deepEqual(found, { name: 'Apple', quantity: 10 }, 'Should find the product regardless of case');
  });

  QUnit.test('should return null if product is not found', function(assert) {
    const found = this.inventory.find('Orange');
    assert.strictEqual(found, null, 'Should return null for a non-existent product');
  });

  QUnit.test('should return the total quantity of all items', function(assert) {
    this.inventory.add('Apple', 10);
    this.inventory.add('Banana', 20);
    assert.strictEqual(this.inventory.getTotalQuantity(), 30, 'Should return the sum of all quantities');
  });
});
