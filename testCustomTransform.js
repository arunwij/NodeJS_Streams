const customTransformStream = require("./customTransformStream");

process.stdin.pipe(customTransformStream).pipe(process.stdout);
