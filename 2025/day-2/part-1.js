const { match } = require("assert");
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
		
		if(numberString.length % 2 == 0) {
			const list = [
				numberString.substring(0, numberString.length / 2),
				numberString.substring(numberString.length / 2)
			];
			
			if(list[0] === list[1]) total += i;
		}

	}

}

console.log(total);
