var config = {
  apiKey: "AIzaSyB-Nr2r191bAkgjIgkQsmTviYzQAlw9KO0",
  authDomain: "vape-kingdoom.firebaseapp.com",
  databaseURL: "https://vape-kingdoom.firebaseio.com",
  projectId: "vape-kingdoom",
  storageBucket: "vape-kingdoom.appspot.com",
  messagingSenderId: "624305746713"
};
firebase.initializeApp(config);
document.getElementById('form').addEventListener('submit', submitForm);
function submitForm(e){
        e.preventDefault();
        // Get values
        var name = getInputVal('name');
        var email = getInputVal('email');
        var password = getInputVal('password');
        var message = getInputVal('message');
        document.getElementById('form').reset();
    }
function getInputVal(id){
  return document.getElementById(id).value;
}
function submitForm(e){
  e.preventDefault();
  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var password = getInputVal('password');
  var message = getInputVal('message');
  saveMessage(name, email, password, message);
  document.getElementById('form').reset();
}
  var messagesRef = firebase.database().ref('messages');
  function saveMessage(name, email, password, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      password:password,
      message:message
    });
  }


