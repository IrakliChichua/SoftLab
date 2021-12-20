const text = "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
const chunked_text = text.split(" ");

var arr = [];
chunked_text.forEach(element => {
    if(!arr[element]) arr[element] = 1;
    else arr[element]++;
});

for (let i in arr){
    console.log(i + ': ' + arr[i]);
}
