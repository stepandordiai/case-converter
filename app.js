const display = document.getElementById("display");
const textAreaLength = document.getElementById("text-area-length");

const handleUpperCase = () => {
	display.value = display.value.toUpperCase();
};

const handleLowerCase = () => {
	display.value = display.value.toLowerCase();
};

const handleCapitalize = () => {
	const displayValue = display.value;
	const firstLetter = displayValue.split("")[0].toUpperCase();
	const restText = displayValue.slice(1);
	display.value = firstLetter + restText;
};

const handleReverse = () => {
	const displayValue = display.value;
	const reversedTxt = displayValue.split("").reverse().join("");
	display.value = reversedTxt;
};

const handleCapitalizeEachWord = () => {
	const displayValue = display.value;
	const text = displayValue.split(" ");
	let txt = [];
	text.forEach((word) => {
		const firstLetter = word.split("")[0].toUpperCase();
		const restText = word.slice(1);
		txt.push(firstLetter + restText);
	});
	display.value = txt.join(" ");
};

const checkCharacters = () => {
	const displayValue = display.value;
	if (!displayValue.length) {
		textAreaLength.textContent = "0 characters";
	} else {
		textAreaLength.textContent = displayValue.length + " characters";
	}
};

checkCharacters();

display.addEventListener("input", checkCharacters);
