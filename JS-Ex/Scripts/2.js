const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numbers.filter(num => num%2!==0)
.map(x => x*x)
.forEach(element => console.log(element));