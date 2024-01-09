import Food from './food.png';
function createHome(){
    const home = document.createElement('div');
    home.classList.add("home");
    const name = document.createElement('div');
    name.classList.add("name");
    name.textContent = "Random Restaurant";
    home.appendChild(name);
    const image = new Image();
    image.src = Food;
    image.width = "400";
    image.height = "400";
    home.appendChild(image);
    const description = document.createElement('p');
    description.textContent = "yummy food is served here.";
    home.appendChild(description);

    return home;
}

function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;