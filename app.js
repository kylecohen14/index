// let userName = 'Kyle'
// userName = 'Summer'
// console.log(userName)

// userName = "Spring"
// console.log(username)



let userName = prompt('Enter Name: ');
console.log(userName);
document.write('<h2>' + userName + '</h2>');



let question1 = prompt('Do you love fishing?');
console.log(question1);

if (userAnswer == 'yes') {
    document.write('<h3>Meet me at the boat ramp! ' + userName +'</h3>');
} else {
    document.write('<h3>' + userName +', go buy some fishing gear.</h3>');
}