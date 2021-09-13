const customWritableSteam = require("./customWritableSteam");
const customReadableStream = require("./customReadableStream");

// read from custom readable stream and write it to writable stream
customReadableStream.pipe(customWritableSteam);
