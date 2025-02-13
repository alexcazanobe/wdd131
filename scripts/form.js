const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;



document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");

    // Product Array
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];

    // Populate Product Options
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Review Counter using localStorage
    if (localStorage.getItem("reviewCount") === null) {
        localStorage.setItem("reviewCount", 0);
    }

    // Increase review count on form submission
    document.querySelector("form").addEventListener("submit", function () {
        let count = parseInt(localStorage.getItem("reviewCount")) + 1;
        localStorage.setItem("reviewCount", count);
    });
});
