window.onload = function() {
	document.getElementById("firstNumber").focus();
};

window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;

	//your code goes here
	let resultSum = 0;

	stringA = parseInt(stringA.trim());
	stringB = parseInt(stringB.trim());

	resultSum = stringA + stringB;

	document.getElementById("resultNumber").value = resultSum;
	document.getElementById("resultNumber").focus();
};
