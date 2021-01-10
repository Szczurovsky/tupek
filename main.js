class Menu {
    constructor() {
        this.mainMenu = document.querySelector(".mainMenu");
        this.openMenu = document.querySelector(".openMenu");
        this.closeMenu = document.querySelector(".closeMenu");

        this.openMenu.addEventListener("click", this.menuDown.bind(this));
        this.closeMenu.addEventListener("click", this.menuUp.bind(this));
    }
    menuDown() {
        this.mainMenu.style.top = "0";
    }
    menuUp() {
        this.mainMenu.style.top = "-120%";
    }
}

// class Oferta {
//     constructor() {
//         this.id1 = document.querySelector(".id1");
//         this.oferujemy = document.querySelector(".oferta");
//         this.smartfon = document.querySelector(".smartfony p");
//         this.laptop = document.querySelector(".laptop");
//         this.laptopText = document.querySelector(".laptop p");
//         // window.addEventListener("load",this.fromLeft.bind(this));
//         window.addEventListener("load", this.fromRight.bind(this));
//         window.addEventListener("load", this.fromLeft.bind(this));
//     }
//     fromLeft() {
//         var bottom_of_object =
//             this.laptop.offsetTop;
//         var bottom_of_window =window.scrollTop + window.height;
//         this.oferujemy.classList.add("moveLeftdiv");
//         this.oferujemy.classList.remove("fromLeftdiv");
//         () => {
//             if (bottom_of_window <= bottom_of_object) {
//                 this.laptopText.classList.remove("fromLeftdiv");
//                 this.laptopText.classList.add("moveLeftdiv");
//                 this.laptop.classList.remove("fromLeft");
//                 this.laptop.classList.add("moveLeft");
//             }
//         };
//     }
//     fromRight() {
//         this.smartfon.classList.remove("fromRightdiv");
//         this.smartfon.classList.add("moveRightdiv");
//         this.id1.classList.remove("fromRight");
//         this.id1.classList.add("moveRight");
//     }
// }
// class Program {
//     constructor() {
//         const menu = new Menu();
//         const oferta = new Oferta();
//     }
// }
const menu = new Menu();

