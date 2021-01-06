const socket = io();
alert("Works")
console.log("yes")
// $(function () {
//     var socket = io();
//     $('form').submit(function(e) {
//       e.preventDefault(); // prevents page reloading
//       socket.emit('chat message', $('#m').val());
//       $('#m').val('');
//       return false;
//     });
// });
  
// $(function () {
// var socket = io();
// $('form').submit(function(e){
//     e.preventDefault(); // prevents page reloading
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
// });
// socket.on('chat message', function(msg){
//     $('#messages').append($('<li>').text(msg));
// });
// });


// const socket = io();
// let getForm = document.getElementsByTagName("FORM");
// getForm.addEventListener('submit', (e) => {
//     e.preventDefault(); //prevents page from reloading
//     let chatId = document.getElementById("m");
//     socket.emit('chat message', chatId.value);
//     chatId.value = ''
//     return false;
// });
// socket.on('chat message', (msg) =>{
//     let mesDOM = document.getElementById('#messages').innerHTML += "<li>"
//     mesDOM.inn
// })
