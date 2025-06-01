// Language switching functionality
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);
    
    // Update all elements with language data attributes
    document.querySelectorAll('[data-en], [data-fa]').forEach(element => {
        if (element.getAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update data loader language
    if (window.dataLoader) {
        window.dataLoader.setLanguage(lang);
        // Re-populate content with new language
        window.dataLoader.populatePersonalInfo();
        window.dataLoader.populateSkills();
        window.dataLoader.populateFeatured();
    }
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Initialize language switching
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchLanguage(savedLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered animation delay
            setTimeout(() => {
                entry.target.classList.add('animate-in');
                
                // Add special animations for different card types
                if (entry.target.classList.contains('skill-category')) {
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                if (entry.target.classList.contains('project-card')) {
                    entry.target.style.animationDelay = `${index * 0.15}s`;
                }
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                }
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation with enhanced handling
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for dynamic content to load
    setTimeout(() => {
        const animateElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat-item, .achievement-card, .video-card');
        animateElements.forEach((el, index) => {
            // Only apply animation styles to elements that are specifically marked for animation
            // Don't automatically hide all elements
            if (el.classList.contains('animate-on-scroll')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }
            
            observer.observe(el);
        });
    }, 500);
});

// Add enhanced CSS for animation classes
const style = document.createElement('style');
style.textContent = `
    /* Only hide elements that are specifically marked for animation */
    .skill-category.animate-on-scroll, .project-card.animate-on-scroll, .timeline-item.animate-on-scroll, .stat-item.animate-on-scroll, .achievement-card.animate-on-scroll, .video-card.animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .skill-category.animate-in, .project-card.animate-in, .timeline-item.animate-in, .stat-item.animate-in, .achievement-card.animate-in, .video-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Enhanced Mobile Menu Animation */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    /* Enhanced Card Entrance Animations */
    @keyframes cardEnter {
        0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
        }
        50% {
            opacity: 0.7;
            transform: translateY(-10px) scale(1.02);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes skillTagPop {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .skill-category.animate-in {
        animation: cardEnter 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    .skill-category.animate-in .skill-tag {
        animation: skillTagPop 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    /* Staggered animations for skill tags */
    .skill-category.animate-in .skill-tag:nth-child(1) { animation-delay: 0.1s; }
    .skill-category.animate-in .skill-tag:nth-child(2) { animation-delay: 0.2s; }
    .skill-category.animate-in .skill-tag:nth-child(3) { animation-delay: 0.3s; }
    .skill-category.animate-in .skill-tag:nth-child(4) { animation-delay: 0.4s; }
    .skill-category.animate-in .skill-tag:nth-child(5) { animation-delay: 0.5s; }
    
    /* Magnetic effect for project links */
    .project-link {
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .project-link:hover {
        animation: magneticPulse 0.6s ease-in-out;
    }
    
    @keyframes magneticPulse {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1.2) rotate(-3deg); }
        75% { transform: scale(1.15) rotate(2deg); }
    }
`;
document.head.appendChild(style);

// Add enhanced interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Enhanced floating icons interaction
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        // Add initial animation delay
        icon.style.animationDelay = `${index * 0.5}s`;
        
        icon.addEventListener('mouseenter', () => {
            icon.style.animationPlayState = 'paused';
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.filter = 'brightness(1.3) saturate(1.2)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.animationPlayState = 'running';
            icon.style.transform = 'scale(1)';
            icon.style.filter = 'brightness(1) saturate(1)';
        });
    });
    
    // Enhanced parallax effect for hero section
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translate3d(0, ${rate}px, 0)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Enhanced skill tags hover effect with magnetic interaction
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('skill-tag')) {
            e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.4)';
            e.target.style.transform = 'translateY(-3px) scale(1.05)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('skill-tag')) {
            e.target.style.boxShadow = '0 4px 12px rgba(0, 212, 255, 0.2)';
            e.target.style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Enhanced project cards 3D tilt effect
    const projectCards = document.querySelectorAll('.project-card, .achievement-card, .video-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
            card.style.transition = 'none';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// Enhanced scroll to top functionality with animation
let scrollToTopButton = null;

function createScrollToTopButton() {
    if (scrollToTopButton) return scrollToTopButton;
    
    scrollToTopButton = document.createElement('button');
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 55px;
        height: 55px;
        background: linear-gradient(135deg, #00d4ff, #7c3aed);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
        opacity: 0;
        transform: translateY(20px) scale(0.8);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.2);
    `;
    
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopButton.addEventListener('mouseenter', () => {
        scrollToTopButton.style.transform = 'translateY(0) scale(1.1) rotate(10deg)';
        scrollToTopButton.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.5)';
    });
    
    scrollToTopButton.addEventListener('mouseleave', () => {
        scrollToTopButton.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        scrollToTopButton.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
    });
    
    document.body.appendChild(scrollToTopButton);
    return scrollToTopButton;
}

window.addEventListener('scroll', () => {
    const button = createScrollToTopButton();
    
    if (window.scrollY > 500) {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0) scale(1)';
    } else {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px) scale(0.8)';
    }
});

// Enhanced loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 60px;
        height: 60px;
        border: 4px solid rgba(0, 212, 255, 0.2);
        border-top: 4px solid #00d4ff;
        border-radius: 50%;
        animation: enhancedSpin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    `;
    
    const spinKeyframes = document.createElement('style');
    spinKeyframes.textContent = `
        @keyframes enhancedSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
        }
    `;
    document.head.appendChild(spinKeyframes);
    
    loader.appendChild(spinner);
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transform = 'scale(1.1)';
        setTimeout(() => {
            loader.remove();
        }, 800);
    }, 1500);
});

// Add dynamic year to footer
document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.querySelector('.footer-text p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${currentYear} AI Portfolio. Made with ❤️ for showcasing AI engineering skills.`;
    }
});

// Easter egg: Konami code
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activation
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
}); 