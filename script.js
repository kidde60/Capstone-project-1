function myFunction(x) {
    x.classList.toggle("change");
}
let menu = document.querySelector('.navbar');
let navbar = document.querySelector('.navbar-list');

menu.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
})

let Data = [
    {
        class: 'fa-solid fa-square-parking',
        subtitle: 'Travel Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        class: 'fa-solid fa-utensils',
        subtitle: 'Catering Service',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        class: 'fa-solid fa-bed',
        subtitle: 'Babysitting',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        class: 'fa-solid fa-shirt',
        subtitle: 'Laundry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        class: 'fa-solid fa-car',
        subtitle: 'Hire Driver',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
    {
        class: 'fa-solid fa-martini-glass',
        subtitle: 'Bar & Drink',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    },
]
const section = document.querySelector('.services');
Data.forEach((item, index) => {
    const services = document.createElement('div');
    services.className = 'services-item'
    section.appendChild(services);
    let icon = document.createElement('i');
    icon.className = Data[index].class;
    services.appendChild(icon);
    let heading = document.createElement('h2');
    heading.textContent = Data[index].subtitle;
    services.appendChild(heading);
    let paragraph = document.createElement('p');
    paragraph.textContent = Data[index].description;
    services.appendChild(paragraph);
});