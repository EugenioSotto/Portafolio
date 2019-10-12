const burgerButton = document.querySelector("#BurgerButton")
const menu = document.querySelector(".Menu")
const navItems = document.querySelectorAll(".NavbarItem")

burgerButton.addEventListener("click",activateMenu)

for (let i = 0; i <= navItems.length - 1; i++) {
    navItems[i].addEventListener("click", activateMenu)
}

function activateMenu () {
    if (menu.classList.contains("Active") == true) {
        menu.classList.remove ("Active")
    } else {
        menu.classList.add ("Active")
    }
}


