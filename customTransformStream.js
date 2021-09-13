const { Transform } = require("stream");

const customTransformStream = new Transform({
  transform: function (chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

module.exports = customTransformStream;
