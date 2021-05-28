
// userName = 'Summer'
// console.log(userName)

// userName = "Spring"
// console.log(username)


function getUserName(){
    let userName = prompt('Enter Name')
    console.log(userName);
    document.write('<h2>' + userName + '</h2>');
    return userName;
    
}

// let user1 = getUserName
// console.log(user1);

function getUserAnswer(){
    let question1 = prompt('Do you love fishing? (yes or no)');
console.log(question1);

if (question1.toLowerCase() == 'yes') {
    document.write('<h3>Meet me at the boat ramp!</h3>');
} else {
    document.write('<h3>Lets go buy some fishing gear.</h3>');
}
}
function getUserAnswer(){
    let question2 = prompt('have you been fishing?')
    let url ="https://pbs.twimg.com/profile_images/605189676476039168/5qZTHZK__400x400.png"
    if (question2.toLowerCase() == 'yes'){
        document.write('<h3>Good for you!</h3>');
        document.write('<img src="https://pbs.twimg.com/profile_images/605189676476039168/5qZTHZK__400x400.png"/>');
    }
}
function userGuessingGame() {
    correctAnswer = Math.floor(Math.random() * 1000) + 1;
    console.log(correctAnswer)
    userAttempts = 10;
    
    for(let i = 0; i <userAttempts; i++){
        let userGuess = prompt("Pick a number between 1 - 1000");
    while (userGuess < 1 || userGuess > 1000) {
       userGuess = prompt('You are not following instructions. Please Enter a Number 1 - 1000');
    }
    if (userGuess == correctAnswer){
        alert('Correct guess.');
        break;
    } else if(userGuess < correctAnswer){
        alert('To low.')
    } else if (userGuess > correctAnswer) {
        alert('To high.')
    } else {
        alert('You did something wrong.')
    }
    console.log(i);
    if (i == userAttempts - 1){
        alert('You could not guess the answer. It is: ' + correctAnswer);
    }
    
    }
}

userGuessingGame();

function pikeTeeth(){
    let numberofpikeTeeth = prompt('how many pike do you want to catch?')
    for(let i = 0; i < numberofpikeTeeth; i ++){
        document.write('<img src="' + url + '">')
    }
}




let likeFishing = prompt('Ready to go fishing?');

if (likeFishing == 'yes'){
    document.write('<h3>You have your priorities right</h3>');
    document.write('<img src="https://content.osgnetworks.tv/gameandfishing/content/photos/gaf-12Punch-SMB.jpg"/>');
}