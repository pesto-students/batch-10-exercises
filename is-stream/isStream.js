const stream = require("stream");

const isStream = obj instanceof stream.Stream;
const isReadable =
  isStream(obj) &&
  typeof obj._read == "function" &&
  typeof obj._readableState == "object";
const isWritable =
  isStream(obj) &&
  typeof obj._write == "function" &&
  typeof obj._writableState == "object";
const isDuplex = isWritable && isDuplex;

export { isStream, isReadable, isWritable, isDuplex };
