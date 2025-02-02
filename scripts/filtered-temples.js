const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        const isMenuVisible = navMenu.classList.toggle('show'); 
        if (isMenuVisible) {
            hamburger.textContent = "X"; 
        } else {
            hamburger.textContent = "☰"; 
        }
    });


    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        

        {
            templeName: "Buenos Aires Argentina",
            location: "Ciudad Evita, Buenos Aires Argentina",
            dedicated: "1986, January, 17",
            area: 30652,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
        },

        {
            templeName: "San Diego California",
            location: "San Diego, California, United States",
            dedicated: "1993, April, 25",
            area:72000,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
        },


        {
            templeName: "Asuncion Paraguay",
            location: "Asuncion, Alto Paraguay, Paraguay",
            dedicated: "2002, May, 19",
            area: 16146,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg"
        },
      ];


function createTempleCard(temple) {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');


    templeCard.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
    `;

    return templeCard;
}


function filterTemples(criteria) {
    let filteredTemples = [];

    if (criteria == "old") {
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    } else if (criteria == "new") {
        filteredTemples =temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    } else if (criteria == "large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (criteria == "small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    } else {
        filteredTemples =temples;
    }

    return filteredTemples;
}

function displayTemples(temples) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = '';

    temples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

document.getElementById('old-filter').addEventListener('click', () => {
    const oldTemples = filterTemples("old");
    displayTemples(oldTemples);
});

document.getElementById('new-filter').addEventListener('click', () => {
    const newTemples = filterTemples("new");
    displayTemples(newTemples);
});

document.getElementById('large-filter').addEventListener('click', () => {
    const largeTemples = filterTemples("large");
    displayTemples(largeTemples);
});

document.getElementById('small-filter').addEventListener('click', () => {
    const smallTemples = filterTemples("small");
    displayTemples(smallTemples);
});

document.getElementById('home-filter').addEventListener('click', () => {
    displayTemples(temples);
})

document.addEventListener("DOMContentLoaded", function () {
    displayTemples(temples);
});