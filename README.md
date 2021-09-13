# Experiment with NodeJS Streams

## What is a Stream?
Collection of data. Main difference is data might not available at once. Main advantage of streams is we can process large amount of data even if they don't fit in processing computer's memory

## Main types of streams in NodeJS
- Readable - Data can be consumed
- Writable - Data can be written
- Duplex - Both Readable and Writable
- Transform - Basically a Duplex stream. Can be used to modify data as it reads and writes.