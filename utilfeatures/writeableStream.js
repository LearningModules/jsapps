//checking if standard out stream is writable
console.log('Stream writable? '+process.stdout.writable)

process.stdout.write("Hello");
process.stdout.write("World");