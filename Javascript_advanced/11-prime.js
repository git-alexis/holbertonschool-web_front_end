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
setTimeout(() => {
	for(let i = 0; i < 100; i++) {
		countPrimeNumbers();
	}
}, 0);
let end = performance.now();
let time = end - start;
console.log("Execution time of calculating prime numbers 100 times was " + time + " milliseconds.");
