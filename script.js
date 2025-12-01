// Assignment: DOM Manipulation Activity
// Author: Brandon Turner
// Date: 12/01/2025



let userName = prompt("Welcome! What is your name?");

if (userName && userName.trim() !== "") {
    document.getElementById("welcomeMessage").textContent =
        "Welcome, " + userName + "!";
} else {
    document.getElementById("welcomeMessage").textContent =
        "Welcome to My Portfolio!";
}



-
let projectsSection = document.getElementById("projects");

let newProject = document.createElement("p");
newProject.textContent =
    "I recently built a dynamic webpage that updates content using JavaScript DOM methods.";

projectsSection.appendChild(newProject);





let notification = document.createElement("div");
notification.id = "notification";
notification.style.background = "gold";
notification.style.padding = "10px";
notification.style.textAlign = "center";
notification.style.fontWeight = "bold";
notification.style.display = "none";


document.body.prepend(notification);

setTimeout(() => {
    notification.textContent = "📢 New update available on the site!";
    notification.style.display = "block";
}, 2000);




let mainHeading = document.querySelector("#welcomeMessage");
let projectHeading = document.querySelector("#projects h2");

mainHeading.style.color = "royalblue";
projectHeading.style.borderBottom = "2px solid black";




let contactForm = document.querySelector("#contact form");
let formStatus = document.createElement("p");

contactForm.appendChild(formStatus);

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formStatus.textContent = "Sending message...";
    formStatus.style.color = "black";

    setTimeout(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        formStatus.style.fontWeight = "bold";
    }, 2500);
});
