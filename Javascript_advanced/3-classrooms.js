function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function () {
			return seat;
		};
	}

	let students = [];

	for(let i = 0; i < numbersOfStudents; i++) {
		let result = studentSeat(i + 1);
		students.push(result);
	}

	return students;
}

let classRoom = createClassRoom(10);
