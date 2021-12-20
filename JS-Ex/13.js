function isPrime(N)
{
	if (N < 4)return N > 1;
	if (!(N & 1))return 0;
	for (let i = 3;i * i <= N;i += 2)
		if (N % i == 0)return 0;
	return 1;
}
function dispPrimes(N){
    for(let i=0; i<=N; i++){
        if (isPrime(i)) console.log(i);
    }
}
dispPrimes(100);