import loadHome from "./home.js"
import loadContact from "./contact.js";
import loadMenu from "./menu.js"

function createHeader(){
    const header = document.createElement("div");
    header.setAttribute("id","header");
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Shoreline";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav(){
    const nav = document.createElement("nav");
    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });
    nav.appendChild(homeButton);

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });
    nav.appendChild(menuButton);
    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll(".button-nav");
    buttons.forEach((b) => {
        b.classList.remove("active");
    })
    button.classList.add("active");
}

function createFooter(){
    const footer = document.createElement("div");
    header.setAttribute("id","footer");

    return footer;
}

function createMain(){
    const main = document.createElement("div");
    main.setAttribute("id","main");
    return main;
}
function loadWebsite(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();
}

export default loadWebsite