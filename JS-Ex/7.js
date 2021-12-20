const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

console.log(
text.split(' ')
.map(word => word[0].toUpperCase())
.reduce((previousValue, currentValue) => previousValue + currentValue)
);