const fs = require("fs");

const content = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" });
const instructions = content.split("\n");

let position = 50;
let count = 0;

for(const i of instructions) {

	const steps = parseInt(i.substring(1));

	for(let j = 0; j < steps; j++) {
		if(i[0] === "L") position -= 1;
		else if(i[0] === "R") position += 1;
		
		if(position > 99) position -= 100;
		else if(position < 0) position += 100;
	}

	
	if(position === 0) count++;

}

console.log(count);
