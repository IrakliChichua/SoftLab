let n = 0;
const t = setInterval(() => {
    console.log(new Date());
    n++;
    if (n === 10) clearInterval(t);
}, 1000);      