document.addEventListener('DOMContentLoaded', function() {
    function calculatePrice() {
        let totalPrice = 0;
        const base = document.getElementById('base');
        const protein = document.getElementById('protein');
        const vegetables = document.getElementById('vegetables');
        const extras = document.getElementById('extras');

        totalPrice += parseFloat(base.selectedOptions[0].getAttribute('data-price')) || 0;
        totalPrice += parseFloat(protein.selectedOptions[0].getAttribute('data-price')) || 0;
        totalPrice += parseFloat(vegetables.selectedOptions[0].getAttribute('data-price')) || 0;
        totalPrice += parseFloat(extras.selectedOptions[0].getAttribute('data-price')) || 0;

        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    }

    document.getElementById('foodForm').addEventListener('change', calculatePrice);


    
    document.getElementById('burger-menu').addEventListener('click', function() {
        var menu = document.getElementById('dropdown-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; // Affiche ou cache le menu déroulant
    });
});
