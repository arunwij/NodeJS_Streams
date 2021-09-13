const { Readable } = require("stream");

const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const customReadableStream = new Readable({
  read: function (size) {
    if (this.currentIndex >= data.length) {
      this.push(null);
    }
    this.push(data[this.currentIndex++]);
  },
});

customReadableStream.currentIndex = 0;

module.exports = customReadableStream;
