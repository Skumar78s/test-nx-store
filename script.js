// Tailwind Configuration for Play CDN
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#9fd3c7',
                whatsapp: '#25D366',
                dark: '#1a1a1a',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// Product Data
const products = [
    { id: 1, name: "Premium Linen Co-ord", price: "₹ 2,499", rating: 4.8, reviews: 124, soldCount: 540, shortDesc: "Breathable and stylish linen set.", fullDesc: "Crafted from the finest European linen, this co-ord set offers unmatched comfort for summer outings. The tailored fit ensures a sharp look without sacrificing ease of movement.", sizes: ["S", "M", "L", "XL"], colors: ["#D2B48C", "#FFFFFF", "#8FBC8F"], images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"] },
    { id: 2, name: "Silk Evening Gown", price: "₹ 4,999", rating: 4.9, reviews: 89, soldCount: 210, shortDesc: "Elegant floor-length silk gown.", fullDesc: "Make a statement at your next gala with this pure silk evening gown. Featuring a subtle sheen and a flowy silhouette that moves with grace.", sizes: ["XS", "S", "M"], colors: ["#000000", "#4B0082", "#800000"], images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1", "https://images.unsplash.com/photo-1566174053879-31528523f8ae", "https://images.unsplash.com/photo-1518721032067-162e7aa2c730"] },
    { id: 3, name: "Minimalist Blazer", price: "₹ 3,299", rating: 4.7, reviews: 156, soldCount: 890, shortDesc: "Modern tailored blazer for all occasions.", fullDesc: "A wardrobe essential. This minimalist blazer features a clean cut, premium lining, and versatile styling options from office to evening dinner.", sizes: ["M", "L", "XL", "XXL"], colors: ["#1a1a1a", "#808080", "#E5E4E2"], images: ["https://images.unsplash.com/photo-1550614000-4895a10e1bfd", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea", "https://images.unsplash.com/photo-1548883354-94bcfe321cbb"] },
    { id: 4, name: "Cotton Summer Dress", price: "₹ 1,899", rating: 4.6, reviews: 210, soldCount: 1200, shortDesc: "Lightweight and breezy cotton dress.", fullDesc: "Perfect for sun-drenched days, this 100% organic cotton dress features delicate embroidery and a relaxed fit.", sizes: ["S", "M", "L"], colors: ["#FFFDD0", "#ADD8E6", "#FFB6C1"], images: ["https://images.unsplash.com/photo-1572804013307-a9a111b71f9b", "https://images.unsplash.com/photo-1496747611176-843222e1e57c", "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"] },
    { id: 5, name: "Denim Trucker Jacket", price: "₹ 2,799", rating: 4.8, reviews: 340, soldCount: 2150, shortDesc: "Classic rugged denim jacket.", fullDesc: "Our signature trucker jacket in vintage wash denim. Built to last and styles perfectly over a hoodie or a floral dress.", sizes: ["S", "M", "L", "XL"], colors: ["#4682B4", "#2F4F4F", "#000080"], images: ["https://images.unsplash.com/photo-1527082395-e939b809da0d", "https://images.unsplash.com/photo-1551537482-f2075a1d41f2", "https://images.unsplash.com/photo-1576995853123-5a10305d93c0"] },
    { id: 6, name: "Floral Print Shirt", price: "₹ 1,499", rating: 4.5, reviews: 112, soldCount: 670, shortDesc: "Soft rayon shirt with tropical prints.", fullDesc: "Bring the vacation vibes home. This soft-touch rayon shirt is breathable and features high-definition floral prints.", sizes: ["M", "L", "XL"], colors: ["#FFFFFF", "#F0E68C", "#E6E6FA"], images: ["https://images.unsplash.com/photo-1598033129183-c4f50c7176c8", "https://images.unsplash.com/photo-1523381235208-2592230f94f9", "https://images.unsplash.com/photo-1578932750294-f500f8147397"] },
    { id: 7, name: "Urban Leather Boots", price: "₹ 5,499", rating: 4.9, reviews: 78, soldCount: 180, shortDesc: "Handcrafted genuine leather boots.", fullDesc: "Premium leather boots with a cushioned sole for all-day comfort. Designed for the urban explorer who values quality.", sizes: ["7", "8", "9", "10"], colors: ["#3d2b1f", "#000000"], images: ["https://images.unsplash.com/photo-1520639889313-727216bc3bca", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2", "https://images.unsplash.com/photo-1549298916-b41d501d3772"] },
    { id: 8, name: "Knit Wool Sweater", price: "₹ 2,299", rating: 4.7, reviews: 145, soldCount: 430, shortDesc: "Chunky knit sweater for winter.", fullDesc: "Stay cozy in our hand-knit wool blend sweater. Features a classic cable pattern and a relaxed turtleneck.", sizes: ["S", "M", "L"], colors: ["#F5F5DC", "#D2691E", "#2F4F4F"], images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633", "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f", "https://images.unsplash.com/photo-1434389677669-e08b4cac3105"] },
    { id: 9, name: "Oversized Graphic Tee", price: "₹ 999", rating: 4.4, reviews: 560, soldCount: 3200, shortDesc: "Streetwear essential heavyweight tee.", fullDesc: "Heavyweight 240 GSM cotton tee with a modern oversized fit. Featuring minimalist embroidered branding on the chest.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#000000", "#FFFFFF", "#808080"], images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a", "https://images.unsplash.com/photo-1562157873-818bc0726f68"] },
    { id: 10, name: "Classic Trench Coat", price: "₹ 6,999", rating: 5.0, reviews: 42, soldCount: 95, shortDesc: "Iconic double-breasted trench.", fullDesc: "A timeless investment piece. Water-resistant gabardine fabric, classic epaulettes, and a waist-defining belt.", sizes: ["S", "M", "L"], colors: ["#C2B280", "#000000"], images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea", "https://images.unsplash.com/photo-1544022613-e87ca75a784a", "https://images.unsplash.com/photo-1511401139252-f158d3209c17"] },
    { id: 11, name: "Pleated Midi Skirt", price: "₹ 1,799", rating: 4.6, reviews: 92, soldCount: 310, shortDesc: "High-waist pleated skirt.", fullDesc: "Satin finish pleated midi skirt that transitions perfectly from desk to dinner. Featuring an elasticated waistband for comfort.", sizes: ["XS", "S", "M", "L"], colors: ["#FFD700", "#008080", "#FFC0CB"], images: ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee", "https://images.unsplash.com/photo-1509556756506-30656d77ff2c", "https://images.unsplash.com/photo-1548624149-f7b146817752"] },
    { id: 12, name: "Relaxed Cargo Pants", price: "₹ 2,199", rating: 4.7, reviews: 88, soldCount: 410, shortDesc: "Utility meets modern comfort.", fullDesc: "Constructed from durable twill, these cargo pants offer a relaxed fit with functional pockets for an effortless urban look.", sizes: ["30", "32", "34", "36"], colors: ["#556B2F", "#000000", "#F5F5DC"], images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1", "https://images.unsplash.com/photo-1517841905240-472988babdf9", "https://images.unsplash.com/photo-1523381235208-2592230f94f9"] }
];

const testimonials = [
    { name: "Ananya R.", text: "The quality of the fabric exceeded my expectations. Kalinga NX is my new go-to for luxury wear.", rating: 5 },
    { name: "Rahul S.", text: "Fast delivery and the WhatsApp ordering process was so seamless. Highly recommended!", rating: 5 },
    { name: "Sarah J.", text: "Found exactly what I was looking for. The minimalist design fits my style perfectly.", rating: 4 },
    { name: "Vikram M.", text: "The fit is incredible. It's hard to find clothes that look this tailored off the shelf.", rating: 5 },
    { name: "Priya K.", text: "Beautiful colors and premium feel. Perfect for festive occasions!", rating: 5 },
    { name: "Ishaan T.", text: "Great customer service. They helped me pick the right size over WhatsApp.", rating: 5 }
];

let currentTestimonialSlide = 0;

let currentSlide = 0;

// Render all products to the grid
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = products.map(p => `
        <div class="group cursor-pointer" onclick="openProductModal(${p.id})">
            <div class="aspect-[3/4] overflow-hidden rounded-sm mb-4 relative bg-[#f8f8f8]">
                <img src="${p.images[0]}?auto=format&fit=crop&q=80&w=600" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
                ${p.soldCount > 1000 ? `
                    <div class="absolute top-4 left-4 bg-white px-2 py-1 text-[8px] font-bold tracking-[0.1em] uppercase shadow-sm">
                        Best Seller
                    </div>
                ` : ''}
            </div>
            <div>
                <h4 class="text-sm font-medium text-dark mb-1">${p.name}</h4>
                <p class="text-sm font-bold text-dark">${p.price}</p>
                <div class="mt-2 flex items-center gap-1 text-[9px] text-gray-400 uppercase tracking-tighter">
                    <span>${p.rating} / 5</span>
                    <span>•</span>
                    <span>${p.reviews} Reviews</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize products on load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderTestimonials();
    startTestimonialSlider();
});

function renderTestimonials() {
    const track = document.getElementById('testimonial-track');
    if (!track) return;

    track.innerHTML = testimonials.map(t => `
        <div class="testimonial-slide px-4">
            <div class="text-center h-full flex flex-col justify-center">
                <div class="flex justify-center gap-1 mb-6 text-yellow-400">
                    ${Array(t.rating).fill('<i class="fa-solid fa-star text-xs"></i>').join('')}
                </div>
                <p class="font-serif italic text-gray-800 text-2xl leading-relaxed mb-8">"${t.text}"</p>
                <p class="font-bold text-dark tracking-[0.2em] uppercase text-xs">— ${t.name}</p>
            </div>
        </div>
    `).join('');
}

function startTestimonialSlider() {
    setInterval(() => {
        const track = document.getElementById('testimonial-track');
        if (!track) return;
        
        currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonials.length;
        track.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
    }, 5000);
}

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentSlide = 0;
    const modal = document.getElementById('product-modal');
    
    // Update content
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById('modal-price').innerText = product.price;
    document.getElementById('modal-short-desc').innerText = product.shortDesc;
    document.getElementById('modal-full-desc').innerText = product.fullDesc;
    document.getElementById('modal-sold').innerText = `Loved by ${product.soldCount}+ trendsetters`;
    document.getElementById('modal-rating').innerText = `${product.rating} (${product.reviews} verified reviews)`;
    
    // Slider images
    const sliderTrack = document.getElementById('slider-track');
    sliderTrack.innerHTML = product.images.map(img => `
        <div class="slider-item">
            <img src="${img}?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover">
        </div>
    `).join('');
    sliderTrack.style.transform = `translateX(0%)`;

    // Sizes and Colors
    document.getElementById('modal-sizes').innerHTML = product.sizes.map(s => `<button class="px-4 py-2 border rounded-lg font-bold hover:bg-dark hover:text-white transition">${s}</button>`).join('');
    document.getElementById('modal-colors').innerHTML = product.colors.map(c => `<div class="w-8 h-8 rounded-full border border-gray-300 shadow-inner" style="background-color: ${c}"></div>`).join('');
    
    // WhatsApp Link
    document.getElementById('modal-wa-btn').href = `https://wa.me/91XXXXXXXXXX?text=Hi, I want to order ${product.name}`;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function moveSlider(direction) {
    const track = document.getElementById('slider-track');
    const totalSlides = track.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
}