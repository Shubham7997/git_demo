const firebaseConfig = {
    apiKey: "AIzaSyAEUkroMM5IxaqfYwRmFQx0oBFXp4f-3yA",
    authDomain: "demoblogsite-8e8ad.firebaseapp.com",
    databaseURL: "https://demoblogsite-8e8ad.firebaseio.com",
    projectId: "demoblogsite-8e8ad",
    storageBucket: "demoblogsite-8e8ad.appspot.com",
    messagingSenderId: "57834854897",
    appId: "1:57834854897:web:dd39855d2f345c36858c50",
    measurementId: "G-FR8G1ZRP3D"
  };

firebase.initializeApp(firebaseConfig);

var uref = firebase.database().ref("userInputs");

document.getElementById("main").addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault(); 
    //alert("J");
    state = "K";
    readState(state);
    /*var newuserInputsRef = uref.push();
    newuserInputsRef.set({
        name:"shubham",
        lname:"nandi"
    });*/
}

function readState(state){
    var centers;
    var ref = firebase.database().ref(state);
    //alert("A");
    ref.on('value', (data) => {
        //alert("B")
     centers = data.val();
     console.log(data.val());
     document.getElementById("centers").innerHTML ="<br>"+centers;
     //alert(centers);
    }, function (err){
        console.error(err);
    });
    //alert("C")
}
