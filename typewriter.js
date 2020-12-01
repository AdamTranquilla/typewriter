const str = "hello there from lighthouse labs\n";

for (let i = 0; i < str.length; i++) {
  setTimeout(() => process.stdout.write(str[i]), 50 * i);
}