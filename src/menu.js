import Menu1 from "./menu1.png"
import Menu2 from "./menu2.png"
function createMenu (){
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const img1 = new Image();
    img1.src = Menu1;
    img1.classList.add("menu-image");
    menu.appendChild(img1);
    const img2 = new Image();
    img2.src = Menu2;
    img2.classList.add("menu-image");
    menu.appendChild(img2);

    return menu;
}

function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu