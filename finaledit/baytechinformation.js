// Initialize Firebase
var config ={
    apiKey: "AIzaSyBKAuN6V2KxAp3tHyy6UaxS2qkTD4EL4w4",
    authDomain: "baytech-f8a48.firebaseapp.com",
    databaseURL: "https://baytech-f8a48-default-rtdb.firebaseio.com",
    projectId: "baytech-f8a48",
    storageBucket: "baytech-f8a48.appspot.com",
    messagingSenderId: "841631661105",
    appId: "1:841631661105:web:fe206b04335e20fbfae910",
    measurementId: "G-J323PT53HV"
  };
firebase.initializeApp(config);

var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});

function pushData(){
  var data = document.getElementById("dataValue").value;
  var dataRef = database.ref('/pushData').push();
  dataRef.set({
    value: data
  });
}

function setData(){
  var slogan = document.getElementById("slogan").value;
  var banner = document.getElementById("banner").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var project = document.getElementById("project").value;
  var aboutus = document.getElementById("aboutus").value;
  var dataRef1 = database.ref('/slogan');
  var dataRef2 = database.ref('/banner');
  var dataRef3 = database.ref('/phone');
  var dataRef4 = database.ref('/email');
  var dataRef5 = database.ref('/address');
  var dataRef6 = database.ref('/project');
  var dataRef7 = database.ref('/aboutus');

  console.log(slogan)
  dataRef1.set({
    value:slogan
  });
  dataRef2.set({
    value:banner
  });
  dataRef3.set({
    value:phone
  });
  dataRef4.set({
    value:email
  });
  dataRef5.set({
    value:address
  });
  dataRef6.set({
    value:project
  });
  dataRef7.set({
    value:aboutus
  });
}

setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());

});

pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('value', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);

  });
  console.log(Object.keys(snapshot.val()));
});