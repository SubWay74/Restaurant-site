//nav 

const navLinks = document.getElementById("nav-links");
const homeNav = document.getElementById("home-nav");
const menuNav = document.getElementById("menu-nav");
const contactsNav = document.getElementById("contacts-nav");

function removingActiveNavClass() {
    navLinks.childNodes.forEach((e) => {
        if(e.nodeType != 3) {
            e.classList.remove("active")
        }
    })
}

homeNav.addEventListener("click", (e) => {
    removingActiveNavClass()
    e.target.classList.add("active")
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
menuNav.addEventListener("click", (e) => {
    removingActiveNavClass()
    e.target.classList.add("active")
    menuEl.scrollIntoView()
    window.scrollTo({
        top: 450,
        behavior: "smooth"
    })
})
contactsNav.addEventListener("click", (e) => {
    removingActiveNavClass()
    e.target.classList.add("active")
    openPop.scrollIntoView()
})


window.onscroll = function () {
    if (window.scrollY <= 440 ) {
        removingActiveNavClass()
        homeNav.classList.add("active")
    } else if (window.scrollY >= 450 && window.scrollY <= 600) {
        removingActiveNavClass()
        menuNav.classList.add("active")
    } else if (window.scrollY >= 1000) {
        removingActiveNavClass()
        contactsNav.classList.add("active")
    }
}


// main section
const mainSectionEl = document.getElementById("main-sec");

let backgroundImages = [
    "img/resturant.webp",
    "img/resturant2.webp",
    "img/resturant3.webp", 
    "img/resturant4.webp"
]

let backgroundChange = setInterval(function () {
    let randomNum = Math.floor(Math.random() * backgroundImages.length)
    mainSectionEl.style.backgroundImage = `url(${backgroundImages[randomNum]})`;
    // console.log(backgroundImages[randomNum])
}, 3000)


//menu section
const menuList = document.getElementById("menu-list")
const menuAll = document.getElementById("menu-all");
const menuFood = document.getElementById("menu-food");
const menuDrinks = document.getElementById("menu-drinks");
const menuSalad = document.getElementById("menu-salad");

const menuEl = document.getElementById("menu-pic");

let arrOfMenu = [
    {
        typeOfFood: "food",
        image: "img/meat-1.webp",
        available: true
    },
    {
        typeOfFood: "food",
        image: "img/meat-2.webp",
        available: true
    },
    {
        typeOfFood: "food",
        image: "img/meat-3.webp",
        available: true
    },
    {
        typeOfFood: "food",
        image: "img/meat-4.webp",
        available: true
    },
    {
        typeOfFood: "drinks",
        image: "img/drink1.webp",
        available: true
    },
    {
        typeOfFood: "drinks",
        image: "img/drink2.webp",
        available: true
    },
    {
        typeOfFood: "drinks",
        image: "img/coffe1.webp",
        available: true
    },
    {
        typeOfFood: "drinks",
        image: "img/coffe2.webp",
        available: true
    },
    {
        typeOfFood: "salad",
        image: "img/salad1.webp",
        available: true
    },
    {
        typeOfFood: "salad",
        image: "img/salad2.webp",
        available: true
    },
]

let menuType = "all";

//adding the menu
function checker() {
    for(let i = 0; i <   arrOfMenu.length; i++) {
        const liEl = document.createElement("li");
        const imgEl = document.createElement("img");
    
        if(arrOfMenu[i].typeOfFood === menuType || menuType === "all") {
            imgEl.setAttribute("src", arrOfMenu[i].image);
            imgEl.setAttribute("alt", arrOfMenu[i].typeOfFood);
        
            liEl.appendChild(imgEl)
        
            menuEl.appendChild(liEl);
        }
    }
}
checker()

//removing loop
function remover() {
    menuEl.childNodes.forEach( (k) => {
        if(k.nodeType != 3 && k.nodeType != 8) {
                k.classList.add("hide");
        }
    })
}

function removingActiveClass() {
    menuList.childNodes.forEach((e) => {
        if(e.nodeType != 3) {
            e.classList.remove("active")
        }
    })
}


// all button function
menuAll.addEventListener("click", (e) => {
    removingActiveClass()
    e.target.classList.add("active")
    menuType = "all";
    remover() 
    checker()
})
// food button function
menuFood.addEventListener("click", (e) => {
    menuType = "food";
    removingActiveClass()
    e.target.classList.add("active")
    remover() 
    checker()
})
// drinks button function
menuDrinks.addEventListener("click", (e) => {
    menuType = "drinks";
    removingActiveClass()
    e.target.classList.add("active")
    remover() 
    checker()
})
// salad button function
menuSalad.addEventListener("click", (e) => {
    menuType = "salad";
    removingActiveClass()
    e.target.classList.add("active")
    remover() 
    checker()
})

const openPop = document.getElementById("open-popup");


const popupEl = document.getElementById("popupel");
const closePop = document.getElementById("close-popup");

// open popup function

const ourPlaceImg = document.querySelector(".img img");
const ourPlacePopImg = document.querySelector(".popup");


function openPopup() {
    openPop.addEventListener("click", () => {
        popupEl.classList.toggle("open-pop")
    })
}
openPopup()

// close popup function

function closePopup() {
    Event.preventDefault()
    closePop.addEventListener("click", () => {
        popupEl.classList.remove("open-pop")
    })
}
closePopup() 
