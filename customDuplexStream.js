const { Duplex } = require("stream");

const customDuplexStream = new Duplex({
  write: function (chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read: function (size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  },
});

customDuplexStream.currentCharCode = 65;

module.exports = customDuplexStream;
