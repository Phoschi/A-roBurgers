document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the total price of the selected ingredients
    function calculatePrice() {
        let totalPrice = 0;
        // Get selected options for each ingredient category
        const base = document.getElementById('base');
        const protein = document.getElementById('protein');
        const vegetables = document.getElementById('vegetables');
        const extras = document.getElementById('extras');

        // Add the prices of the selected options to the total price
        totalPrice += parseFloat(base.selectedOptions[0].getAttribute('data-price')) || 0;
        totalPrice += parseFloat(protein.selectedOptions[0].getAttribute('data-price')) || 0;
        totalPrice += parseFloat(vegetables.selectedOptions[0].getAttribute('data-price')) || 0;
        totalPrice += parseFloat(extras.selectedOptions[0].getAttribute('data-price')) || 0;

        // Display the total price with two decimal places
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    }

    // Add an event listener to the form to recalculate the price when an option is changed
    document.getElementById('foodForm').addEventListener('change', calculatePrice);

    // Toggle the display of the burger menu on MOBILE view
    document.getElementById('burger-menu').addEventListener('click', function() {
        var menu = document.getElementById('dropdown-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; 
    });
});
