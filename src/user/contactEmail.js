/* 
    Sends email when contact form is submitted
*/

// form inputs:
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("text");

// form:
const submit = document.getElementsByClassName("form-contact")[0];

//triggers when form submitted
submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Message Sending...");

    //creating the email body:
    const emailBody = `
    Name:  
    ${username.value} 
    <br> Email: 
    ${email.value} 
    <br> Phone: 
    ${phone.value} 
    <br> Message:  
    ${message.value}
    <br> 
    <br> 
    <br> 
    <i>Please note, <b>faheemk.dev@gmail.com</b> is not the sender of this email. That is the email address of the Developer that setup the contact form email on the website.</i>
    `;

    //sends email:
    Email.send({
        SecureToken: "d6c6f7ba-0ce3-4994-89be-dc343148a62e",
        To: "mississaugachessclub@gmail.com",
        From: "faheemk.dev@gmail.com",
        Subject: " A Client from the Mississauga Chess Club Website is trying to Reach Us!",
        Body: emailBody,
    })
        .then((response) => {
            alert("Message has been Sent Succesfully");
            console.log("Message has been sent", response, response.message);
        })
        .catch((error) => {
            alert("Error, We could not reach the server to send the message, please try again later");
            console.log(`Message Could Not be sent and here is why --> ${error.message, error} `)
        })

});
