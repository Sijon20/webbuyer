// sing up system for website using local storage email and password
function singup() {
    var user = document.getElementById('username').value;
    var email = document.getElementById('singupemail').value;
    var password = document.getElementById('singupPass').value;
    //var userpass = document.getElementById('username').value + document.getElementById('singupPass').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
   // console.log(user, typeof user, email, typeof email, password, typeof password, confirmPassword, typeof confirmPassword);
    // i dont know why this is not working [if (user == '' && email == '' && password == '' )]
    if (user == "") {
        alert("Please fill all the fields");
    }
    else if (email == "") {
        alert("Please fill all the fields");
    }
    else if (password == "") {
        alert("Please fill all the fields");
    }
    else {

        if (password !== confirmPassword) {
            alert("Passwords do not match");
        }

        else if (user === localStorage.getItem('username') || email === localStorage.getItem('email')) {
            alert("Your account already axist. Login Your account");
        }
        else if (user !== localStorage.getItem('usernamme')) {
            localStorage.setItem('username', user);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert("Sign Up Successful");
        }


    }
}
// using api for sing up system using http post method

// async function singup() {
//     e.preventDefault();
//     var user = await document.getElementById('username').value;
//     var email = await document.getElementById('singupemail').value;
//     var password = await document.getElementById('singupPass').value;
//     var confirmPassword = await document.getElementById('confirmPassword').value;
//     if (user == "") {
//         alert("Please fill all the fields");
//     }
//     else if (email == "") {
//         alert("Please fill all the fields");
//     }
//     else if (password == "") {
//         alert("Please fill all the fields");
//     }
//     else {
//         if (password !== confirmPassword) {
//             alert("Passwords do not match");
//         }
//         else {
//             fetch('https://imdb8.p.rapidapi.com/auto-complete', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     username: user,
//                     email: email,
//                     password: password
//                 })
//             }).then(res => res.json())
//                 .then(data => console.log(data))
//                 .catch(err => console.log(err));
//         }
//     }
// }
