const functions = require('./functions');

// the functions will run before or after each/all test
// describe will target certain test (nameCheck fn on when you are running test('user is jeff))

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database closed...');

// beforeEach(initDatabase);
// afterEach(closeDatabase);

// beforeAll(initDatabase);
// afterAll(closeDatabase);

const nameCheck = () => console.log('Checking name ...');

describe('Checking Names', () => {
	beforeEach(nameCheck);
	test('User is Jeff', () => {
		const user = 'Jeff';
		expect(user).toBe('Jeff');
	});
	test('User is Karen', () => {
		const user = 'Karen';
		expect(user).toBe('Karen');
	});
});

//toBe
test('Add 2 + 2 equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});
//toBeNull
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});
//toBeFalsy
test('Should be falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});
//toEqual
test('User should be Yage Li object', () => {
	expect(functions.createUser()).toEqual({ firstName: 'Yage', lastName: 'Li' });
});
// Less than and greater than
test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});
//Regax
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/i);
});
// Arrays
test('Admin should be in usernames', () => {
	usernames = [ 'john', 'karen', 'admin' ];
	expect(usernames).toContain('admin');
});
//Working with async data
// test('User fetched name should be Ervin Howell', () => {
// 	expect.assertions(1);
// 	return functions.fetchUser().then((data) => {
// 		expect(data.name).toEqual('Ervin Howell');
// 	});
// });

//Async Await
test('2.User fetched name should be Ervin Howell', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Ervin Howell');
});
