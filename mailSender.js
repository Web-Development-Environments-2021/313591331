function send() {
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let emoji = document.getElementById("emoji").value;
  let full_message = "Email : " + email;
  full_message += "%0D" + message + "%0D" + emoji;
  message.innerHTML = full_message;
  window.open(
    "mailto:berdugoe@post.bgu.ac.il?subject=" +
      subject +
      "&body=" +
      full_message
  );
}
