// let userName = 'Kyle'
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

function getUserAnwser(){
    let question1 = prompt('Do you love fishing? (yes or no)');
console.log(question1);

if (question1.toLowerCase() == 'yes') {
    document.write('<h3>Meet me at the boat ramp!</h3>');
} else {
    document.write('<h3>Lets go buy some fishing gear.</h3>');
}
}
function getUserAnwser(){
    let question2 = prompt('have you been fishing?')
    let url ="https://pbs.twimg.com/profile_images/605189676476039168/5qZTHZK__400x400.png"
    if (question2.toLowerCase() == 'yes'){
        document.write('<h3>Good for you!</h3>');
        document.write('<img src="https://pbs.twimg.com/profile_images/605189676476039168/5qZTHZK__400x400.png"/>');
    }
}
let user1 = getUserAnwser();

let likeFishing = prompt('Ready to go fishing?');

if (likeFishing == 'yes'){
    document.write('<h3>You have your priorities right</h3>');
    document.write('<img src="https://content.osgnetworks.tv/gameandfishing/content/photos/gaf-12Punch-SMB.jpg"/>');
}