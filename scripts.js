window.onload=function() {
    var email = document.getElementsByTagName('input');
    const error_message = document.getElementsByClassName('message');
    var submission = document.getElementsByClassName('btn');

    form.addEventListener('submit', function(event) {

        event.preventDefault();
        if (email.value === '') {
            error_message.style.display = "Please enter a valid email address";
        }
        else {
            error_message.style.display = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    }
    )
}


