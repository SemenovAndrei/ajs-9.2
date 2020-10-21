import getBuffer from './getBuffer';
import ArrayBufferConverter from './arraybufferconverter';

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
console.log(getBuffer(data));

const test = new ArrayBufferConverter();
test.load(getBuffer(data));

console.log(test.toString());
