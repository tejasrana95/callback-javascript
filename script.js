function hello(name) {
  alert(`Hi Mr./Miss ${name}`);
}

function askUserName(callbackFunc) {
  const a = prompt("Hi can you please tell me your name?");
  if (a.trim()) {
    callbackFunc(a);
  } else {
    alert("I dont know you!");
  }
}

askUserName(hello);
