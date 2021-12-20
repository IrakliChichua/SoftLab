const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

console.log(
text.replace(/dolor/gi, 'XXX')
.replace('elit', 'XXX')
.replace('labore', 'XXX')
);
