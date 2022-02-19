const messages = [
	'Alejo',
	'Fede',
	'Nico',
	'Yessi',
	'Juan',
	'Lau',
	'Cami',
	'Dani',
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

randomMsg();

module.exports = { randomMsg };
