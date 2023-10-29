window.onload = function() {

    var submission = document.querySelector("button");
    var message = document.getElementsByClassName("message")[0];
    var email = document.getElementById("email").value;

    submission.addEventListener("click", function(event){
        
        event.preventDefault();
        
        if (email !="" && email.indexOf("@") !== -1) {
            message.innerHTML = "Thank you your email address " + email +  " has been added to our mailing list";
        }else {
            message.innerHTML = "Please enter a valid email address";
        }
    }
    );
}
