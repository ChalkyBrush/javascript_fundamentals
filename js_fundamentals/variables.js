// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var number_of_children = 5;
var partner_name = "Jerry";
var place = "International Waters";
var job_title = "Deck Swabber"

"You will be a " + job_title + " in " + place + ", and married to " + partner_name + " with " + number_of_children + " kids."

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = new Date().getFullYear();
var birthyear = 1812;
var age = currentYear-birthyear;

"They are either " + (age-1) + " or " + age +"."

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var current_age = 23;
var maximum_age = 115;
var amt_per_day = 30;
var supply = (maximum_age-current_age)* 365.25 * 30;

"You will need " + supply + " to last you until the ripe old age of " + maximum_age + "."

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

rad = 20;

circumference_circle = Math.PI * rad * 2;
"The circumference is " + circumference_circle + "."
area_circle = Math.PI * Math.pow(rad, 2);
"The area is " + area_circle + "."

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


