const menu = [
    {
        name: "Burger",
        price: 14,
        description: "Juicy Burger",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
        meat: "beef",
        sales: ["monday", "thursday"]
    },
    {
        name: "Grilled Cheese",
        price: 13,
        description: "Very Good Grilled Cheese",
        image: "https://hips.hearstapps.com/hmg-prod/images/airfryergrilledcheese1-1644940121.jpg",
        meat: "none",
        sales: ["tuesday", "friday"]
    },
    {
        name: "French Fries",
        price: 6,
        description: "Crispy Fries",
        image: "https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
        meat: "none",
        sales: ["saturday", "sunday"]
    },
    {
        name: "Buffalo Wings",
        price: 9,
        description: "Spicy Buffalo Wings",
        image: "https://img.buzzfeed.com/video-api-prod/assets/7def155256434be9ac01e752e1b79558/Facebook_Square.jpg",
        meat: "chicken",
        sales: ["wednesday", "monday"]
    },
    {
        name: "Chicken Tenders",
        price: 8,
        description: "Crispy Chicken Tenders",
        image: "https://thecozycook.com/wp-content/uploads/2020/07/Fried-Chicken-Tenders-f.jpg",
        meat: "chicken",
        sales: ["saturday", "thursday"]
    },
    {
        name: "Steak",
        price: 6,
        description: "Made From Rats Caught in The Kitchen",
        image: "https://www.seriouseats.com/thmb/lBAvOl5D32f_fge1kx8Asver10Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
        meat: "beef",
        sales: ["friday", "thursday"]
    },
    {
        name: "Caesar Salad",
        price: 9,
        description: "Salad with Chicken",
        meat: "chicken",
        image: "https://www.verywellfit.com/thmb/c3anlJTrJwv1nAAhXUvKqgjndTo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/caesar-salad-with-grilled-chicken-121664016-5bd22cbc46e0fb00519577c3.jpg",
        sales: ["tuesday", "friday"]
    },
    {
        name: "Ice Cream",
        price: 11,
        description: "Delicious Ice Cream",
        image: "https://hips.hearstapps.com/hmg-prod/images/easiest-ever-fruit-and-coconut-ice-cream-1643120950.jpg?crop=0.990xw:0.660xh;0,0.158xh&resize=640:*",
        meat: "none",
        sales: ["tuesday", "thursday"]
    }
]

const d = new Date();
var day = '';

switch (d.getDay()) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'moday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
}

const menuDiv = document.querySelector("#menu")
display(menu)

document.querySelector("#all").addEventListener("click", function () {
    menuDiv.innerHTML = ''
    display(menu)
});
document.querySelector("#beef").addEventListener("click", function () {
    menuDiv.innerHTML = ''
    const filtered = menu.filter(item => item.meat === "beef");
    display(filtered)
});
document.querySelector("#chicken").addEventListener("click", function () {
    menuDiv.innerHTML = ''
    const filtered = menu.filter(item => item.meat === "chicken");
    display(filtered)
});
document.querySelector("#vegetarian").addEventListener("click", function () {
    menuDiv.innerHTML = ''
    const filtered = menu.filter(item => item.meat === "none");
    display(filtered)
});

document.querySelector("#theme-button").addEventListener("click", function () {
    if (document.body.classList.contains('light')) {
        document.body.classList = ['dark']
    }
    else {
        document.body.classList = ['light']
    }
});

function display(array) {
    console.log(day)
    const withSales = array.map(sale)
    withSales.forEach(item => {
        menuDiv.insertAdjacentHTML (
            "beforeend",
            `<div class="menu-object">
                <h2>${item.name}</h2>
                <img class="menu-image" src="${item.image}">
                <p class="menu-object-price">$${item.price}</p>
                <p class="menu-object-text">${item.description}</p>
            </div>`
        )
    })
}

function sale(item) {
    if (item.sales.includes(day)) item.price = item.price/2
    return item
}