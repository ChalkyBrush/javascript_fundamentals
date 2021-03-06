// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(number_of_children, partner_name, place, job_title)
{
	return "You will be a " + job_title + " in " + place + ", and married to " + partner_name + " with " + number_of_children + " kids."
}
tellFortune(5, "Jerry", "International Waters", "Deck Swabber")
tellFortune(8, "Mila", "Canada", "Lawyer")
tellFortune(0, "Dr. Xavier", "Mars", "Metals Chemist")

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthyear)
{
	var currentYear = new Date().getFullYear();
	var age = currentYear-birthyear;
	return "They are either " + (age-1) + " or " + age +"."
}

calculateAge(1812);
calculateAge(2000);
calculateAge(1989);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(current_age, amt_per_day)
{
	var maximum_age = 115;
	var supply = (maximum_age-current_age)* 365.25 * amt_per_day;
	return supply
}

calculateSupply(23, 20)
calculateSupply(114, 10)
calculateSupply(1, 100)

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(rad)
{
	circumference_circle = Math.PI * rad * 2;
	return "The circumference is " + circumference_circle + "."
}

function calcArea(rad)
{
	area_circle = Math.PI * Math.pow(rad, 2);
	return "The area is " + area_circle + "."
}

calcCircumference(5)
calcArea(5)

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function cecliusToFahrenheit(degrees_celsius)
{
	celsius_to_f = (degrees_celsius * (9/5)) + 32;
	return degrees_celsius + "°C is " + celsius_to_f +"°F."
}

function fahrenheitToCelsius(degrees_fahrenheit)
{
	fahrenheit_to_c = (degrees_fahrenheit - 32) * (5/9);
	return degrees_fahrenheit + "°F is " + fahrenheit_to_c +"°C."
}

cecliusToFahrenheit(50);
fahrenheitToCelsius(50);






