const fs = require("fs");

const content = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" });
const ranges = content.split(",");

let total = 0;

for(const range of ranges) {
	const numbers = range.split("-");
	const start = parseInt(numbers[0]);
	const end = parseInt(numbers[1]);

	for(let i = start; i <= end; i++) {

		const numberString = i.toString();

		if(numberString.length == 2 && numberString[0] == numberString[1]) total+=i;
		else if(numberString.length > 2) {


			let no = 1;
			outer_loop:
			while(no <= numberString.length) {
				if(numberString.length % no === 0) {

					let splitString = [];
					for(let j = 0; j < numberString.length; j += no) {
						splitString.push(numberString.slice(j, j + no));
					}

					if(splitString.length > 1 && splitString.every(v => v === splitString[0])) {
						total += i;
						break outer_loop;
					}

				}
				no++;
			}
		}

	}

}

console.log(total);
