document.getElementById('myButton').addEventListener('click', function() 

document.addEventListener("DOMContentLoaded", function() {
    // Create nav container
    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';

    // Create the navigation list
    const navList = document.createElement('ul');
    navList.className = 'nav';

    // Create navigation links
    const links = [
        { href: 'homepage2.html', text: 'Homepage' },
        { href: 'About us.html', text: 'About us' },
        { href: 'product+service.html', text: 'Products+Services' },
        { href: 'Enquire.html', text: 'Enquires' },
        { href: 'contact us.html', text: 'Contact' }
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        navList.appendChild(a);
    });

    navContainer.appendChild(navList);
    document.body.appendChild(navContainer);

    // Create header
    const header = document.createElement('header');
    const h1Header = document.createElement('h1');
    h1Header.textContent = "Alencious’ House";
    header.appendChild(h1Header);
    document.body.appendChild(header);

    // Create Order Here section
    const orderHeader = document.createElement('h1');
    orderHeader.textContent = 'Order Here';
    document.body.appendChild(orderHeader);

    // Create order form
    const form = document.createElement('form');
    form.id = 'order-form';

    // Create form groups
    const formGroups = [
        { label: 'Name:', type: 'text', id: 'name', required: true },
        { label: 'Phone:', type: 'tel', id: 'phone', required: true },
        { label: 'What is your order?', type: 'textarea', id: 'order-details', required: true, rows: 4, placeholder: 'Please describe your order...' }
    ];

    formGroups.forEach(group => {
        const div = document.createElement('div');
        div.className = 'form-group';

        const label = document.createElement('label');
        label.setAttribute('for', group.id);
        label.textContent = group.label;
        div.appendChild(label);

        let input;
        if (group.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = group.rows;
            input.placeholder = group.placeholder;
        } else {
            input = document.createElement('input');
            input.type = group.type;
        }
        input.id = group.id;
        input.required = group.required;

        div.appendChild(input);
        form.appendChild(div);
    });

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Order';
    form.appendChild(submitButton);

    document.body.appendChild(form);

    // Create footer
    const footer = document.createElement('footer');
    footer.textContent = 'since 2019@A local Restaurant/Chill spot that serves the best DISHES!';
    document.body.appendChild(footer);
});
function showMapAlert(event) {
    event.preventDefault();
    const alert = document.getElementById('mapAlert');
    alert.style.display = 'block';
    
    // Reset animation by briefly removing and re-adding the element
    alert.style.animation = 'none';
    void alert.offsetWidth; // Trigger reflow
    alert.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2s forwards';
    
    // Scroll to map
    document.querySelector('.map-container').scrollIntoView({
        behavior: 'smooth'
    });
}

function showLocationMessage() {
    document.getElementById('locationModal').style.display = 'flex';
}

function closeLocationMessage() {
    document.getElementById('locationModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('locationModal');
    if (event.target == modal) {
        closeLocationMessage();
    }
}
