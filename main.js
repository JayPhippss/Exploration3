var config = {
    apiKey: "AIzaSyCbPsLRbqWnMtX2ck01sZF9Pmlk_vqXh9E",
    authDomain: "exploration3-37f52.firebaseapp.com",
    databaseURL: "https://exploration3-37f52.firebaseio.com",
    projectId: "exploration3-37f52",
    storageBucket: "exploration3-37f52.appspot.com",
    messagingSenderId: "358307579434"
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('contactInfo');
var contactRef = firebase.database().ref().child("contactInfo");

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInput('name');
    var email = getInput('email');
    var number = getInput('number');
    var address = getInput('address');
    
    saveMessage(name,email,number,address);
    
    document.querySelector('.alert').style.display = 'block';
    
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    document.getElementById('contactForm').reset();
}

function getInput(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, number, address){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
       name: name,
        email: email,
        number: number,
        address: address
    });
}

contactRef.on("child_added", snap => {
    var addy = snap.child("address").val();
    var emil = snap.child("email").val();
    var names = snap.child("name").val();
    var nums = snap.child("number").val();
    
    $("#table_body").append("<tr><td>" + names + "</td><td>" + emil + "</td><td>" + addy + "</td><td>" + nums + "</td></tr>");
});