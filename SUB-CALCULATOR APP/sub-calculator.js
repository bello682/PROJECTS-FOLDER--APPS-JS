const showValue = document.getElementById("display");
const equalTo = document.getElementById("equal");
const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", () => {
		let buttonValues = buttons[i].textContent;
		displayContent();

		if (buttonValues === "=") {
			calculateResultInput();
		}
	});
}

function calculateResultInput() {
	showValue.value = eval(showValue.value)
}

function displayContent() {
	const btnValues = document.getElementsByClassName("button");
	for (let i = 0; i < btnValues.length; i++) {
		const newBtnValues = btnValues[i].textContent;
		console.log(newBtnValues);

		showValue.innerText = newBtnValues;
		// console.log(showContent);
	}

	// const showContent = (showValue.innerText += btnValues);
}
