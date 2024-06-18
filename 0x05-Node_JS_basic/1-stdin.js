const readable = process.stdin;
const writeable = process.stdout;

writeable.write('Welcome to Holberton School, what is your name?\n');
readable.on('readable', () => {
  const chunk = readable.read();

  if (chunk) {
    writeable.write(`Your name is: ${chunk}`);
  }
});
readable.on('end', () => {
  console.log('This important software is now closing\n');
});
