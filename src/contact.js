function createContact(){
    const contact = document.createElement("div");
    contact.classList.add('contact');

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent ="123-456-789";
    contact.appendChild(phoneNumber);

    const address = document.createElement("p");
    address.textContent = "banana slug lane 32";
    contact.appendChild(address);

    return contact;
}

function loadContact(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact