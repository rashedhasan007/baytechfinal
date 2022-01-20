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
firebase.database().ref('service-header1').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('header1').innerHTML = snap.val().value;
  });
firebase.database().ref('service-link1').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('link1').href = snap.val().value;
  });
firebase.database().ref('service-longheader1').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('longheader1').innerHTML = snap.val().value;
  });

firebase.database().ref('service-paragraph1').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('paragraph1').innerHTML = snap.val().value;
  });
firebase.database().ref('service-photo1').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('service-photo1').src = snap.val().value;
  });

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});
firebase.database().ref('service-header2').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('header2').innerHTML = snap.val().value;
  });
firebase.database().ref('service-link2').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('link2').href = snap.val().value;
  });
firebase.database().ref('service-longheader2').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('longheader2').innerHTML = snap.val().value;
  });

firebase.database().ref('service-paragraph2').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('paragraph2').innerHTML = snap.val().value;
  });
firebase.database().ref('service-photo2').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('service-photo2').src = snap.val().value;
  });
firebase.database().ref('service-header3').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('header3').innerHTML = snap.val().value;
  });
firebase.database().ref('service-link3').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('link3').href = snap.val().value;
  });
firebase.database().ref('service-longheader3').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('longheader3').innerHTML = snap.val().value;
  });

firebase.database().ref('service-paragraph3').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('paragraph3').innerHTML = snap.val().value;
  });
firebase.database().ref('service-photo3').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('service-photo3').src = snap.val().value;
  });
firebase.database().ref('service-header4').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('header4').innerHTML = snap.val().value;
  });
firebase.database().ref('service-link4').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('link4').href = snap.val().value;
  });
firebase.database().ref('service-longheader4').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('longheader4').innerHTML = snap.val().value;
  });

firebase.database().ref('service-paragraph4').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('paragraph4').innerHTML = snap.val().value;
  });
firebase.database().ref('service-photo4').on('value',(snap)=>{
    console.log(snap.val().value);
document.getElementById('service-photo4').src = snap.val().value;
  });


setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
  document.getElementById("slogan").innerHTML =snapshot.val();
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