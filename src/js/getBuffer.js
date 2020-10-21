function getBuffer(str) {
  if (typeof str !== 'string') {
    throw new Error('str must be {string}');
  }
  return ((input) => {
    const buffer = new ArrayBuffer(str.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(str);
}

export default getBuffer;
