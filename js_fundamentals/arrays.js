// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var top_choice = ["Poutine", "Pizza", "Pad Thai", "Beef & Broccoli", "Sushi"]

for (var i=1;i<=top_choice.length;i++)
{ 
console.log("My #" +i+" choice is " + top_choice[i-1] +".")
}

