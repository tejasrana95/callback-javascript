console.log("hello!");

function greetings(name) {
  console.log(`Hello Mr. ${name}`);
}

function getUserName(callback) {
  var name = prompt("enter your name");
  callback(name);
}

getUserName(greetings);
