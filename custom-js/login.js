'use strict'
let incorrectPasswordOrEmailAlert = document.getElementsByClassName('alert')[0];
incorrectPasswordOrEmailAlert.classList.remove('d-show');
incorrectPasswordOrEmailAlert.classList.add('d-none');
const main = document.getElementsByTagName('main')[0];

var loginStatus = document.getElementById('user-login');


main.style.marginBottom = "25em";
loginStatus.addEventListener("submit", (event) => {
    if (!loginStatus.checkValidity()) {
        event.preventDefault(); 
        event.stopPropagation(); 
        incorrectPasswordOrEmailAlert.classList.remove('d-show');
        incorrectPasswordOrEmailAlert.classList.add('d-none');
        loginStatus.classList.add("was-validated"); 
    } else {
      event.preventDefault();

      loginUser();
    }
}, true );
function loginUser() {

    
    
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    let correctData = false;
    
    customersRegisterd.forEach(registerd => 
    {
        console.log(registerd.EmailAddress);
        console.log(registerd.passwordID);
        if(registerd.EmailAddress == email && registerd.Password == password)
        {
            correctData = true;
        }
    });

    if (correctData)  {   
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn',1);   
        localStorage.setItem(`currentUser`, email);
        // redirect to shop page 
        window.location.href = "index.html"; 

    }
    else{
        incorrectPasswordOrEmailAlert.classList.add('d-show');
        incorrectPasswordOrEmailAlert.classList.remove('d-none');
    }
    //event.preventDefault();
    
}

