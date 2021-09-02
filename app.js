const menu =[
    {
        id: 1,
        title: 'bison burger',
        category: 'entree',
        price: 9.99,
        img: "./img/food0item1.jpg",
        description:"1/3 pound bison meat top with homemade burger sauce. Customize it with unlimited toppings. Served with a side of fries and a drink."
    },
    {
        id: 2,
        title: 'buffalo chicken sandwich',
        category: 'entree',
        price: 8.99,
        img: "./img/food-item2.jpg",
        description:"Organic chicken raised in a steroid-free environment. Tossed in Duke's buffalo sauce topped with cajun coleslaw, in between yeast rolls. Served with a side of fries and a dink. "
    },
    {
        id: 3,
        title: 'veggie bowl',
        category: 'appetizer',
        price: 3.99,
        img: "./img/food-item3.jpg",
        description:"A randomized choice of five different vegetables or a selection of you choice. *Let the server know of any allergies* "
    },
    {
        id: 4,
        title: 'calamari',
        category: 'appetizer',
        price: 3.99,
        img: "./img/food-item4.jpg",
        description:"A side of calamari with tomato sauce. Tossed in panko breading and fried in vegetable oil."
    },
    {
        id: 5,
        title: 'strawberry shortcake',
        category: 'desserts',
        price: 4.99,
        img: "./img/food-item5.jpg",
        description:"Strawberry cheesecake short cup cake. Topped with organic  strawberries."
    },
    {
        id: 6,
        title: 'tropical mojitos sliders',
        category: 'drinks',
        price: 11.99,
        img: "./img/food-item6.jpg",
        description:"You get 3 3oz mojitos of mango, lime, and dragon fruit flavors."
    },

]

const sectionCenter = document.querySelector('.section-center');

const container = document.querySelector('.btn-container');


const filterBtn = document.querySelectorAll('.filter-btn');



window.addEventListener('DOMContentLoaded', () => {
    displayMenuItem(menu);

})



const displayMenuItem = (menuItems) => {
     let displayMenu = menuItems.map((item) => {
        return `
            <article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.description}</p>
                </div>
            </article> 
        `
    });
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu;
}

const displayMenuBtn = () => {
        const categories = menu.reduce((values,item) => {
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['all']
    );
    const  categoryBtn = categories.map((category) => {
    return `
        <button class="filter-btn" type="button" data-id=${category}>
            ${category}
        </button>
    `
}).join('');
container.innerHTML = categoryBtn;
const filterBtn = document.querySelectorAll('.filter-btn');
//filterBtns
filterBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItems) => {
            if(menuItems.category === category){
                return menuItems;
            }
        });
        if (category === 'all'){
            displayMenuItem(menu)
        } else{
            displayMenuItem(menuCategory)
        }
    })
})
}

displayMenuBtn();