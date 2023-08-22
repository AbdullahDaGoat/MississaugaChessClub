const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("text");

const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("email form triggered");

    //email body:
    let emailBody = `
    "Name: " +
    ${username.value} +
    "<br> Email: " +
    ${email.value} +
    "<br> Phone:" +
    ${phone.value} +
    "<br> Message: " +
    ${message.value}
    `;

    Email.send({
        SecureToken: "3a9c6519-6fbc-46bd-919e-7e0ad0bbe1ed",
        To: "mississaugachessclub@gmail.com",
        From: email.value,
        Subject: "Contact Form From MCC Website Client",
        Body: emailBody
    })
        .then((response) => {
            alert("Message has been Sent Succesfully");
            console.log(response);
        })

})
