// get html elements

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// add event
form.addEventListener('submit', (event) => {
  event.preventDefault();

  validate();
});


const sendData=(SuccRate, count)=>{
	if(SuccRate === count){
		alert("Registration successful!")
	}
}
//for form submission
const successMsg = () =>{
	let formConfirm = document.getElementsByClassName('form-control');
	var count = formConfirm.length-1;
	for(let i = 0; i < formConfirm.length; i++){
	 if(formConfirm[i].className  === 'form-control success'){
		 var SuccRate = 0 + i;
		 sendData ( SuccRate, count);
		  
	 } else{
		 return false;
	 }
	}

}

//check email in deep
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;

  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;

  if (dot === emailVal.length - 1) return false;

  return true;
};

// define the validate function

const validate = () => {
  /*trim function will remove the white space from the begining as well as ending*/

  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  //validate username

  if (usernameVal === "") {
    setError(username, "username cannot be blank");
  } else if (usernameVal < 2) {
	  console.log(username)
    setError(username, "username should contain minimum 2 characters");
  } else {
    setSuccess(username);
  }

  //validate email
  if (emailVal === "") {
    setError(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setError(email, "invalid email");
  } else {
    setSuccess(email);
  }

  //validate phone
  if (phoneVal === "") {
    setError(phone, "please enter the phone number");
  } else if (phoneVal.length != 10) {
    setError(phone, "invalid phone number");
  } else {
    setSuccess(phone);
  }

  //validate password
  if (passwordVal === "") {
    setError(password, "password cannot be empty");
  } else if (passwordVal.length < 7) {
    setError(
      password,
      "password should be greator than  or equal to 8 character"
    );
  } else {
    setSuccess(password);
  }
  //confirm password
  if (cpasswordVal === "") {
    setError(cpassword, "please re-enter the password");
  } else if (passwordVal != cpasswordVal) {
    setError(cpassword, "password is not matched");
  } else {
    setSuccess(cpassword);
  }


 successMsg();


};

//for disply error
function setError(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

//for diply success

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
