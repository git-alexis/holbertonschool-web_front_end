function isPrime(n) {
	for (let i = 2; i * i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}

function countPrimeNumbers() {
	let count = 0;

	for(let i = 2; i <= 100; i++) {
		if(isPrime(i)) {
			count += 1;
		}
	}

	return count;
}

let start = performance.now();
countPrimeNumbers();
let end = performance.now();
let time = end - start;
console.log("Execution time of printing countPrimeNumbers was " + time + " milliseconds.");
