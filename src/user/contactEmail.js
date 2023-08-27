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
    `;

    //sends email:
    Email.send({
        // SecureToken: "3a9c6519-6fbc-46bd-919e-7e0ad0bbe1ed", --> Real (no work)
        SecureToken: "8e7212e0-fd27-4e45-b9de-c2d05cdc9f22 ",
        To: "abdullahaviator13@gmail.com",
        From: email.value,
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
