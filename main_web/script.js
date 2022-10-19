// var obj = [
//   {
//     username: 'sijon20',
//     email: 'freefiar99@gmail.com',
//     pass: '12345678'
// }]

function addData2() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('singupemail').value;
  var pass = document.getElementById('singuppass').value;
  //  store data
  localStorage.setItem('email', email);
  localStorage.setItem('pass', pass);
  localStorage.setItem('username', username);
  alert('saved');
} 
function addData() {
  var loginemail = document.getElementById('loginemail');
  var loginpass = document.getElementById('loginpass');
  loginpass = String(loginpass);
  var pass4 = loginpass;
  var pass5 = localStorage.getItem('pass')
  console.log(typeof loginpass , loginpass.value ,pass4 , typeof pass5, pass5 )
  //  store data
  // if ( loginemail.value == localStorage.getItem('email') && loginpass == localStorage.getItem('pass')) {
  //   console.log("succes" );
  // } else {
  //   console.log("incorrect", loginemail)
  // }


}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

}
