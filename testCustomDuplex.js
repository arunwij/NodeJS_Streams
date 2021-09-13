const customDuplexStream = require("./customDuplexStream");

// read from duplex stream and write
customDuplexStream.pipe(customDuplexStream);
