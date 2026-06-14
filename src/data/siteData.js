// ========== NAVIGATION LINKS ==========
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'Products', href: '#products' },
  { label: 'Brands', href: '#brands' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

// ========== CATEGORY DATA ==========
export const categories = [
  { id: 1, name: 'Helmets', icon: 'HardHat', image: '/images/product-helmet.png', count: '120+ Products' },
  { id: 2, name: 'Riding Gloves', icon: 'Hand', image: '/images/product-gloves.png', count: '85+ Products' },
  { id: 3, name: 'LED Lights', icon: 'Lightbulb', image: '/images/product-led-light.png', count: '200+ Products' },
  { id: 4, name: 'Mobile Holders', icon: 'Smartphone', image: '/images/product-phone-mount.png', count: '60+ Products' },
  { id: 5, name: 'Crash Guards', icon: 'Shield', image: '/images/product-crash-guard.png', count: '75+ Products' },
  { id: 6, name: 'Bike Covers', icon: 'Umbrella', image: '/images/product-bike-cover.png', count: '90+ Products' },
  { id: 7, name: 'Engine Oil', icon: 'Droplets', image: '/images/product-engine-oil.png', count: '45+ Products' },
  { id: 8, name: 'Performance Parts', icon: 'Gauge', image: '/images/product-exhaust.png', count: '150+ Products' },
]

// ========== PRODUCTS DATA ==========
export const products = [
  {
    id: 1,
    name: 'Steelbird SBA-21 GT Helmet',
    category: 'Helmets',
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 342,
    image: '/images/product-helmet.png',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Rynox Storm Evo 3 Gloves',
    category: 'Riding Gloves',
    price: 1899,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 218,
    image: '/images/product-gloves.png',
    badge: 'New',
  },
  {
    id: 3,
    name: 'HJG Fog Light 40W LED',
    category: 'LED Lights',
    price: 1299,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 567,
    image: '/images/product-led-light.png',
    badge: 'Hot Deal',
  },
  {
    id: 4,
    name: 'RAM X-Grip Phone Mount',
    category: 'Mobile Holders',
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 1203,
    image: '/images/product-phone-mount.png',
    badge: 'Top Rated',
  },
  {
    id: 5,
    name: 'Zana Crash Guard - RE 350',
    category: 'Crash Guards',
    price: 4999,
    originalPrice: 6499,
    rating: 4.8,
    reviews: 156,
    image: '/images/product-crash-guard.png',
    badge: 'Premium',
  },
  {
    id: 6,
    name: 'RiderShield UV Bike Cover',
    category: 'Bike Covers',
    price: 799,
    originalPrice: 1199,
    rating: 4.5,
    reviews: 890,
    image: '/images/product-bike-cover.png',
    badge: null,
  },
  {
    id: 7,
    name: 'Motul 7100 10W-50 Synthetic',
    category: 'Engine Oil',
    price: 1149,
    originalPrice: 1399,
    rating: 4.9,
    reviews: 2100,
    image: '/images/product-engine-oil.png',
    badge: 'Bestseller',
  },
  {
    id: 8,
    name: 'Akrapovic Slip-On Exhaust',
    category: 'Performance Parts',
    price: 18999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 89,
    image: '/images/product-exhaust.png',
    badge: 'Premium',
  },
]

// ========== BEST SELLERS ==========
export const bestSellers = [
  {
    id: 101,
    name: 'Axor Apex Helmet',
    category: 'Helmets',
    price: 3999,
    originalPrice: 5499,
    rating: 4.8,
    reviews: 445,
    image: '/images/product-helmet.png',
    badge: 'Bestseller',
  },
  {
    id: 102,
    name: 'Alpinestars GP Plus R Gloves',
    category: 'Riding Gloves',
    price: 5499,
    originalPrice: 7999,
    rating: 4.9,
    reviews: 167,
    image: '/images/product-gloves.png',
    badge: 'Premium',
  },
  {
    id: 103,
    name: 'Barkbusters LED Running Lights',
    category: 'LED Lights',
    price: 2299,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 321,
    image: '/images/product-led-light.png',
    badge: 'Popular',
  },
  {
    id: 104,
    name: 'QuadLock Moto Kit Pro',
    category: 'Mobile Holders',
    price: 3499,
    originalPrice: 4499,
    rating: 4.9,
    reviews: 890,
    image: '/images/product-phone-mount.png',
    badge: 'Top Rated',
  },
  {
    id: 105,
    name: 'Arrow Thunder Exhaust',
    category: 'Performance Parts',
    price: 15999,
    originalPrice: 21999,
    rating: 4.8,
    reviews: 56,
    image: '/images/product-exhaust.png',
    badge: 'Premium',
  },
  {
    id: 106,
    name: 'Shell Advance Ultra 15W-50',
    category: 'Engine Oil',
    price: 999,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 1800,
    image: '/images/product-engine-oil.png',
    badge: 'Value Pick',
  },
]

// ========== BRAND LOGOS ==========
export const brands = [
  'Royal Enfield',
  'Yamaha',
  'TVS',
  'Hero',
  'Bajaj',
  'KTM',
  'Honda',
  'Suzuki',
]

// ========== FEATURES (WHY CHOOSE US) ==========
export const features = [
  {
    icon: 'ShieldCheck',
    title: 'Genuine Products',
    description: 'Every product is 100% authentic and sourced directly from authorized distributors with warranty.',
  },
  {
    icon: 'Truck',
    title: 'Fast Shipping',
    description: 'Express delivery across India. Most orders delivered within 2-4 business days to your doorstep.',
  },
  {
    icon: 'RotateCcw',
    title: 'Easy Returns',
    description: '30-day hassle-free return policy. Not satisfied? Return it with no questions asked.',
  },
  {
    icon: 'Headset',
    title: 'Expert Support',
    description: 'Our motorcycle enthusiast team is available 24/7 to help you pick the right gear.',
  },
]

// ========== REVIEWS ==========
export const reviews = [
  {
    id: 1,
    name: 'Arjun Mehta',
    avatar: 'AM',
    rating: 5,
    review: 'Absolutely premium quality! The Steelbird helmet fits perfectly and the delivery was super fast. MotoGear Pro is now my go-to store for all riding gear.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    avatar: 'PS',
    rating: 5,
    review: 'Bought LED fog lights and crash guards for my RE Classic 350. Installation was easy and the quality exceeded my expectations. Highly recommended!',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 3,
    name: 'Rahul Verma',
    avatar: 'RV',
    rating: 4,
    review: 'Great collection of riding gloves. The Rynox gloves I ordered are comfortable and provide excellent grip. Will definitely order again.',
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 4,
    name: 'Sneha Patil',
    avatar: 'SP',
    rating: 5,
    review: 'The Akrapovic exhaust completely transformed my bike. The sound, the performance, everything is top-notch. Best purchase I have ever made!',
    date: '1 week ago',
    verified: true,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    avatar: 'VS',
    rating: 5,
    review: 'Customer support is exceptional. They helped me choose the right engine oil for my Dominar. Fast shipping with proper packaging. 5 stars!',
    date: '2 months ago',
    verified: true,
  },
  {
    id: 6,
    name: 'Ananya Reddy',
    avatar: 'AR',
    rating: 4,
    review: 'Love the bike cover quality. Waterproof and fits my Yamaha R15 perfectly. The material feels durable and worth every penny.',
    date: '1 month ago',
    verified: true,
  },
]

// ========== FAQ DATA ==========
export const faqs = [
  {
    question: 'Are all products on MotoGear Pro genuine?',
    answer: 'Absolutely! We source all products directly from authorized distributors and manufacturers. Every product comes with a manufacturer warranty and authenticity guarantee.',
  },
  {
    question: 'What is your delivery timeline?',
    answer: 'We offer express shipping across India. Metro cities receive orders within 2-3 business days, while other locations receive within 4-5 business days. Free shipping on orders above ₹999.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer: 'Yes! We have a 30-day hassle-free return policy. If the product is unused and in its original packaging, we will process a full refund or exchange within 5-7 business days.',
  },
  {
    question: 'Do you provide installation support?',
    answer: 'For select products like crash guards, exhaust systems, and LED lights, we partner with local workshops in major cities to provide professional installation at discounted rates.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking link via email and SMS. You can also track your order in real-time from your account dashboard on our website.',
  },
  {
    question: 'Do you offer bulk or dealer pricing?',
    answer: 'Yes, we have special pricing for workshops, dealers, and bulk orders. Contact our sales team at business@motogearpro.com for customized quotes and partnership opportunities.',
  },
]

// ========== STATS ==========
export const stats = [
  { value: 10, suffix: 'K+', label: 'Happy Customers' },
  { value: 5, suffix: 'K+', label: 'Products Available' },
  { value: 50, suffix: '+', label: 'Partner Brands' },
  { value: 4.9, suffix: '', label: 'Average Rating', isDecimal: true },
]

// ========== FOOTER DATA ==========
export const footerLinks = {
  shop: [
    { label: 'Helmets', href: '#categories' },
    { label: 'Riding Gear', href: '#categories' },
    { label: 'LED Lights', href: '#categories' },
    { label: 'Performance Parts', href: '#categories' },
    { label: 'Accessories', href: '#categories' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#brands' },
  ],
  support: [
    { label: 'Help Center', href: '#faq' },
    { label: 'Shipping Info', href: '#faq' },
    { label: 'Returns', href: '#faq' },
    { label: 'Track Order', href: '#' },
    { label: 'Contact Us', href: '#contact' },
  ],
}
