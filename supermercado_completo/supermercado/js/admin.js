// Admin Panel JavaScript
// Sistema completo de administração e personalização

// ===== NAVEGAÇÃO DO PAINEL =====
document.addEventListener('DOMContentLoaded', function() {
    initializeAdminPanel();
    loadProductsTable();
    setupColorPickers();
    setupFormHandlers();
});

function initializeAdminPanel() {
    // Navegação entre seções
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.admin-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            
            // Remover classe ativa de todos os itens
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Adicionar classe ativa ao item clicado
            this.classList.add('active');
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// ===== SISTEMA DE PERSONALIZAÇÃO =====
function setupColorPickers() {
    const colorInputs = document.querySelectorAll('input[type="color"]');
    
    colorInputs.forEach(input => {
        // Atualizar valor exibido
        const valueSpan = input.nextElementSibling;
        if (valueSpan && valueSpan.classList.contains('color-value')) {
            input.addEventListener('input', function() {
                valueSpan.textContent = this.value.toUpperCase();
            });
        }
    });
}

function applyColors() {
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const accentColor = document.getElementById('accentColor').value;
    
    // Aplicar cores ao CSS
    const root = document.documentElement;
    root.style.setProperty('--primary-color', primaryColor);
    root.style.setProperty('--secondary-color', secondaryColor);
    root.style.setProperty('--accent-color', accentColor);
    
    // Salvar no localStorage
    const colorSettings = {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    };
    
    localStorage.setItem('supermercado_colors', JSON.stringify(colorSettings));
    
    // Mostrar notificação
    showNotification('Cores aplicadas com sucesso!', 'success');
    
    // Aplicar também no site principal (se estiver aberto)
    try {
        if (window.opener && !window.opener.closed) {
            const parentRoot = window.opener.document.documentElement;
            parentRoot.style.setProperty('--primary-color', primaryColor);
            parentRoot.style.setProperty('--secondary-color', secondaryColor);
            parentRoot.style.setProperty('--accent-color', accentColor);
        }
    } catch (e) {
        console.log('Não foi possível aplicar cores ao site principal');
    }
}

function updateCompanyInfo() {
    const companyName = document.getElementById('companyName').value;
    const companyPhone = document.getElementById('companyPhone').value;
    const companyEmail = document.getElementById('companyEmail').value;
    const companyAddress = document.getElementById('companyAddress').value;
    
    const companyInfo = {
        name: companyName,
        phone: companyPhone,
        email: companyEmail,
        address: companyAddress
    };
    
    localStorage.setItem('supermercado_company', JSON.stringify(companyInfo));
    showNotification('Informações da empresa atualizadas!', 'success');
}

function updateLayoutSettings() {
    const showPromotion = document.getElementById('showPromotion').checked;
    const showNewsletter = document.getElementById('showNewsletter').checked;
    const showSocialLinks = document.getElementById('showSocialLinks').checked;
    
    const layoutSettings = {
        promotion: showPromotion,
        newsletter: showNewsletter,
        socialLinks: showSocialLinks
    };
    
    localStorage.setItem('supermercado_layout', JSON.stringify(layoutSettings));
    showNotification('Configurações de layout aplicadas!', 'success');
}

// ===== GESTÃO DE PRODUTOS =====
function loadProductsTable() {
    const tableBody = document.getElementById('productsTableBody');
    if (!tableBody) return;
    
    // Usar produtos do main.js
    if (typeof products !== 'undefined') {
        tableBody.innerHTML = products.map(product => `
            <tr>
                <td><img src="${product.image}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>${getCategoryName(product.category)}</td>
                <td>€${product.price.toFixed(2)}</td>
                <td>${product.inStock ? 'Em Stock' : 'Esgotado'}</td>
                <td>
                    <button class="view-btn" onclick="viewProduct('${product.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="edit-btn" onclick="editProduct('${product.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn" onclick="deleteProduct('${product.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
}

function getCategoryName(category) {
    const categoryNames = {
        'frutas': 'Frutas e Vegetais',
        'carne': 'Carne e Peixe',
        'padaria': 'Padaria',
        'bebidas': 'Bebidas',
        'limpeza': 'Limpeza',
        'bebe': 'Bebé'
    };
    return categoryNames[category] || category;
}

function showAddProductModal() {
    document.getElementById('addProductModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function addProduct() {
    const form = document.getElementById('addProductForm');
    const formData = new FormData(form);
    
    const newProduct = {
        id: generateProductId(),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        image: 'images/produto_placeholder.jpg', // Placeholder
        brand: 'admin',
        rating: 4.0,
        inStock: true,
        featured: false
    };
    
    // Adicionar ao array de produtos (se disponível)
    if (typeof products !== 'undefined') {
        products.push(newProduct);
    }
    
    // Salvar no localStorage
    const customProducts = JSON.parse(localStorage.getItem('supermercado_custom_products') || '[]');
    customProducts.push(newProduct);
    localStorage.setItem('supermercado_custom_products', JSON.stringify(customProducts));
    
    // Recarregar tabela
    loadProductsTable();
    
    // Fechar modal
    closeModal('addProductModal');
    
    // Limpar formulário
    form.reset();
    
    showNotification('Produto adicionado com sucesso!', 'success');
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Produto: ${product.name}\nPreço: €${product.price}\nDescrição: ${product.description}`);
    }
}

function editProduct(productId) {
    showNotification('Funcionalidade de edição em desenvolvimento', 'info');
}

function deleteProduct(productId) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        // Remover do array principal
        if (typeof products !== 'undefined') {
            const index = products.findIndex(p => p.id === productId);
            if (index > -1) {
                products.splice(index, 1);
            }
        }
        
        // Remover do localStorage
        const customProducts = JSON.parse(localStorage.getItem('supermercado_custom_products') || '[]');
        const filteredProducts = customProducts.filter(p => p.id !== productId);
        localStorage.setItem('supermercado_custom_products', JSON.stringify(filteredProducts));
        
        // Recarregar tabela
        loadProductsTable();
        
        showNotification('Produto excluído com sucesso!', 'success');
    }
}

function showAddCategoryModal() {
    showNotification('Funcionalidade de adicionar categoria em desenvolvimento', 'info');
}

// ===== CONFIGURAÇÕES GERAIS =====
function saveAllSettings() {
    // Salvar configurações de entrega
    const freeShipping = document.getElementById('freeShipping').value;
    const shippingCost = document.getElementById('shippingCost').value;
    
    // Salvar configurações de SEO
    const siteTitle = document.getElementById('siteTitle').value;
    const siteDescription = document.getElementById('siteDescription').value;
    
    const generalSettings = {
        shipping: {
            freeShippingThreshold: parseFloat(freeShipping),
            cost: parseFloat(shippingCost)
        },
        seo: {
            title: siteTitle,
            description: siteDescription
        },
        lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem('supermercado_settings', JSON.stringify(generalSettings));
    showNotification('Todas as configurações foram salvas!', 'success');
}

// ===== SISTEMA DE NOTIFICAÇÕES =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `admin-notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${getNotificationColor(type)};
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
        max-width: 400px;
    `;
    
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#2E7D32';
        case 'error': return '#D32F2F';
        case 'warning': return '#F57C00';
        default: return '#1976D2';
    }
}

// ===== MANIPULADORES DE FORMULÁRIOS =====
function setupFormHandlers() {
    // Upload de logo
    const logoUpload = document.getElementById('logoUpload');
    if (logoUpload) {
        logoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const currentLogo = document.querySelector('.current-logo');
                    currentLogo.innerHTML = `<img src="${e.target.result}" alt="Logo" style="max-width: 100px; max-height: 50px;">`;
                    
                    // Salvar no localStorage
                    localStorage.setItem('supermercado_logo', e.target.result);
                    showNotification('Logo atualizado com sucesso!', 'success');
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Fechar modais ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// ===== CARREGAMENTO DE CONFIGURAÇÕES SALVAS =====
function loadSavedSettings() {
    // Carregar cores
    const savedColors = localStorage.getItem('supermercado_colors');
    if (savedColors) {
        const colors = JSON.parse(savedColors);
        const root = document.documentElement;
        root.style.setProperty('--primary-color', colors.primary);
        root.style.setProperty('--secondary-color', colors.secondary);
        root.style.setProperty('--accent-color', colors.accent);
        
        // Atualizar inputs
        if (document.getElementById('primaryColor')) {
            document.getElementById('primaryColor').value = colors.primary;
            document.querySelector('#primaryColor + .color-value').textContent = colors.primary.toUpperCase();
        }
    }
    
    // Carregar informações da empresa
    const savedCompany = localStorage.getItem('supermercado_company');
    if (savedCompany) {
        const company = JSON.parse(savedCompany);
        if (document.getElementById('companyName')) {
            document.getElementById('companyName').value = company.name || '';
            document.getElementById('companyPhone').value = company.phone || '';
            document.getElementById('companyEmail').value = company.email || '';
            document.getElementById('companyAddress').value = company.address || '';
        }
    }
    
    // Carregar logo
    const savedLogo = localStorage.getItem('supermercado_logo');
    if (savedLogo) {
        const currentLogo = document.querySelector('.current-logo');
        if (currentLogo) {
            currentLogo.innerHTML = `<img src="${savedLogo}" alt="Logo" style="max-width: 100px; max-height: 50px;">`;
        }
    }
    
    // Carregar configurações de layout
    const savedLayout = localStorage.getItem('supermercado_layout');
    if (savedLayout) {
        const layout = JSON.parse(savedLayout);
        if (document.getElementById('showPromotion')) {
            document.getElementById('showPromotion').checked = layout.promotion !== false;
            document.getElementById('showNewsletter').checked = layout.newsletter !== false;
            document.getElementById('showSocialLinks').checked = layout.socialLinks !== false;
        }
    }
    
    // Carregar configurações gerais
    const savedSettings = localStorage.getItem('supermercado_settings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        if (document.getElementById('freeShipping')) {
            document.getElementById('freeShipping').value = settings.shipping?.freeShippingThreshold || 50;
            document.getElementById('shippingCost').value = settings.shipping?.cost || 3.99;
            document.getElementById('siteTitle').value = settings.seo?.title || 'SuperMercado Online - Compras Fáceis';
            document.getElementById('siteDescription').value = settings.seo?.description || 'Supermercado online com produtos frescos e entrega rápida';
        }
    }
}

// ===== FUNÇÕES UTILITÁRIAS =====
function generateProductId() {
    return 'admin-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function exportSettings() {
    const allSettings = {
        colors: JSON.parse(localStorage.getItem('supermercado_colors') || '{}'),
        company: JSON.parse(localStorage.getItem('supermercado_company') || '{}'),
        layout: JSON.parse(localStorage.getItem('supermercado_layout') || '{}'),
        settings: JSON.parse(localStorage.getItem('supermercado_settings') || '{}'),
        customProducts: JSON.parse(localStorage.getItem('supermercado_custom_products') || '[]'),
        logo: localStorage.getItem('supermercado_logo') || null
    };
    
    const dataStr = JSON.stringify(allSettings, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'supermercado_configuracoes.json';
    link.click();
    
    showNotification('Configurações exportadas com sucesso!', 'success');
}

function importSettings(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const settings = JSON.parse(e.target.result);
            
            // Importar todas as configurações
            if (settings.colors) localStorage.setItem('supermercado_colors', JSON.stringify(settings.colors));
            if (settings.company) localStorage.setItem('supermercado_company', JSON.stringify(settings.company));
            if (settings.layout) localStorage.setItem('supermercado_layout', JSON.stringify(settings.layout));
            if (settings.settings) localStorage.setItem('supermercado_settings', JSON.stringify(settings.settings));
            if (settings.customProducts) localStorage.setItem('supermercado_custom_products', JSON.stringify(settings.customProducts));
            if (settings.logo) localStorage.setItem('supermercado_logo', settings.logo);
            
            // Recarregar configurações
            loadSavedSettings();
            loadProductsTable();
            
            showNotification('Configurações importadas com sucesso!', 'success');
        } catch (error) {
            showNotification('Erro ao importar configurações. Verifique o arquivo.', 'error');
        }
    };
    reader.readAsText(file);
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    loadSavedSettings();
});

// ===== EXPORTAR FUNÇÕES GLOBAIS =====
window.applyColors = applyColors;
window.updateCompanyInfo = updateCompanyInfo;
window.updateLayoutSettings = updateLayoutSettings;
window.showAddProductModal = showAddProductModal;
window.closeModal = closeModal;
window.addProduct = addProduct;
window.viewProduct = viewProduct;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.showAddCategoryModal = showAddCategoryModal;
window.saveAllSettings = saveAllSettings;
window.exportSettings = exportSettings;
window.importSettings = importSettings;

