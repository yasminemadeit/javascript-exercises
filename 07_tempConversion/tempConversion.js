const convertToCelsius = function(temp) {
	let celsius = ((temp-32)*5)/9;
	return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
	let fahrenheit = 32+ (temp * (9/5));
	return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
