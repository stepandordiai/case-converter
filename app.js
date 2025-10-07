const handleUpperCase = () => {
	const display = document.getElementById("display");
	display.value = display.value.toUpperCase();
};

const handleLowerCase = () => {
	const display = document.getElementById("display");
	display.value = display.value.toLowerCase();
};

const handleCapitalize = () => {
	const display = document.getElementById("display");
	const displayValue = display.value;
	const firstLetter = displayValue.split("")[0].toUpperCase();
	const restText = displayValue.slice(1);
	display.value = firstLetter + restText;
};

const handleReverse = () => {
	const display = document.getElementById("display");
	const displayValue = display.value;
	const reversedTxt = displayValue.split("").reverse().join("");
	display.value = reversedTxt;
};
