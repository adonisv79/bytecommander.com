import { sum } from './jest-sample';

test('Adds 1 + 2 to be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Adds -99 and 99 to be 0', () => {
  expect(sum(-99, 99)).toBe(0);
});

test('Adds -99 and 99 not to be NaN', () => {
  expect(sum(-99, 99)).not.toBe(NaN);
});

test('Not Null check', () => {
  expect(sum(234, 1)).not.toBeNull();
});

test('truthy check', () => {
  expect(sum(234, 1)).toBeTruthy();
});

test('falsy check', () => {
  expect(sum(234, 1)).not.toBeFalsy();
});

// comparison
test('Adds 1 + 2 to be greater than 1', () => {
  expect(sum(1, 2)).toBeGreaterThan(1);
});

test('Adds 1 + 2 to be greater than or equal to 3', () => {
  expect(sum(1, 2)).toBeGreaterThanOrEqual(3);
});

// for floating points
test('adding floating point numbers', () => {
  // expect(value).toBe(0.3); This won't work because of rounding error
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // This works.
});

// regex
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

// exceptions
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});

// Async/Await
async function fetchData(err: boolean): Promise<string> {
  if (!err) {
    return 'success';
  }

  throw new Error('Forced error');
}

test('the data is success', async () => {
  const data = await fetchData(false);
  expect(data).toBe('success');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData(true);
  } catch (e) {
    expect(e.message).toMatch('Forced error');
  }
});
