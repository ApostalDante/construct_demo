
const home = document.getElementById('home');
const contact = document.getElementById('contact');

function schowMessage() {
    alert('отсутствует макет, пока пусто');
};

function schowContact() {
    alert('213 Baker Street\n Oriel City Kounty 7000 KNW,\n Kountry Name\n+23 994 233 4022\ninfo@konstruct.com ')
}

function schowMessagePost() {
    let form = document.getElementById("inputForm");
    let formInfo = form.value;
    alert(`отключенно.\n Вы вписали: ${formInfo}`);
}

document.querySelector("#btnHome").onclick = function () {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
};
let arrId = ["#btnAbout", "#btnServiced", "#btnWork"]

document.querySelector("#btnAPlan").onclick = schowMessage;

document.querySelector("#btnManage").onclick = schowMessage;

document.querySelector("#btnBuild").onclick = schowMessage;

document.querySelector("#btnAllService").onclick = schowMessage;

document.querySelector("#btnGetIn").onclick = schowMessage;

//document.querySelector("#btnPost").onclick = schowMessage;

//inputForm - получить почту

document.querySelector("#btnContact").onclick = function () {
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
};



document.querySelector("#footerLinkHome").onclick = function () {
    home.scrollIntoView({ behavior: "smooth", block: "start" });
};

document.querySelector("#footerAbout").onclick = schowMessage;

document.querySelector("#footerServices").onclick = schowMessage;

document.querySelector("#footerProjcts").onclick = schowMessage;

document.querySelector("#footerContact").onclick = schowContact;

document.querySelector("#footerFaq").onclick = schowMessage;

document.querySelector("#footerTerms").onclick = schowMessage;

document.querySelector("#footerCareers").onclick = schowMessage;

document.querySelector("#footerBlog").onclick = schowMessage;

document.querySelector("#footerBlog").onclick = schowMessage;

document.querySelector("#footerParters").onclick = schowMessage;

document.querySelector("#footerNews").onclick = schowMessage;






