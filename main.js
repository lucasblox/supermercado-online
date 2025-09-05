// SuperMercado Online - JavaScript Principal
// Sistema completo de e-commerce com carrinho, produtos e funcionalidades

// ===== DADOS DE PRODUTOS =====
const products = [
    // Frutas e Vegetais
    {
        id: 'fruta-001',
        name: 'Maçãs Gala',
        category: 'frutas',
        price: 2.49,
        oldPrice: 2.99,
        image: 'images/frutas_vegetais.jpg',
        description: 'Maçãs frescas e doces, ideais para lanches saudáveis',
        brand: 'continente',
        rating: 4.5,
        inStock: true,
        featured: true
    },
    {
        id: 'fruta-002',
        name: 'Bananas',
        category: 'frutas',
        price: 1.29,
        image: 'images/frutas_vegetais.jpg',
        description: 'Bananas maduras e nutritivas, ricas em potássio',
        brand: 'pingo',
        rating: 4.8,
        inStock: true,
        featured: true
    },
    {
        id: 'fruta-003',
        name: 'Tomates Cherry',
        category: 'frutas',
        price: 3.99,
        image: 'images/frutas_vegetais.jpg',
        description: 'Tomates cherry frescos e saborosos',
        brand: 'auchan',
        rating: 4.3,
        inStock: true
    },
    {
        id: 'fruta-004',
        name: 'Alface Iceberg',
        category: 'frutas',
        price: 1.49,
        image: 'images/frutas_vegetais.jpg',
        description: 'Alface fresca e crocante para saladas',
        brand: 'lidl',
        rating: 4.2,
        inStock: true
    },
    
    // Carne e Peixe
    {
        id: 'carne-001',
        name: 'Peito de Frango',
        category: 'carne',
        price: 5.99,
        oldPrice: 6.99,
        image: 'images/carne_peixe.jpg',
        description: 'Peito de frango fresco e tenro, sem pele',
        brand: 'continente',
        rating: 4.6,
        inStock: true,
        featured: true
    },
    {
        id: 'carne-002',
        name: 'Salmão Fresco',
        category: 'carne',
        price: 12.99,
        image: 'images/carne_peixe.jpg',
        description: 'Salmão fresco do Atlântico, rico em ómega-3',
        brand: 'pingo',
        rating: 4.7,
        inStock: true,
        featured: true
    },
    {
        id: 'carne-003',
        name: 'Carne Picada',
        category: 'carne',
        price: 4.49,
        image: 'images/carne_peixe.jpg',
        description: 'Carne picada fresca de bovino',
        brand: 'auchan',
        rating: 4.4,
        inStock: true
    },
    
    // Padaria
    {
        id: 'padaria-001',
        name: 'Pão de Forma',
        category: 'padaria',
        price: 1.99,
        image: 'images/padaria.jpg',
        description: 'Pão de forma macio e fresco',
        brand: 'continente',
        rating: 4.3,
        inStock: true,
        featured: true
    },
    {
        id: 'padaria-002',
        name: 'Croissants',
        category: 'padaria',
        price: 2.49,
        oldPrice: 2.99,
        image: 'images/padaria.jpg',
        description: 'Croissants amanteigados e crocantes',
        brand: 'pingo',
        rating: 4.5,
        inStock: true
    },
    {
        id: 'padaria-003',
        name: 'Bolo de Chocolate',
        category: 'padaria',
        price: 8.99,
        image: 'images/padaria.jpg',
        description: 'Delicioso bolo de chocolate caseiro',
        brand: 'lidl',
        rating: 4.8,
        inStock: true
    },
    
    // Bebidas
    {
        id: 'bebida-001',
        name: 'Água Mineral',
        category: 'bebidas',
        price: 0.89,
        image: 'images/icone_bebidas.png',
        description: 'Água mineral natural 1.5L',
        brand: 'continente',
        rating: 4.2,
        inStock: true
    },
    {
        id: 'bebida-002',
        name: 'Sumo de Laranja',
        category: 'bebidas',
        price: 2.99,
        image: 'images/icone_bebidas.png',
        description: 'Sumo de laranja 100% natural',
        brand: 'pingo',
        rating: 4.6,
        inStock: true,
        featured: true
    },
    {
        id: 'bebida-003',
        name: 'Refrigerante Cola',
        category: 'bebidas',
        price: 1.49,
        oldPrice: 1.99,
        image: 'images/icone_bebidas.png',
        description: 'Refrigerante de cola 330ml',
        brand: 'auchan',
        rating: 4.1,
        inStock: true
    },
    
    // Limpeza
    {
        id: 'limpeza-001',
        name: 'Detergente Loiça',
        category: 'limpeza',
        price: 3.49,
        image: 'images/icone_limpeza.png',
        description: 'Detergente concentrado para loiça',
        brand: 'continente',
        rating: 4.4,
        inStock: true
    },
    {
        id: 'limpeza-002',
        name: 'Papel Higiénico',
        category: 'limpeza',
        price: 5.99,
        oldPrice: 7.99,
        image: 'images/icone_limpeza.png',
        description: 'Papel higiénico macio 12 rolos',
        brand: 'pingo',
        rating: 4.3,
        inStock: true,
        featured: true
    },
    
    // Bebé
    {
        id: 'bebe-001',
        name: 'Fraldas Tamanho M',
        category: 'bebe',
        price: 12.99,
        image: 'images/icone_alimentos.png',
        description: 'Fraldas ultra absorventes tamanho M',
        brand: 'lidl',
        rating: 4.7,
        inStock: true
    },
    {
        id: 'bebe-002',
        name: 'Leite em Pó',
        category: 'bebe',
        price: 18.99,
        image: 'images/icone_alimentos.png',
        description: 'Leite em pó para bebés 0-6 meses',
        brand: 'auchan',
        rating: 4.8,
        inStock: true
    }
];

// ===== SISTEMA DE CARRINHO =====
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartDisplay();
    }
    
    loadCart() {
        const saved = localStorage.getItem('supermercado_cart');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveCart() {
        localStorage.setItem('supermercado_cart', JSON.stringify(this.items));
        this.updateCartDisplay();
    }
    
    addItem(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return false;
        
        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                description: product.description
            });
        }
        
        this.saveCart();
        this.showAddToCartNotification(product.name);
        return true;
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }
    
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }
    
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    updateCartDisplay() {
        const cartCount = document.querySelector('.cart-count');
        const cartItems = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.cart-total');
        
        if (cartCount) cartCount.textContent = this.getItemCount();
        if (cartItems) cartItems.textContent = `${this.getItemCount()} itens`;
        if (cartTotal) cartTotal.textContent = `€${this.getTotal().toFixed(2)}`;
    }
    
    showAddToCartNotification(productName) {
        // Criar notificação
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${productName} adicionado ao carrinho!</span>
        `;
        
        // Adicionar estilos
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover após 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Instância global do carrinho
const cart = new ShoppingCart();

// ===== FUNÇÕES GLOBAIS DO CARRINHO =====
function addToCart(productId, quantity = 1) {
    return cart.addItem(productId, quantity);
}

function getCart() {
    return cart.items;
}

function saveCart(items) {
    cart.items = items;
    cart.saveCart();
}

// ===== SISTEMA DE PRODUTOS =====
class ProductManager {
    constructor() {
        this.currentFilters = {
            category: [],
            brand: [],
            priceMin: null,
            priceMax: null,
            rating: [],
            search: ''
        };
        this.currentSort = 'relevance';
        this.currentPage = 1;
        this.itemsPerPage = 12;
    }
    
    getFilteredProducts() {
        let filtered = [...products];
        
        // Filtro por categoria
        if (this.currentFilters.category.length > 0) {
            filtered = filtered.filter(p => this.currentFilters.category.includes(p.category));
        }
        
        // Filtro por marca
        if (this.currentFilters.brand.length > 0) {
            filtered = filtered.filter(p => this.currentFilters.brand.includes(p.brand));
        }
        
        // Filtro por preço
        if (this.currentFilters.priceMin !== null) {
            filtered = filtered.filter(p => p.price >= this.currentFilters.priceMin);
        }
        if (this.currentFilters.priceMax !== null) {
            filtered = filtered.filter(p => p.price <= this.currentFilters.priceMax);
        }
        
        // Filtro por avaliação
        if (this.currentFilters.rating.length > 0) {
            const minRating = Math.min(...this.currentFilters.rating);
            filtered = filtered.filter(p => p.rating >= minRating);
        }
        
        // Filtro por pesquisa
        if (this.currentFilters.search) {
            const searchTerm = this.currentFilters.search.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm)
            );
        }
        
        return this.sortProducts(filtered);
    }
    
    sortProducts(products) {
        switch (this.currentSort) {
            case 'price-low':
                return products.sort((a, b) => a.price - b.price);
            case 'price-high':
                return products.sort((a, b) => b.price - a.price);
            case 'name':
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case 'rating':
                return products.sort((a, b) => b.rating - a.rating);
            case 'newest':
                return products.reverse();
            default:
                return products;
        }
    }
    
    getFeaturedProducts() {
        return products.filter(p => p.featured).slice(0, 6);
    }
    
    getProductsByCategory(category) {
        return products.filter(p => p.category === category);
    }
    
    searchProducts(query) {
        this.currentFilters.search = query;
        return this.getFilteredProducts();
    }
}

// Instância global do gerenciador de produtos
const productManager = new ProductManager();

// ===== RENDERIZAÇÃO DE PRODUTOS =====
function renderProductCard(product) {
    const discountBadge = product.oldPrice ? 
        `<div class="product-badge">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</div>` : '';
    
    const oldPriceDisplay = product.oldPrice ? 
        `<span class="old-price">€${product.oldPrice.toFixed(2)}</span>` : '';
    
    const stars = '⭐'.repeat(Math.floor(product.rating));
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            ${discountBadge}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">${stars} (${product.rating})</div>
                <div class="product-price">
                    <span class="current-price">€${product.price.toFixed(2)}</span>
                    ${oldPriceDisplay}
                </div>
                <button class="add-to-cart" onclick="addToCart('${product.id}')">
                    <i class="fas fa-shopping-cart"></i> Adicionar
                </button>
            </div>
        </div>
    `;
}

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const filteredProducts = productManager.getFilteredProducts();
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente ajustar os filtros ou pesquisar por outros termos</p>
            </div>
        `;
        return;
    }
    
    // Paginação
    const startIndex = (productManager.currentPage - 1) * productManager.itemsPerPage;
    const endIndex = startIndex + productManager.itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = paginatedProducts.map(renderProductCard).join('');
    
    // Atualizar contagem
    updateProductsCount(filteredProducts.length);
    
    // Renderizar paginação
    renderPagination(filteredProducts.length);
}

function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredProducts');
    if (!featuredGrid) return;
    
    const featured = productManager.getFeaturedProducts();
    featuredGrid.innerHTML = featured.map(renderProductCard).join('');
}

function updateProductsCount(count) {
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        productsCount.textContent = `Mostrando ${count} produtos`;
    }
}

function renderPagination(totalProducts) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(totalProducts / productManager.itemsPerPage);
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Botão anterior
    if (productManager.currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${productManager.currentPage - 1})">Anterior</button>`;
    }
    
    // Números das páginas
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === productManager.currentPage ? 'active' : '';
        paginationHTML += `<button class="pagination-btn ${activeClass}" onclick="changePage(${i})">${i}</button>`;
    }
    
    // Botão próximo
    if (productManager.currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${productManager.currentPage + 1})">Próximo</button>`;
    }
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    productManager.currentPage = page;
    loadProducts();
    
    // Scroll para o topo da lista de produtos
    const productsMain = document.querySelector('.products-main');
    if (productsMain) {
        productsMain.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== SISTEMA DE PESQUISA =====
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = this.value.trim();
            productManager.currentFilters.search = query;
            productManager.currentPage = 1;
            
            if (window.location.pathname.includes('produtos.html')) {
                loadProducts();
            }
        }, 300);
    });
    
    // Pesquisa ao pressionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.trim();
            if (query) {
                window.location.href = `produtos.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
    
    // Botão de pesquisa
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `produtos.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
}

// ===== SISTEMA DE FILTROS =====
function initializeFilters() {
    // Filtros de categoria
    document.querySelectorAll('input[type="checkbox"][id^="cat-"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const category = this.value;
            if (this.checked) {
                if (!productManager.currentFilters.category.includes(category)) {
                    productManager.currentFilters.category.push(category);
                }
            } else {
                productManager.currentFilters.category = productManager.currentFilters.category.filter(c => c !== category);
            }
            productManager.currentPage = 1;
            loadProducts();
        });
    });
    
    // Filtros de marca
    document.querySelectorAll('input[type="checkbox"][id^="brand-"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const brand = this.value;
            if (this.checked) {
                if (!productManager.currentFilters.brand.includes(brand)) {
                    productManager.currentFilters.brand.push(brand);
                }
            } else {
                productManager.currentFilters.brand = productManager.currentFilters.brand.filter(b => b !== brand);
            }
            productManager.currentPage = 1;
            loadProducts();
        });
    });
    
    // Filtros de avaliação
    document.querySelectorAll('input[type="checkbox"][id^="rating-"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const rating = parseInt(this.value);
            if (this.checked) {
                if (!productManager.currentFilters.rating.includes(rating)) {
                    productManager.currentFilters.rating.push(rating);
                }
            } else {
                productManager.currentFilters.rating = productManager.currentFilters.rating.filter(r => r !== rating);
            }
            productManager.currentPage = 1;
            loadProducts();
        });
    });
    
    // Filtros de preço
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    
    if (priceMin) {
        priceMin.addEventListener('change', function() {
            productManager.currentFilters.priceMin = this.value ? parseFloat(this.value) : null;
            productManager.currentPage = 1;
            loadProducts();
        });
    }
    
    if (priceMax) {
        priceMax.addEventListener('change', function() {
            productManager.currentFilters.priceMax = this.value ? parseFloat(this.value) : null;
            productManager.currentPage = 1;
            loadProducts();
        });
    }
}

// ===== MENU MOBILE =====
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            
            // Adicionar estilos para menu mobile ativo
            if (navMenu.classList.contains('mobile-active')) {
                navMenu.style.cssText = `
                    display: flex !important;
                    flex-direction: column;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--primary-color);
                    box-shadow: var(--shadow);
                    z-index: 1000;
                `;
            } else {
                navMenu.style.cssText = '';
            }
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('mobile-active');
                navMenu.style.cssText = '';
            }
        });
    }
}

// ===== NEWSLETTER =====
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            // Simular subscrição
            alert('Obrigado por subscrever a nossa newsletter!');
            this.reset();
        }
    });
}

// ===== PARÂMETROS DE URL =====
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Categoria da URL
    const category = urlParams.get('categoria');
    if (category) {
        productManager.currentFilters.category = [category];
        
        // Marcar checkbox correspondente
        const categoryCheckbox = document.getElementById(`cat-${category}`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
        }
        
        // Atualizar título da página
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            const categoryNames = {
                'frutas': 'Frutas e Vegetais',
                'carne': 'Carne e Peixe',
                'padaria': 'Padaria',
                'bebidas': 'Bebidas',
                'limpeza': 'Limpeza',
                'bebe': 'Bebé'
            };
            pageTitle.textContent = categoryNames[category] || 'Produtos';
        }
    }
    
    // Pesquisa da URL
    const search = urlParams.get('search');
    if (search) {
        productManager.currentFilters.search = search;
        
        // Preencher campo de pesquisa
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = search;
        }
        
        // Atualizar título da página
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            pageTitle.textContent = `Resultados para "${search}"`;
        }
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes
    initializeSearch();
    initializeFilters();
    initializeMobileMenu();
    initializeNewsletter();
    
    // Processar parâmetros da URL
    handleURLParameters();
    
    // Carregar produtos conforme a página
    if (window.location.pathname.includes('produtos.html')) {
        loadProducts();
    } else if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadFeaturedProducts();
    }
    
    // Atualizar display do carrinho
    cart.updateCartDisplay();
});

// ===== FUNÇÕES UTILITÁRIAS =====
function formatPrice(price) {
    return `€${price.toFixed(2)}`;
}

function generateProductId() {
    return 'prod-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// ===== EXPORTAR FUNÇÕES GLOBAIS =====
window.addToCart = addToCart;
window.getCart = getCart;
window.saveCart = saveCart;
window.loadProducts = loadProducts;
window.changePage = changePage;

