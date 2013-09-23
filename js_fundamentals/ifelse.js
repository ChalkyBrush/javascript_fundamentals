// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1,num2)
{
	if (num1 > num2)
	{
	return "The greater number of " + num1 + " and " + num2 + " is " + num1 +"."	
	}

	else
	{
	return "The greater number of " + num1 + " and " + num2 + " is " +num2 +"."	
	}
}

greaterNum(4,9)
greaterNum(4520,2)
greaterNum(-5,0)

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language)
{
	if (language=="de")
	{
		return "Hallo Welt"
	}
	else if (language=="es")
	{
		return "Hola Munda"
	}
	else if (language=="fr")
	{
		return "Bonjour Monde"
	}
	else
	{
	return "Hello World"
	}
}

helloWorld("de");
helloWorld("es");
helloWorld("fr");
helloWorld("en");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score)
{
	if (score<=49)
	{
		return "F"
	}
	else if (score<=59 && score >=50 )
	{
		return "D"
	}
	else if (score<=69 && score >=60 )
	{
		return "C"
	}
	else if (score<=79 && score >=70 )
	{
		return "B"
	}
	else
	{
		return "A"
	}
}

assignGrade(40);
assignGrade(62);
assignGrade(75);
assignGrade(89);


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number)
{
	if (number == 1)
	{
		return "" + number + " " + noun
	}
	else
	{
		if (noun == "goose")
		{
			return "" + number + " geese"
		}
		else
		{
		return "" + number + " " + noun +"s"
		}
	}
}

pluralize("cat", 5)
pluralize("dog", 1)
pluralize("goose", 1)
pluralize("goose", 6)


