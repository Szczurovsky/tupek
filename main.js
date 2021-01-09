class Slider {
    constructor() {
        this.mainMenu = document.querySelector(".mainMenu");
        this.openMenu = document.querySelector(".openMenu");
        this.closeMenu = document.querySelector(".closeMenu");

        this.openMenu.addEventListener("click",this.menuDown.bind(this));
        this.closeMenu.addEventListener("click",this.menuUp.bind(this));
    }
    menuDown(){
        this.mainMenu.style.top="0";
    }
    menuUp(){
       this.mainMenu.style.top ="-120%";
    }
}
const slider = new Slider();