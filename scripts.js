function SubscriptionMsg() {
    if (document.getElementById("email").innerHTML.length == 0) {
        var message = document.getElementsByClassName('message')[0];
        message.innerHTML += "Please enter a valid email address";}
    else {
        var message = document.getElementsByClassName('message')[0];
        var newemail =document.getElementById("email").innerHTML;
        message.innerHTML += "Thank you! Your email address ${newmail} has been added to our mailing list!";
    }
      }