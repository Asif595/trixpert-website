// Slider Functionality
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentSlide = 0;
let autoSlideInterval;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event Listeners for manual controls
prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

// Auto-Slide Functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change image every 5 seconds
}

// Reset Auto-Slide Timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Clear existing interval
    startAutoSlide(); // Restart auto-slide
}
// Scroll Animation
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) *
            (percentageScroll / 100)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 75)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
///
// Toggle Chat Popup
const whatsappButton = document.getElementById('whatsapp-button');
const chatPopup = document.getElementById('chat-popup');
const closeChat = document.getElementById('close-chat');

whatsappButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent opening WhatsApp immediately
    chatPopup.style.display = 'block';
});

closeChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});

// Initialize the slider
showSlide(currentSlide);
startAutoSlide();
