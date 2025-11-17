QUnit.module('analyzeProducts', function() {
	const products = [
		{ name: 'Apple', price: 2.5, category: 'fruit', inStock: true },
		{ name: 'Banana', price: 1.2, category: 'fruit', inStock: false },
		{ name: 'Carrot', price: 0.8, category: 'vegetable', inStock: true },
		{ name: 'Broccoli', price: 1.5, category: 'vegetable', inStock: true },
		{ name: 'Steak', price: 12, category: 'meat', inStock: false },
	];

	const expectedResult = {
		mostExpensive: { name: 'Steak', price: 12, category: 'meat', inStock: false },
		averagePrice: 3.6,
		inStockCount: 3,
		categoryStats: { fruit: 2, vegetable: 2, meat: 1 },
		priceRange: { min: 0.8, max: 12 },
	};

	QUnit.test('should correctly analyze a list of products', function(assert) {
		assert.deepEqual(analyzeProducts(products), expectedResult, 'should return correct statistics for the product list');
	});

	QUnit.test('should handle an empty array', function(assert) {
		const emptyResult = {
			mostExpensive: 'unknown',
			averagePrice: 0,
			inStockCount: 0,
			categoryStats: {},
			priceRange: { min: 0, max: 0 },
		};
		assert.deepEqual(analyzeProducts([]), emptyResult, 'should return default values for an empty array');
	});

	QUnit.test('should handle an array with a single product', function(assert) {
		const singleProduct = [{ name: 'Orange', price: 3.0, category: 'fruit', inStock: true }];
		const singleResult = {
			mostExpensive: singleProduct[0],
			averagePrice: 3.0,
			inStockCount: 1,
			categoryStats: { fruit: 1 },
			priceRange: { min: 3.0, max: 3.0 },
		};
		assert.deepEqual(analyzeProducts(singleProduct), singleResult, 'should correctly analyze a single product');
	});
	
	QUnit.test('should correctly calculate average price with floating point numbers', function(assert) {
		const floatProducts = [
			{ name: 'A', price: 0.1, category: 'test', inStock: true },
			{ name: 'B', price: 0.2, category: 'test', inStock: true },
		];
		const result = analyzeProducts(floatProducts);
		assert.strictEqual(result.averagePrice, 0.15, 'average price should be calculated and rounded correctly');
	});
	
	QUnit.test('should correctly count in-stock items', function(assert) {
		const stockProducts = [
			{ name: 'A', price: 1, category: 'test', inStock: true },
			{ name: 'B', price: 2, category: 'test', inStock: false },
			{ name: 'C', price: 3, category: 'test', inStock: true },
		];
		const result = analyzeProducts(stockProducts);
		assert.strictEqual(result.inStockCount, 2, 'should correctly count items with inStock: true');
	});

	QUnit.test('should handle multiple most expensive products', function(assert) {
		const tieProducts = [
			{ name: 'A', price: 10, category: 'test', inStock: true },
			{ name: 'B', price: 5, category: 'test', inStock: false },
			{ name: 'C', price: 10, category: 'test', inStock: true },
		];
		const result = analyzeProducts(tieProducts);
		const expectedMostExpensive = [
			{ name: 'A', price: 10, category: 'test', inStock: true },
			{ name: 'C', price: 10, category: 'test', inStock: true },
		];
		assert.deepEqual(result.mostExpensive, expectedMostExpensive, 'should return an array of the most expensive products if there is a tie');
	});
});
