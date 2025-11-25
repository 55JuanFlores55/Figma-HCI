// ========================================
// INITIALIZE LUCIDE ICONS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Create icons after DOM is loaded
    lucide.createIcons();
    
    // Initialize all functionality
    initMobileMenu();
    initSmoothScroll();
    renderModels();
    initFavoriteButtons();
});

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    let isMenuOpen = false;
    
    mobileMenuBtn.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.add('active');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            mobileMenu.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
        
        // Recreate icons after changing visibility
        lucide.createIcons();
    });
    
    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            isMenuOpen = false;
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    // Add smooth scroll behavior
    document.documentElement.classList.add('smooth-scroll');
    
    // Handle all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// MODEL DATA
// ========================================
const featuredModelsData = [
    {
        id: 1,
        title: 'Estructura Arquitectónica',
        category: 'Arquitectura',
        image: 'https://images.unsplash.com/photo-1582879304171-8041c73bedbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQwNzM0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: false
    },
    {
        id: 2,
        title: 'Objeto Impreso 3D',
        category: 'Prototipo',
        image: 'https://images.unsplash.com/photo-1703221633121-23c8eb07826f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwb2JqZWN0fGVufDF8fHx8MTc2NDA3MzQ2NXww&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: false
    },
    {
        id: 3,
        title: 'Forma Geométrica',
        category: 'Diseño',
        image: 'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjAzRCUyMHNoYXBlfGVufDF8fHx8MTc2NDA3MzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: false
    }
];

const favoriteModelsData = [
    {
        id: 4,
        title: 'Render Abstracto',
        category: 'Arte Digital',
        image: 'https://images.unsplash.com/photo-1644224076179-31d622e21511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNEJTIwcmVuZGVyfGVufDF8fHx8MTc2NDA3MzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: true
    },
    {
        id: 5,
        title: 'Escultura Digital',
        category: 'Escultura',
        image: 'https://images.unsplash.com/photo-1759163620732-3324fa162418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2N1bHB0dXJlfGVufDF8fHx8MTc2NDA3MzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: true
    },
    {
        id: 6,
        title: 'Objeto Futurista',
        category: 'Tecnología',
        image: 'https://images.unsplash.com/photo-1669118081251-3de2d878aa48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwb2JqZWN0fGVufDF8fHx8MTc2NDA3MzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: true
    }
];

const allModelsData = [
    ...featuredModelsData,
    ...favoriteModelsData,
    {
        id: 7,
        title: 'Modelo Mecánico',
        category: 'Ingeniería',
        image: 'https://images.unsplash.com/photo-1582879304171-8041c73bedbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQwNzM0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: false
    },
    {
        id: 8,
        title: 'Diseño Orgánico',
        category: 'Diseño',
        image: 'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjAzRCUyMHNoYXBlfGVufDF8fHx8MTc2NDA3MzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: false
    },
    {
        id: 9,
        title: 'Pieza Industrial',
        category: 'Industria',
        image: 'https://images.unsplash.com/photo-1703221633121-23c8eb07826f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwb2JqZWN0fGVufDF8fHx8MTc2NDA3MzQ2NXww&ixlib=rb-4.1.0&q=80&w=1080',
        isFavorite: false
    }
];

// ========================================
// CREATE MODEL CARD HTML
// ========================================
function createModelCard(model) {
    return `
        <div class="model-card">
            <div class="model-image-wrapper">
                <img src="${model.image}" alt="${model.title}" class="model-image">
                
                <div class="model-overlay">
                    <div class="model-actions">
                        <button class="model-btn-primary" onclick="viewModel(${model.id})">
                            <i data-lucide="eye"></i>
                            Vista rápida
                        </button>
                        <button class="model-btn-favorite ${model.isFavorite ? 'active' : ''}" data-model-id="${model.id}">
                            <i data-lucide="heart"></i>
                        </button>
                    </div>
                </div>
                
                <div class="model-category-badge">${model.category}</div>
            </div>
            
            <div class="model-content">
                <h3 class="model-title">${model.title}</h3>
                <p class="model-category">${model.category}</p>
            </div>
        </div>
    `;
}

// ========================================
// RENDER MODELS
// ========================================
function renderModels() {
    // Render featured models
    const featuredModelsContainer = document.getElementById('featuredModels');
    if (featuredModelsContainer) {
        featuredModelsContainer.innerHTML = featuredModelsData
            .map(model => createModelCard(model))
            .join('');
    }
    
    // Render favorite models
    const favoriteModelsContainer = document.getElementById('favoriteModels');
    if (favoriteModelsContainer) {
        favoriteModelsContainer.innerHTML = favoriteModelsData
            .map(model => createModelCard(model))
            .join('');
    }
    
    // Render all models
    const allModelsContainer = document.getElementById('allModels');
    if (allModelsContainer) {
        allModelsContainer.innerHTML = allModelsData
            .map(model => createModelCard(model))
            .join('');
    }
    
    // Recreate icons after rendering
    lucide.createIcons();
}

// ========================================
// FAVORITE BUTTONS
// ========================================
function initFavoriteButtons() {
    // Use event delegation for dynamically created buttons
    document.body.addEventListener('click', function(e) {
        const favoriteBtn = e.target.closest('.model-btn-favorite');
        if (favoriteBtn) {
            const modelId = parseInt(favoriteBtn.getAttribute('data-model-id'));
            toggleFavorite(modelId, favoriteBtn);
        }
    });
}

function toggleFavorite(modelId, button) {
    // Find the model in the data
    let model = allModelsData.find(m => m.id === modelId);
    
    if (model) {
        // Toggle favorite status
        model.isFavorite = !model.isFavorite;
        
        // Update button state
        if (model.isFavorite) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
        
        // Optional: Show notification
        showNotification(
            model.isFavorite 
                ? `${model.title} agregado a favoritos` 
                : `${model.title} eliminado de favoritos`
        );
    }
}

// ========================================
// VIEW MODEL
// ========================================
function viewModel(modelId) {
    const model = allModelsData.find(m => m.id === modelId);
    if (model) {
        showNotification(`Abriendo vista rápida de: ${model.title}`);
        // Aquí podrías abrir un modal con más información del modelo
    }
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message) {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(to right, #2563eb, #7c3aed);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 30px -5px rgba(59, 130, 246, 0.5);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        font-size: 0.875rem;
        font-weight: 500;
        max-width: 300px;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ========================================
// HERO BUTTON ACTION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            const modelsSection = document.getElementById('modelos');
            if (modelsSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = modelsSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// ========================================
// IMAGE LAZY LOADING (Optional)
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all model images
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            const images = document.querySelectorAll('.model-image');
            images.forEach(img => imageObserver.observe(img));
        }, 500);
    });
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c🚀 FABLAB Catálogo 3D', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cSistema iniciado correctamente', 'font-size: 14px; color: #7c3aed;');
console.log('%cDesarrollado con ❤️ para FABLAB', 'font-size: 12px; color: #6b7280;');
