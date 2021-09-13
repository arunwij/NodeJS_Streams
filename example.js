// convert url string to JSON string with pipes
// eg. name=kasun&city=kegalle&age=21  => {"name": "kasun", "city": "kegalle"}

const { Transform } = require("stream");

const andSplitter = new Transform({
  readableObjectMode: true,
  transform: function (chunk, encoding, callback) {
    this.push(chunk.toString().trim().split("&"));
    callback();
  },
});

const equalSplitter = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform: function (chunk, encoding, callback) {
    const data = [];
    for (item of chunk) {
      data.push(item.split("="));
    }
    this.push(data);
    callback();
  },
});

const arrayToObject = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform: function (chunk, encoding, callback) {
    const obj = {};
    for (const [key, value] of chunk) {
      obj[key] = value;
    }
    this.push(obj);
    callback();
  },
});

const objectToString = new Transform({
  writableObjectMode: true,
  transform: function (chunk, encoding, callback) {
    this.push(JSON.stringify(chunk));
    callback();
  },
});

process.stdin
  .pipe(andSplitter)
  .pipe(equalSplitter)
  .pipe(arrayToObject)
  .pipe(objectToString)
  .pipe(process.stdout);
