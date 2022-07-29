function openNav() {
    document.getElementById('myNav').style.height = '100%';
} openNav();

/* Close */
function closeNav() {
    document.getElementById('myNav').style.height = '0%';
} closeNav();
const overlay = document.querySelector('#myNav');
const links = document.querySelector('.menu-link');
const links1 = document.querySelector('.menu-link1');
const links2 = document.querySelector('.menu-link2');
links.addEventListener('click', () => {
    if (overlay.style.display === 'block') {
        overlay.style.height = '100%';
    } else {
        overlay.style.height = '0%';
    }
});
links1.addEventListener('click', () => {
    if (overlay.style.display === 'block') {
        overlay.style.height = '100%';
    } else {
        overlay.style.height = '0%';
    }
});
links2.addEventListener('click', () => {
    if (overlay.style.display === 'block') {
        overlay.style.height = '100%';
    } else {
        overlay.style.height = '0%';
    }
});

// Data array
let Data = [
    {
        source: 'images/car3.jpg',
        alt: 'car-image',
        class: 'fa-solid fa-square-parking',
        subtitle: 'Travel Plan',
        description: 'A travel plan is a package of actions designed by a workplace, school or other organisation to encourage safe, healthy and sustainable travel options. By reducing car travel, travel plans can improve health and wellbeing, free up car parking space, and make a positive contribution to the community and the environment.',
    },
    {
        source: 'images/catering.jpg',
        alt: 'food-image',
        class: 'fa-solid fa-utensils',
        subtitle: 'Catering Service',
        description: 'The full service means you will have kitchen staff, bartenders, servers, and the front of the house to set up tables, service area, manage portions, bus away dirty glasses and plates and finally pack everything at the end of the party. While the traditional caterers only set up the buffet tables and display the food.',
    },
    {
        source: 'images/baby.jpg',
        alt: 'car-image',
        class: 'fa-solid fa-bed',
        subtitle: 'Babysitting',
        description: 'the work of taking care of someones baby or child while that person is out, often as a paid job  he earns a little extra money by doing babysittingI love to spend time with my friends kids and my friend is thrilled with the free babysitting. I love to spend time with my friends kids and my friend is thrilled with the free babysitting.',
    },
    {
        source: 'images/loundary2.jpg',
        alt: 'loundary',
        class: 'fa-solid fa-shirt',
        subtitle: 'Laundry',
        description: 'Laundry refers to the clothes and bedding that you can wash in your washing machine or at the laundromat. Nothing smells quite as good as clean laundry.The definition of laundry is a group of clothes or linens that are being washed, or a place where clothing and other fabrics are washed or cleaned.',
    },
    {
        source: 'images/car1.jpg',
        alt: 'car-image',
        class: 'fa-solid fa-car',
        subtitle: 'Hire Driver',
        description: 'Rent A Driver Uganda offers professional and experienced private drivers in Uganda who will take you to any destination in Uganda at affordable rates in the most convenient way possible. Our chauffeurs and vehicles are also available for weddings, tours & other formal occasions. Our drivers are experienced in city tours and park safaris.',
    },
    {
        source: 'images/bar1.jpg',
        alt: 'drinks-image',
        class: 'fa-solid fa-martini-glass',
        subtitle: 'Bar & Drink',
        description: 'Heres a list of the most popular cocktails, common drinks & classic recipes that every bartender should know to be successful at their job.You can never go wrong with a Moscow mule anywhere you go. Its just vodka, ginger beer, lime juice, and a fresh sprig of mint. Jack and Coke: with Jack Daniels · Lynchburg Lemonade: Jack Daniels, triple sec.',
    },
]
// const section = document.querySelector('.services');
// Data.forEach((item, index) => {
//     const container = document.createElement('div')
//     container.className = 'container';
//     let image = document.createElement('img');
//     image.src = Data[index].source;
//     image.alt = Data[index].alt;
//     container.appendChild(image);
//     section.appendChild(container);
//     const services = document.createElement('div');
//     services.className = 'services-item'
//     container.appendChild(services);
//     let heading = document.createElement('h2');
//     heading.textContent = Data[index].subtitle;
//     services.appendChild(heading);
//     let paragraph = document.createElement('p');
//     paragraph.textContent = Data[index].description;
//     services.appendChild(paragraph);
// });



function services(object, n) {
    let html = "";
    for (let i = 0; i < n; i += 1) {
        html += `
        <div class="container">
                        <img src="${object[i].source}" alt="${object[i].alt}">
                        <div class="services-item">
                            <h2>${object[i].subtitle}</h2>
                            <p>${object[i].description}</p>
                        </div>
                    </div>
        `
        document.querySelector('.services').innerHTML = html;
    }
} services(Data, 2);

let seemore = document.querySelector('.seeMore');
seemore.addEventListener('click', () => {
    services(Data, Data.length);
})

window.onload = () => {
    let html = "";
    for (let i = 0; i < 4; i += 1) {
        html += `
        <div class="container">
                        <img src="${object[i].source}" alt="${object[i].alt}">
                        <div class="services-item">
                            <h2>${object[i].subtitle}</h2>
                            <p>${object[i].description}</p>
                        </div>
                    </div>
        `
        document.querySelector('.services').innerHTML = html;
    }
}
