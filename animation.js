// assets/js/animations.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements on page load
    gsap.from('header', { 
        opacity: 0, 
        y: -50, 
        duration: 1, 
        ease: 'power3.out' 
    });

    gsap.from('nav a', { 
        opacity: 0, 
        y: -20, 
        stagger: 0.1, 
        duration: 0.8, 
        delay: 0.5 
    });

    gsap.from('.hero-content', { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        delay: 0.8 
    });

    // Scroll animations for all pages
    gsap.utils.toArray('.fade-in').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Card hover effects
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;
            
            const centerX = card.offsetWidth / 2;
            const centerY = card.offsetHeight / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            gsap.to(card, {
                rotationX: angleX,
                rotationY: angleY,
                transformPerspective: 1000,
                ease: 'power2.out',
                duration: 0.5
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                ease: 'power2.out',
                duration: 0.5
            });
        });
    });

    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-blue-600', 'text-white');
                    btn.classList.add('border', 'border-gray-300', 'text-gray-700', 'hover:bg-gray-100');
                });
                
                this.classList.remove('border', 'border-gray-300', 'text-gray-700', 'hover:bg-gray-100');
                this.classList.add('bg-blue-600', 'text-white');
                
                // Filter items
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // FAQ toggle functionality
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    if (faqToggles.length > 0) {
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('svg');
                
                // Toggle content
                content.classList.toggle('hidden');
                
                // Toggle icon rotation
                if (content.classList.contains('hidden')) {
                    icon.classList.remove('rotate-180');
                } else {
                    icon.classList.add('rotate-180');
                }
                
                // Close other open FAQs
                faqToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.nextElementSibling.classList.add('hidden');
                        otherToggle.querySelector('svg').classList.remove('rotate-180');
                    }
                });
            });
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Simulate form submission
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                gsap.fromTo(submitButton, 
                    { backgroundColor: '#3a86ff' },
                    { backgroundColor: '#4BB543', duration: 0.5 }
                );
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    gsap.to(submitButton, { backgroundColor: '#3a86ff', duration: 0.5 });
                }, 3000);
            }, 1500);
        });
    }

    // Load more functionality for portfolio
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would load more items via AJAX
            alert('In a real implementation, this would load more portfolio items.');
        });
    }
});