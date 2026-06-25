const products = {
    'nova-core': {
        title: 'Nova Core',
        price: '₹2,099',
        originalPrice: '₹2,799',
        image: 'assets/nova_core.png',
        gallery: [
            'assets/nova_core.png',
            'assets/nova_core_detail.png',
            'assets/nova_core_lifestyle.png'
        ],
        description: 'The Nova Core embodies the essence of minimalist design. Stripped of distractions, it provides only the essential data you need to conquer your day. With a high-contrast monochrome display and a sleek, unobtrusive profile, it is the perfect companion for the modern purist.',
        features: [
            'Basic fitness tracking (Steps, Calories)',
            'Smart Notifications',
            '1.4" Monochrome Display',
            '7-day battery life'
        ],
        specs: [
            'Weight: 22g',
            'Water Resistance: IP68',
            'Bluetooth: 5.0',
            'Materials: Polymer case, Silicone strap'
        ],
        inTheBox: [
            'Nova Core Smartwatch',
            'Magnetic Charging Cable',
            'Quick Start Guide'
        ],
        reviews: [
            { author: 'Rahul S.', rating: '★★★★★', text: 'Perfect minimalist band. Unbelievable for the price. The design is truly timeless.' },
            { author: 'Priya K.', rating: '★★★★☆', text: 'Looks great and tracks accurately. Display is basic but highly visible even in direct sunlight.' }
        ]
    },
    'nova-pulse': {
        title: 'Nova Pulse',
        price: '₹2,149',
        originalPrice: '₹2,899',
        image: 'assets/nova_pulse.png',
        gallery: [
            'assets/nova_pulse.png',
            'assets/nova_pulse_detail.png',
            'assets/nova_pulse_lifestyle.png'
        ],
        description: 'Elevate your fitness journey with the Nova Pulse. Featuring a vibrant yet subtle OLED display, it continuously monitors your heart rate and sleep patterns, wrapped in a sophisticated square silhouette that transitions seamlessly from the gym to the boardroom.',
        features: [
            '24/7 Heart rate monitor',
            'Color OLED display',
            'Sleep stage tracking',
            '10 sports modes'
        ],
        specs: [
            'Weight: 35g',
            'Water Resistance: IP68',
            'Bluetooth: 5.1',
            'Materials: Aluminum frame, Silicone strap'
        ],
        inTheBox: [
            'Nova Pulse Smartwatch',
            'Magnetic Charging Dock',
            'User Manual'
        ],
        reviews: [
            { author: 'Amit J.', rating: '★★★★★', text: 'Sleek square design. The sleep tracking is very accurate and the app is easy to use.' },
            { author: 'Sneha M.', rating: '★★★★★', text: 'Absolutely love the minimalist UI. The black and white theme looks so premium.' }
        ]
    },
    'aura-lite': {
        title: 'Aura Lite',
        price: '₹2,199',
        originalPrice: '₹2,999',
        image: 'assets/aura_lite.png',
        gallery: [
            'assets/aura_lite.png',
            'assets/detail_strap.png',
            'assets/hero_1.png'
        ],
        description: 'The Aura Lite is a masterclass in understated elegance. Its perfectly circular face and smooth silicone strap offer unmatched comfort, while advanced sensors quietly monitor your blood oxygen and sleep cycles in the background.',
        features: [
            'SpO2 blood oxygen monitoring',
            'Advanced sleep tracking',
            '5ATM water resistance',
            'Interchangeable silicone straps'
        ],
        specs: [
            'Weight: 42g',
            'Water Resistance: 50m (5ATM)',
            'Sensors: HR, SpO2, Accelerometer',
            'Display: 1.2" AMOLED'
        ],
        inTheBox: [
            'Aura Lite Smartwatch',
            'Standard Silicone Strap',
            'USB-C Charging Cable',
            'Documentation'
        ],
        reviews: [
            { author: 'Vikram D.', rating: '★★★★★', text: 'Takes a beating in the pool and still looks brand new. Highly recommended.' },
            { author: 'Ananya P.', rating: '★★★★☆', text: 'Comfortable strap, elegant circular face. The SpO2 sensor is a nice touch.' }
        ]
    },
    'aura-active': {
        title: 'Aura Active',
        price: '₹2,249',
        originalPrice: '₹3,099',
        image: 'assets/aura_active.png',
        gallery: [
            'assets/aura_active.png',
            'assets/detail_strap.png',
            'assets/hero_3.png'
        ],
        description: 'Designed for the relentless, the Aura Active combines a rugged matte aluminum body with precise independent GPS tracking. Whether you are running a marathon or climbing a peak, it delivers performance without compromising on its luxurious aesthetic.',
        features: [
            'Built-in independent GPS',
            '90+ dedicated sports modes',
            'Premium matte aluminum body',
            'Always-on display option'
        ],
        specs: [
            'Material: Matte Aluminum',
            'GPS: Dual-band',
            'Battery: up to 10 days',
            'Glass: Tempered Gorilla Glass'
        ],
        inTheBox: [
            'Aura Active Smartwatch',
            'Breathable Sport Strap',
            'Magnetic Charging Cable',
            'Warranty Card'
        ],
        reviews: [
            { author: 'Karan V.', rating: '★★★★★', text: 'The GPS is super fast. Perfect for my morning runs.' },
            { author: 'Rohan B.', rating: '★★★★★', text: 'Looks like a classic chronograph but with all smart features. Incredible value.' }
        ]
    },
    'zenith-pro': {
        title: 'Zenith Pro',
        price: '₹2,349',
        originalPrice: '₹3,199',
        image: 'assets/zenith_pro.png',
        gallery: [
            'assets/zenith_pro.png',
            'assets/detail_charger.png',
            'assets/hero_1.png'
        ],
        description: 'The Zenith Pro redefines what a smartwatch can be. Forged with a Grade 4 Titanium bezel and equipped with advanced ECG and blood pressure monitoring capabilities, it is a formidable health companion encased in a masterpiece of horology.',
        features: [
            'ECG and blood pressure monitoring',
            'AMOLED always-on display',
            'Grade 4 Titanium bezel',
            'Bluetooth calling'
        ],
        specs: [
            'Material: Titanium Bezel',
            'Display: 1.4" AMOLED',
            'Battery: 7 days',
            'Audio: Built-in speaker and mic'
        ],
        inTheBox: [
            'Zenith Pro Smartwatch',
            'Premium Fluororubber Strap',
            'Wireless Charging Puck',
            'Welcome Guide'
        ],
        reviews: [
            { author: 'Dr. Mehta', rating: '★★★★★', text: 'The ECG feature is surprisingly reliable. The titanium finish is stunning.' },
            { author: 'Sanjay K.', rating: '★★★★★', text: 'Looks like a much more expensive watch. Pure luxury.' }
        ]
    },
    'zenith-elite': {
        title: 'Zenith Elite',
        price: '₹2,399',
        originalPrice: '₹3,299',
        image: 'assets/zenith_elite.png',
        gallery: [
            'assets/zenith_elite.png',
            'assets/detail_strap.png',
            'assets/hero_2.png'
        ],
        description: 'Experience total freedom with the Zenith Elite. With cellular LTE connectivity and a virtually scratch-proof sapphire crystal glass display, you can leave your phone behind while staying fully connected and looking impeccably sharp.',
        features: [
            'Sapphire crystal glass',
            'Cellular LTE connectivity',
            'Wireless fast charging',
            'Premium metallic finish'
        ],
        specs: [
            'Glass: Sapphire Crystal',
            'Connectivity: LTE (eSIM)',
            'Charging: Qi Wireless',
            'Memory: 16GB internal storage'
        ],
        inTheBox: [
            'Zenith Elite Smartwatch',
            'Stainless Steel Mesh Band',
            'Qi Wireless Charging Pad',
            'eSIM Activation Guide'
        ],
        reviews: [
            { author: 'Nikhil R.', rating: '★★★★★', text: 'Leaving my phone at home and still getting calls is a game changer.' },
            { author: 'Dev P.', rating: '★★★★★', text: 'The sapphire glass has zero scratches after 6 months. Unbeatable quality.' }
        ]
    },
    'obsidian': {
        title: 'Obsidian',
        price: '₹2,449',
        originalPrice: '₹3,399',
        image: 'assets/obsidian.png',
        gallery: [
            'assets/obsidian.png',
            'assets/detail_charger.png',
            'assets/hero_1.png'
        ],
        description: 'Crafted from high-gloss zirconia ceramic, the Obsidian is a statement of futuristic luxury. Beyond its striking exterior lies an AI-powered health coach and advanced metrics tailored for diving and golf enthusiasts.',
        features: [
            'Premium ceramic build',
            'AI-powered health coach',
            'Advanced diving & golf metrics',
            '14-day battery life'
        ],
        specs: [
            'Material: Zirconia Ceramic',
            'Diving: Rated to 30m',
            'Battery: up to 14 days',
            'Sensors: Depth gauge, barometer'
        ],
        inTheBox: [
            'Obsidian Smartwatch',
            'Ceramic Link Bracelet',
            'Magnetic Charging Cable',
            'Premium Display Box'
        ],
        reviews: [
            { author: 'Arjun S.', rating: '★★★★★', text: 'The glossy ceramic finish is an absolute head turner.' },
            { author: 'Meera G.', rating: '★★★★★', text: 'Incredible battery life for such a powerful watch.' }
        ]
    },
    'obsidian-ultra': {
        title: 'Obsidian Ultra',
        price: '₹2,499',
        originalPrice: '₹3,499',
        image: 'assets/obsidian_ultra.png',
        gallery: [
            'assets/obsidian_ultra.png',
            'assets/detail_charger.png',
            'assets/hero_2.png'
        ],
        description: 'The pinnacle of the CHRONOS collection. The Obsidian Ultra seamlessly merges a traditional mechanical dial with a hidden digital display. Featuring solar-assisted charging and global satellite tracking, it is built for those who demand ultimate luxury and capability without compromise.',
        features: [
            'Luxury mechanical-hybrid design',
            'Solar-assisted charging',
            '30-day battery life',
            'Global satellite tracking system'
        ],
        specs: [
            'Type: Mechanical Hybrid',
            'Charging: Solar + Magnetic',
            'Navigation: GPS/GLONASS/Galileo',
            'Material: Aerospace-grade Titanium'
        ],
        inTheBox: [
            'Obsidian Ultra Smartwatch',
            'Tactical Nylon Band',
            'Titanium Link Band',
            'Dual Charging Station',
            'Authenticity Certificate'
        ],
        reviews: [
            { author: 'Kabir M.', rating: '★★★★★', text: 'A masterpiece. The mechanical hands moving over the digital display is stunning.' },
            { author: 'Ishaan C.', rating: '★★★★★', text: 'Ultimate luxury and ruggedness combined. Worth every rupee.' }
        ]
    }
};

// --- Cart State Management ---
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartText = document.getElementById('cartCountText');
    if(cartText) {
        cartText.textContent = count;
        if (count > 0) {
            cartText.style.display = 'flex';
        } else {
            cartText.style.display = 'none';
        }
    }
}

// --- Carousel Logic ---
let slideIndex = 0;
let slideInterval;

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if(slides.length === 0) return; // Not on homepage
    
    showSlide(slideIndex);
    startSlideTimer();
}

function showSlide(index) {
    const container = document.getElementById('carouselContainer');
    const slides = document.querySelectorAll('.carousel-slide');
    if (!container || slides.length === 0) return;

    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    
    container.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveCarousel(step) {
    slideIndex += step;
    showSlide(slideIndex);
    resetSlideTimer();
}

function startSlideTimer() {
    slideInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); // 5 seconds
}

function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
}

// --- Cart & Quantity Logic ---
function changeQty(step) {
    const input = document.getElementById('qtyInput');
    if(!input) return;
    let val = parseInt(input.value);
    val += step;
    if(val < 1) val = 1;
    input.value = val;
}

function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (!productId || !products[productId]) return;

    const qtyInput = document.getElementById('qtyInput');
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, qty: qty });
    }
    saveCart(cart);
    
    // Provide feedback on the button that was clicked
    const btn = document.activeElement;
    if(btn && (btn.classList.contains('btn-solid') || btn.classList.contains('btn-outline') || btn.classList.contains('btn-add-cart') || btn.classList.contains('btn-buy-now'))) {
        const originalText = btn.textContent;
        const isSolid = btn.classList.contains('btn-solid') || btn.classList.contains('btn-add-cart');
        
        btn.textContent = 'Added!';
        if (isSolid) {
            btn.style.backgroundColor = '#fff';
            btn.style.color = '#000';
            btn.style.border = '1px solid #000';
        } else {
            btn.style.backgroundColor = '#000';
            btn.style.color = '#fff';
        }
        
        setTimeout(() => {
            btn.textContent = originalText;
            if (isSolid) {
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.style.border = '';
            } else {
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }
        }, 1000);
    }
}

// --- Checkout Logic ---
function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    loadCheckout();
}

function saveCartForLater() {
    alert("Cart saved for later!");
    localStorage.removeItem('cart');
    updateCartUI();
    loadCheckout();
}

function changeCartQty(id, step) {
    let cart = getCart();
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty += step;
        if (item.qty < 1) item.qty = 1;
        saveCart(cart);
        loadCheckout();
    }
}

function loadCheckout() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderTotal = document.getElementById('orderTotal');
    const orderSavingsBanner = document.getElementById('orderSavingsBanner');
    
    if (!cartItemsContainer) return; // Not on checkout page
    
    const isLossFrame = false;
    
    const cart = getCart();
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <h2>Your cart is empty</h2>
                <a href="index.html#collection" class="btn btn-solid" style="max-width: 200px; display: inline-block;">Shop Now</a>
            </div>
        `;
        if(orderSubtotal) orderSubtotal.textContent = '₹0';
        if(orderTotal) orderTotal.textContent = '₹0';
        if(orderSavingsBanner) orderSavingsBanner.style.display = 'none';
        return;
    }
    
    let subtotal = 0;
    let totalSavings = 0;
    
    cart.forEach(item => {
        const product = products[item.id];
        if (!product) return;
        
        const priceNum = parseInt(product.price.replace(/[^0-9]/g, ''));
        const originalPriceNum = parseInt(product.originalPrice.replace(/[^0-9]/g, ''));
        const itemSavings = (originalPriceNum - priceNum) * item.qty;
        const savePct = Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100);
        
        subtotal += priceNum * item.qty;
        totalSavings += itemSavings;
        
        const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
        const formattedItemSavings = formatter.format(itemSavings).replace('INR', '₹').trim();
        
        let savingsHtml = '';
        if (itemSavings > 0) {
            if (isLossFrame) {
                savingsHtml = `<div class="item-loss-label">${savePct}% OFF | <span style="color: #c5221f;">DON'T LOSE ${formattedItemSavings}</span></div>`;
            } else {
                savingsHtml = `<div class="item-savings-label">${savePct}% OFF | <span style="color: #137333;">SAVE ${formattedItemSavings}</span></div>`;
            }
        }
        
        const cartItemHTML = `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.title}">
                <div class="cart-item-details">
                    <div>
                        <h4 class="cart-item-title">${product.title}</h4>
                        <p class="cart-item-price">${product.price} <span style="text-decoration: line-through; font-size: 0.85em; color: #999;">${product.originalPrice}</span></p>
                        ${savingsHtml}
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-selector" style="width: auto;">
                            <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
                            <input type="text" value="${item.qty}" readonly style="width: 40px; text-align: center; border: none;">
                            <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });
    
    // Format to INR
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });
    
    const formattedSubtotal = formatter.format(subtotal).replace('INR', '₹').trim();
    if(orderSubtotal) orderSubtotal.textContent = formattedSubtotal;
    if(orderTotal) orderTotal.textContent = formattedSubtotal; // Assuming free shipping
    
    if(orderSavingsBanner) {
        if(totalSavings > 0) {
            const formattedTotalSavings = formatter.format(totalSavings).replace('INR', '₹').trim();
            if (isLossFrame) {
                orderSavingsBanner.textContent = `Buy now to avoid a loss of ${formattedTotalSavings}`;
                orderSavingsBanner.className = 'loss-banner';
            } else {
                orderSavingsBanner.textContent = `Savings of ${formattedTotalSavings} applied to your order.`;
                orderSavingsBanner.className = 'savings-banner';
            }
            orderSavingsBanner.style.display = 'block';
        } else {
            orderSavingsBanner.style.display = 'none';
        }
    }
}

function processCheckout(event) {
    event.preventDefault();
    const cart = getCart();
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert("Thank you for your order! Your luxury timepiece will be shipped soon.");
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

// --- Accordion Logic ---
function toggleAccordion(btn) {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    if (btn.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0";
    }
}

// --- Product Page Logic ---
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if(!productId || !products[productId]) return;

    const product = products[productId];
    
    document.title = `${product.title} | CHRONOS`;
    
    const titleEl = document.getElementById('productTitle');
    if(titleEl) titleEl.textContent = product.title;
    
    const priceEl = document.getElementById('productPrice');
    if(priceEl) priceEl.textContent = product.price;

    const buyBoxPriceEl = document.getElementById('buyBoxPrice');
    if(buyBoxPriceEl) buyBoxPriceEl.textContent = product.price;

    // Load original prices & discount badges
    const originalPriceEl = document.getElementById('originalPrice');
    if(originalPriceEl) originalPriceEl.textContent = product.originalPrice;

    const buyBoxOriginalPriceEl = document.getElementById('buyBoxOriginalPrice');
    if(buyBoxOriginalPriceEl) buyBoxOriginalPriceEl.textContent = product.originalPrice;

    // Calculate discount percentage dynamically
    const p1 = parseInt(product.price.replace(/[^\d]/g, ''));
    const p2 = parseInt(product.originalPrice.replace(/[^\d]/g, ''));
    const savePct = Math.round(((p2 - p1) / p2) * 100);

    const discountBadge = document.getElementById('discountBadge');
    if(discountBadge) discountBadge.textContent = `SAVE ${savePct}%`;

    const buyBoxDiscountBadge = document.getElementById('buyBoxDiscountBadge');
    if(buyBoxDiscountBadge) buyBoxDiscountBadge.textContent = `${savePct}% OFF`;

    const descEl = document.getElementById('productDescription');
    if(descEl) descEl.textContent = product.description;
    
    // Load vertical gallery images
    const galleryEl = document.getElementById('verticalGallery');
    if(galleryEl && product.gallery) {
        galleryEl.innerHTML = '';
        product.gallery.forEach((imgSrc, i) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${product.title} - View ${i + 1}`;
            galleryEl.appendChild(img);
        });
    }

    // Load manufacturer dynamic images
    const mfgImg1 = document.getElementById('mfgImg1');
    if(mfgImg1 && product.gallery && product.gallery[1]) {
        mfgImg1.src = product.gallery[1];
        mfgImg1.alt = `${product.title} - Detail`;
    }
    const mfgImg2 = document.getElementById('mfgImg2');
    if(mfgImg2 && product.gallery && product.gallery[2]) {
        mfgImg2.src = product.gallery[2];
        mfgImg2.alt = `${product.title} - Lifestyle`;
    }

    // Features
    const featuresList = document.getElementById('featuresList');
    if(featuresList) {
        featuresList.innerHTML = '';
        product.features.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            featuresList.appendChild(li);
        });
    }

    // Specs
    const specsList = document.getElementById('specsList');
    if(specsList) {
        specsList.innerHTML = '';
        product.specs.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            specsList.appendChild(li);
        });
    }

    // Reviews (Custom style)
    const reviewsDiv = document.getElementById('reviewsContent');
    if(reviewsDiv) {
        reviewsDiv.innerHTML = '';
        product.reviews.forEach(r => {
            const div = document.createElement('div');
            div.className = 'product-review-item';
            
            // Generate avatar from initials inline (no external requests)
            const initials = r.author.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            const avatarSvg = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23000"/><text x="50%25" y="50%25" dominant-baseline="central" text-anchor="middle" fill="%23fff" font-family="Montserrat,Arial,sans-serif" font-size="15" font-weight="600">${initials}</text></svg>`)}`;
            
            // Convert rating to stars
            let starsStr = '★★★★★';
            if(r.rating.includes('☆')) {
                starsStr = '★★★★☆';
            }
            
            const reviewTitleText = r.text.split('.')[0] + '.'; // Use first sentence as title

            div.innerHTML = `
                <div class="review-author-row">
                    <img src="${avatarSvg}" alt="${r.author}" width="40" height="40">
                    <span class="review-author-name">${r.author}</span>
                </div>
                <div class="review-rating-row">
                    <span class="review-stars">${starsStr}</span>
                    <span class="review-title">${reviewTitleText}</span>
                </div>
                <div class="review-date">Reviewed in India on June 21, 2026</div>
                <p class="review-text">${r.text}</p>
            `;
            reviewsDiv.appendChild(div);
        });
    }

    // Recommended Section
    loadRecommended(productId);
}

function loadRecommended(currentId) {
    const recommendedGrid = document.getElementById('recommendedGrid');
    if(!recommendedGrid) return;
    
    recommendedGrid.innerHTML = '';
    
    // Get all keys except current
    const keys = Object.keys(products).filter(k => k !== currentId);
    
    // Shuffle and pick 4
    const shuffled = keys.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    
    selected.forEach(id => {
        const p = products[id];
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => window.location.href = `product.html?id=${id}`;
        
        // Calculate discount percentage
        const p1 = parseInt(p.price.replace(/[^\d]/g, ''));
        const p2 = parseInt(p.originalPrice.replace(/[^\d]/g, ''));
        const savePct = Math.round(((p2 - p1) / p2) * 100);

        card.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.image}" alt="${p.title}">
            </div>
            <div class="product-info">
                <h3>${p.title}</h3>
                <p class="price-container">
                    <span class="original-price">${p.originalPrice}</span>
                    <span class="sale-price">${p.price}</span>
                    <span class="discount-label">${savePct}% OFF</span>
                </p>
                <a href="product.html?id=${id}" class="btn btn-view" style="display:inline-block;">View Details</a>
            </div>
        `;
        recommendedGrid.appendChild(card);
    });
}

// Initialize based on what exists on the page
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    initCarousel();
    loadProduct();
    loadCheckout();

    // Make product cards on landing page clickable
    document.querySelectorAll('.product-card').forEach(card => {
        if (!card.onclick) {
            const link = card.querySelector('a.btn-view') || card.querySelector('a');
            if (link) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', (e) => {
                    if (e.target.tagName === 'A' || e.target.closest('a')) return;
                    window.location.href = link.getAttribute('href');
                });
            }
        }
    });
});
