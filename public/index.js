
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
var currentUserId;

 //Collections Path Ref
var contactPath = "/users/" + currentUserId  + "/";
//var recipientRef =  "/users/" + currentUserId  + "/" + contactRef;
var transactRef;
// InputFields Listener
var txtEmail = document.getElementById('email');
var txtFirstname = document.getElementById('firstname');
var txtLastname = document.getElementById('lastname');
var txtPassword = document.getElementById('password');
var txtCountry = document.getElementById('country');
var txtBirthday = document.getElementById('birthday');
var txtGender = document.getElementById('gender');
var txtMobileNumber = document.getElementById('mobileNumber');
var txtAddress = document.getElementById('address');
var txtCity = document.getElementById('city');

// Buttons Listener

var btnLogout = document.getElementById("endSession");
var btnLog = document.getElementById("disconnect");
var btnaddRecipient = document.getElementById("addRecipient");
var btnSend = document.getElementById("send");
var btnSignUp = document.getElementById("Signup");


if (btnSignUp) {
	btnSignUp.addEventListener('click', function(){
		var mail = txtEmail.value;
	    var pass  = txtPassword.value;
	    var firstName = txtFirstname.value;
        var lastName = txtLastname.value;
	    //Create a new user
	    var promise = firebase.auth().createUserWithEmailAndPassword(mail,pass);

	    promise.then(
	    	// Add a new document with a generated id.
			db.collection("users").add({
			    firstname: firstName,
			    lastname: lastName,
			    email: mail,
			    created : Date.now()
			})
			.then(function(docRef) {
				Swal({
				  type: 'success',
				  title: 'Your account has been created',
				  showConfirmButton: false,
				  timer: 2000,
				  onClose: () => {
				  	 window.location.assign("index.html");
				  }
				})
			})
			.catch(function(error) {
			    console.log("Error adding document: ", error);
			}));
		  promise.catch(e => {
		  	console.log(e.message)
		  	Swal({
			  type: 'error',
			  title: 'Oops...',
			  text: 'This username is already used!',
			})
		  });

	    })   	
	};

 firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          if (window.location.href == "http://localhost:5000/" || window.location.href == "http://localhost:5000/index.html"){          	  
          	  //currentUserId = user.uid;
          	  //alert(currentUserId);
          	  window.location.assign("history-empty.html");          	  
          }
         } else {
         	if (window.location.href != "http://localhost:5000/index.html" && window.location.href != "http://localhost:5000/register.html"){
          	window.location.assign("index.html");
          }
        } currentUserId = user.uid ;
        });


	
if (btnaddRecipient) {	 
	//get current user ID
	
    btnaddRecipient.addEventListener('click', function(){
    	//alert(currentUserId);
    	var userRef = "/users/"+currentUserId;
		var first = txtFirstname.value;
	    var last  = txtLastname.value;
	    var birthday = txtBirthday.value;
        var gend = txtGender.value;
        var mobile = txtMobileNumber.value;
        var addr = txtAddress.value;
		var countr =  txtCountry.value;
		var cit = txtCity.value;
		var today =  Date.now();
	
	    	// Add a new document with a generated id.
			db.collection("users").doc(currentUserId).collection("contacts").add({
				accountRef: userRef,
			    firstname: first,
			    lastname: last,
			    isBanned: false,
			    mobileNumber : mobile,
			    address : addr,
			    country : countr,
			    city : cit,
			    created : today
			})
			.then(function(docRef) {
				Swal({
				  type: 'success',
				  title: first + ' has been saved to your contact list',
				  showConfirmButton: false,
				  timer: 2000
				})
			   console.log("Document written with ID: ", docRef.id);
			})
			.catch(function(error) {
			   console.log("Error adding document: ", error);
			});
		
	    })   	
} 

if (btnLogout) {

	    btnLogout.addEventListener('click', function(){
		firebase.auth().signOut().then(function() {
 		 // Sign-out successful.
 		 window.location.assign("index.html");

		}).catch(function(error) {
  		// An error happened.
  		alert(error.message);
		});

	});
}

if (btnSend) {
   btnSend.addEventListener('click',function(){
   		alert("Fine");
   });
}


if (btnLog) {
	var uid;
	btnLog.addEventListener('click', function(){

		var email = txtEmail.value;
	    var pass  = txtPassword.value;
	    //Sign In
	    var promise = firebase.auth().signInWithEmailAndPassword(email,pass);
	    //var user = firebase.auth().currentUser;	     
	    //window.location.assign("index.html");//uid = user.uid;
	   
	    promise.catch(e => alert(e.message));
	});
}








