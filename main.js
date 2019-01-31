// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8OTRTvPOibGUZTjzE5gbFI6gds2Uln9Y",
    authDomain: "aastha-ee339.firebaseapp.com",
    databaseURL: "https://aastha-ee339.firebaseio.com",
    projectId: "aastha-ee339",
    storageBucket: "aastha-ee339.appspot.com",
    messagingSenderId: "80891817026"
  };
  firebase.initializeApp(config);



 //refrence message collection
 var messagesRef = firebase.database().ref('message');





 document.getElementById('Aastha').addEventListener('submit', submitform);

 function submitform(e) {
     e.preventDefault();

     // get values
     var name = getInputVal('name');
     var company = getInputVal('company');
     var email = getInputVal('email');
     var phone = getInputVal('phone');
     var message = getInputVal('message');

     saveMessage(name, company, email, phone,message);

 }

 // funtion to get from value
 function getInputVal(id) {
     console.log(id);
     return document.getElementById(id).value;

 }



 // save data 
 function saveMessage(name, company, email, phone,message) {
     var newmessagesRef = messagesRef.push();
     newmessagesRef.set({
         name: name,
         company: company,
         email: email,
         phone: phone,
         message: message,
     })

 }