// Premium Plant Data Array
const plants = [
    {
        id: 1,
        name: "Monstera Deliciosa",
        price: "₹350.00",
        description: "The iconic Swiss Cheese plant. Perfect statement piece with dramatic, perforated leaves.",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600"
    },
    {
        id: 2,
        name: "Fiddle Leaf Fig",
        price: "₹450.00",
        description: "Elegant, violin-shaped leaves that love bright, indirect light and bring instant luxury.",
        image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=600"
    },
    {
        id: 3,
        name: "Snake Plant Laurentii",
        price: "₹220.00",
        description: "Hardy, air-purifying, and virtually indestructible. Perfect for beginner plant parents.",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600"
    },
    {
        id: 4,
        name: "Calathea Orbifolia",
        price: "₹280.00",
        description: "Features striking, oversized designer striped leaves that close gracefully at night.",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600"
    },
    {
        id: 5,
        name: "Golden Pothos",
        price: "₹150.00",
        description: "Fast-growing cascading vine with heart-shaped leaves marbled in dynamic gold.",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600"
    },
    {
        id: 6,
        name: "Olive Tree",
        price: "₹650.00",
        description: "A touch of Mediterranean luxury. Features delicate, silvery-green leaves.",
        image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=600"
    }
];

// WhatsApp Integration Config (Using your primary number with country code 91)
const WHATSAPP_NUMBER = "916295301573"; 

const plantGrid = document.getElementById('plant-grid');
const searchInput = document.getElementById('search-input');
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Function to Render Plant Cards
function displayPlants(products) {
    plantGrid.innerHTML = '';
    
    if(products.length === 0) {
        plantGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">No premium plants found matching your search.</p>`;
        return;
    }

    products.forEach(plant => {
        // WhatsApp message for ordering
        const whatsappMessage = encodeURIComponent(`Hello Global Green Plant! I would like to order the "${plant.name}" for ${plant.price}. Please let me know the delivery process.`);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

        const card = document.createElement('div');
        card.classList.add('plant-card');
        card.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}" class="plant-image">
            <div class="plant-info">
                <h3 class="plant-title">${plant.name}</h3>
                <p class="plant-price">${plant.price}</p>
                <p class="plant-desc">${plant.description}</p>
                <a href="${whatsappUrl}" target="_blank" class="whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> Buy Now / Order via WhatsApp
                </a>
            </div>
        `;
        plantGrid.appendChild(card);
    });
}

// Live Search Filter Functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(searchTerm) || 
        plant.description.toLowerCase().includes(searchTerm)
    );
    displayPlants(filteredPlants);
});

// Mobile Responsive Navigation Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close Mobile Nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Initial Load execution
window.addEventListener('DOMContentLoaded', () => {
    displayPlants(plants);
});
