const typeOfBirdInput = document.getElementById('typeOfBird');
const typeOfBird = typeOfBirdInput.value;

const roommateNameInput = document.getElementById('roommateName');
const roommateName = roommateNameInput.value;

const nounInput = document.getElementById('noun');
const noun = nounInput.value;

const liquidInput = document.getElementById('liquid');
const liquid = liquidInput.value;

const bodyPartInput = document.getElementById('bodyPart');
const bodyPart = bodyPartInput.value;


// generateMadLibs function
 const generateMadLibs = (typeOfBird) => {
    madLibsText = typeOfBird;
    return madLibsText;
}

// It was a cold October day. I woke to the smell of ____ roasting in the kitchen.
// My roommate said, "See if ___ needs a fresh ___"
// So I carried a glass of ___ of ___'s room
// When I got there I couldn't believe my ___!
