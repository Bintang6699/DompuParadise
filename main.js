// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('text-accent');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cursor follower effect
    const cursorFollower = document.getElementById('cursor-follower');
    if (cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        // Scale up when hovering interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .card-hover, .btn-animate');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorFollower, {
                    scale: 2,
                    backgroundColor: 'rgba(255, 0, 110, 0.3)',
                    duration: 0.3
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(cursorFollower, {
                    scale: 1,
                    backgroundColor: 'rgba(255, 0, 110, 0.1)',
                    duration: 0.3
                });
            });
        });
    }

    // Button animations
    document.querySelectorAll('.btn-animate').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                duration: 0.3
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                duration: 0.3
            });
        });
        
        button.addEventListener('mousedown', () => {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1
            });
        });
        
        button.addEventListener('mouseup', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.1
            });
        });
    });

    // Skill progress bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.from(bar, {
                width: 0,
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                onComplete: () => {
                    bar.style.width = targetWidth;
                }
            });
        });
    }
});