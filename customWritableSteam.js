const { Writable } = require("stream");

const customWritableStream = new Writable({
  write: function (chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

module.exports = customWritableStream;
