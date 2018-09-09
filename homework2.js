const a = 5;
const b = 10;
const c = a + b;
const d = c + a * b; 
const joe = 'joe';
const e = a === joe;
const bitcoinPrice = 6191;
const marginCallLine = 6098;
if (bitcoinPrice <= marginCallLine) {
	console.log('Ooops! your position was liquidated')
	} else {
	console.log('Watch out your margin call line is at 6098')
	}
