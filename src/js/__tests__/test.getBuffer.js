import getBuffer from '../getBuffer';

describe('data is !string', () => {
  test.each([
    [[]],
    [{}],
    [{ 123: 123 }],
    [12345],
    [null],
    [undefined],
  ])('%p', (data) => {
    expect(() => getBuffer(data)).toThrow();
  });
});
