/**
 * ArrayBufferConverter
 *
 * Конвертирует ArrayBuffer в строку
 */
class ArrayBufferConverter {
  /**
   *
   * @param {ArrayBuffer} buffer
   * - присваивает переданный ArrayBuffer
   * в this.buffer
   */
  load(buffer) {
    this.arrayBuffer = buffer;
  }

  /**
   * Конвертирует this.buffer в строку
   *
   * возвращает {string}
   */
  toString() {
    return String.fromCharCode(...new Uint16Array(this.arrayBuffer));
  }
}

export default ArrayBufferConverter;
