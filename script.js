// script.js

document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.menu-item');
    var chartContainer = document.getElementById('chart-container');
    var myChart;

    // Chart konténer alapértelmezett stílusa: rejtett
    chartContainer.style.display = 'none';

    // Menüelemek eseménykezelője
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var itemName = this.getAttribute('data-item');

            // Megjelenítjük a chartot csak akkor, ha a megfelelő menüelemre kattintottunk
            if (itemName === 'respirator' || itemName === 'rivals') {
                // Ha még nem inicializáltuk a Chart.js-t, akkor most inicializáljuk
                if (!myChart) {
                    initializeChart();
                }
                displayChart();
                // Itt további műveleteket végezhetünk az adott menüelemre kattintva
            } else {
                // Ha más menüelemre kattintottunk, akkor elrejtjük a chartot
                hideChart();
            }
        });
    });

    // Chart.js inicializálása
// Chart.js inicializálása
function initializeChart() {
    myChart = new Chart(chartContainer, {
        type: 'line',
        data: {
            labels: ['1MP', '5MP', '30MP', '1P', '15P', '30P', '1Ó'],
            datasets: [{
                label: 'Respirator',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(248, 14, 135, 0.8)',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false // Letiltjuk a Chart.js által biztosított címkéket
            }
        }
    });
}


    // Chart megjelenítése
    function displayChart() {
        chartContainer.style.display = 'block';
    }

    // Chart elrejtése
    function hideChart() {
        chartContainer.style.display = 'none';
    }
});
