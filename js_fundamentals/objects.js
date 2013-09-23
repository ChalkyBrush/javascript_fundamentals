// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipeCard = {
  the_title: "Chicken a la King",
  servings: 5,
  ingredients: ["chicken","mushrooms","peas","milk"],
}; 

console.log(recipeCard.the_title)
console.log("Serves: " + recipeCard.servings)
console.log("Ingredients:")
for (var i=1;i<=recipeCard.ingredients.length;i++)
{ 
console.log(recipeCard.ingredients[i-1])
}

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var myBooks = [
  {name: "Human Action", 
   author: "Ludwig von Mises",
   alreadyRead: true},
  {name: "Harry Potter", 
   author: "JK Rowling",
   alreadyRead: true},
   {name: "Pragmatic Programmer", 
   author: "Andy Hunt, Dave Thomas",
   alreadyRead: false},
];

for (var i=0;i<myBooks.length;i++)
{
	if (myBooks[i].alreadyRead == true)
	{
	console.log("You already read " + myBooks[i].name + " by " + myBooks[i].author)
	}
	if (myBooks[i].alreadyRead == false)
	{
	console.log("You still need to read " + myBooks[i].name + " by " + myBooks[i].author)
	}
}

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
  title: "Gladiator",
  duration: 112,
  actors: ["Russel Crowe","Jaquin Phoenix"],
}; 

var actorslist ="";
for (var i=0;i<favMovie.actors.length;i++)
{ 
	if (i < favMovie.actors.length - 1)
	{
	actorslist = actorslist + favMovie.actors[i] + ", "
	}
	else
	{
	actorslist = actorslist + favMovie.actors[i]
	}
}

console.log(favMovie.title +" lasts for " + favMovie.duration + " minutes. Stars: " + actorslist +".")



