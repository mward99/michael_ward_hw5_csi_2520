

var messages = document.getElementById("messages");
var messages = document.getElementById("message");
var messages = document.getElementById("button");

button.addEventListener("click", function(){
 var newMessage = document.createElement("li");
 newMessage.innerHTML = message.value;
 messages.appendChild(newMessage);
 message.value = "";
});
