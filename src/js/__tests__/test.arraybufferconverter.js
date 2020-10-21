import ArrayBufferConverter from '../arraybufferconverter';
import getBuffer from '../getBuffer';

describe('create new ArrayBufferConverter', () => {
  describe('data is string', () => {
    test.each([
      ['Main Error'],
      ['Common Error'],
      ['Event Error'],
      ['Simple Error'],
      ['Unknown error'],
      ['12345'],
      [''],
      ['[]'],
      ['{}'],
    ])('%p', (data) => {
      const result = new ArrayBufferConverter();
      result.load(getBuffer(data));
      expect(result.toString()).toBe(data);
    });
  });
});
