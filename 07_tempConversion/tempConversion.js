const convertToCelsius = function(temp) {
  let conversion = (temp - 32) * (5/9);
  let conversionRounded = Math.round(conversion * 10) / 10;
  return conversionRounded;
};

const convertToFahrenheit = function(temp) {
  let conversion = (temp * (9/5)) + 32;
  let conversionRounded = Math.round(conversion * 10) / 10;
  return conversionRounded;
};

// const convertToCelsius = function (fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
// };

// const convertToFahrenheit = function (celsius) {
//   return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
