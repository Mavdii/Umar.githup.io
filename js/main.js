// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    
    // Initialize all functions when DOM is loaded
    initNavigation();
    initBackToTop();
    initSmoothScroll();
    initSkillBars();
    initContactForm();
    initPortfolioFilter();
    initCounters();
    initHeroSection();
    initParticles();
    initScrollAnimations();
});

// Navigation functionality
function initNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
            
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update ARIA attributes
            mobileMenu.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.setAttribute('aria-label', !isExpanded ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل');
            
            // Prevent body scroll when mobile menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

// Animate skill bars when they enter the viewport
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-progress');
    if (!bars.length) return;
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const level = el.getAttribute('data-level');
                el.style.width = level + '%';
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.4 });
    bars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

// Wrapper for counters to keep naming consistent
function initCounters() {
    initCounterAnimation();
}
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!header.contains(e.target) && navMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Header scroll effect
    initHeaderScrollEffect();
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when scrolling down
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Back to top button functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20; // Extra padding
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    mobileMenu.setAttribute('aria-expanded', 'false');
                    mobileMenu.setAttribute('aria-label', 'فتح قائمة التنقل');
                    document.body.style.overflow = '';
                }
                
                // Smooth scroll with easing
                smoothScrollTo(targetPosition, 800);
            }
        });
    });
}

// Custom smooth scroll function with easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Initialize Hero Section functionality
function initHeroSection() {
    initScrollIndicator();
    initButtonRippleEffect();
    initCounterAnimation();
    initTypingEffect();
}

// Scroll indicator functionality
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight - 20;
                smoothScrollTo(targetPosition, 800);
            }
        });
    }
}

// Button ripple effect
function initButtonRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('btn-ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Counter animation for stats
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animate counter numbers
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Enhanced typing effect
function initTypingEffect() {
    const typingElement = document.querySelector('[data-typing="true"]');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.style.borderLeft = '3px solid var(--color-accent)';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    typingElement.style.borderLeft = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 2000);
    }
}

// Initialize hero section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroSection();
});

// Button loading state management
function setButtonLoading(button, loading = true) {
    if (loading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// Button success state
function setButtonSuccess(button, success = true) {
    if (success) {
        button.classList.add('success');
        setTimeout(() => {
            button.classList.remove('success');
        }, 2000);
    } else {
        button.classList.remove('success');
    }
}

// Download CV functionality
function initDownloadCV() {
    const downloadBtn = document.querySelector('a[download]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Add analytics or tracking here if needed
            console.log('CV download initiated');
            
            // Show success message
            setTimeout(() => {
                setButtonSuccess(this);
            }, 500);
        });
    }
}

// Initialize download functionality
document.addEventListener('DOMContentLoaded', function() {
    initDownloadCV();
});

// Portfolio functionality
function initPortfolio() {
    initPortfolioFilter();
    initPortfolioModal();
    initLoadMoreProjects();
}

// Portfolio filter functionality
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.classList.add('fade-in');
                } else {
                    item.classList.add('hidden');
                    item.classList.remove('fade-in');
                }
            });
        });
    });
}

// Portfolio modal functionality
function initPortfolioModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const viewButtons = document.querySelectorAll('.view-btn');
    if (!modal || !modalClose) return; // Guard if modal is not present
    
    // Project data
    const projectData = {
        'telegram-azkar-bot': {
            title: 'بوت منبه الذكر الإسلامي',
            category: 'بوت تيليجرام',
            description: 'بوت تيليجرام ذكي ومتطور يرسل أذكارًا إسلامية عشوائية، تنبيهات مواقيت الصلاة، تلاوات قرآنية، ومحتوى إيماني يومي للمستخدمين في المجموعات والمحادثات الخاصة. يساعد المسلمين على المواظبة على الذكر والعبادة اليومية.',
            image: 'assets/images/projects/telegram-azkar-bot.svg',
            features: [
                'إرسال أذكار إسلامية عشوائية في أوقات محددة',
                'تنبيهات مواقيت الصلاة حسب المنطقة الجغرافية',
                'مكتبة شاملة من التلاوات القرآنية والأدعية',
                'محتوى إيماني يومي ومحاضرات دينية',
                'نظام تذكيرات ذكي قابل للتخصيص',
                'دعم المجموعات والمحادثات الخاصة',
                'واجهة سهلة الاستخدام باللغة العربية',
                'إحصائيات تفاعل المستخدمين'
            ],
            tech: ['Python', 'Telegram Bot API', 'SQLite', 'Prayer Times API', 'Quran API'],
            date: 'أغسطس 2025',
            duration: '4 أشهر',
            teamSize: '1 مطور',
            liveLink: 'https://t.me/mouslim_alarm_bot',
            githubLink: 'https://github.com/Mavdii/Azkarbot'
        }
    };
    
    // Open modal
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                populateModal(project);
                openModal();
            }
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function populateModal(project) {
        document.getElementById('modalProjectTitle').textContent = project.title;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalImage').alt = project.title;
        document.getElementById('modalDate').textContent = project.date;
        document.getElementById('modalDuration').textContent = project.duration;
        document.getElementById('modalTeamSize').textContent = project.teamSize;
        
        // Populate features
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Populate tech tags
        const techTags = document.getElementById('modalTechTags');
        techTags.innerHTML = '';
        project.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            techTags.appendChild(tag);
        });
        
        // Update links
        document.getElementById('modalLiveLink').href = project.liveLink;
        document.getElementById('modalGithubLink').href = project.githubLink;
    }
    
    function openModal() {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        const firstFocusable = modal.querySelector('.modal-close');
        firstFocusable.focus();
    }
    
    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

// Load more projects functionality
function initLoadMoreProjects() {
    const loadMoreBtn = document.getElementById('loadMoreProjects');
    let isLoading = false;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            if (isLoading) return;
            
            isLoading = true;
            this.classList.add('loading');
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
            
            // Simulate loading more projects
            setTimeout(() => {
                // Here you would typically load more projects from an API
                this.classList.remove('loading');
                this.innerHTML = '<i class="fas fa-check"></i> تم تحميل المزيد';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-plus"></i> عرض المزيد من المشاريع';
                    isLoading = false;
                }, 2000);
            }, 1500);
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initPortfolio();
});

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const charCount = document.getElementById('charCount');
    const messageTextarea = document.getElementById('message');
    
    if (!form) return;
    
    // Character counter for message textarea
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;
            
            if (count > 1000) {
                charCount.style.color = '#e74c3c';
                this.classList.add('error');
            } else {
                charCount.style.color = '';
                this.classList.remove('error');
            }
        });
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Reset form
    const resetBtn = form.querySelector('.reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            resetForm();
        });
    }
    
    function validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        const errorElement = document.getElementById(fieldName + 'Error');
        
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'هذا الحقل مطلوب';
        }
        
        // Specific field validations
        switch (fieldName) {
            case 'name':
                if (value && value.length < 2) {
                    isValid = false;
                    errorMessage = 'الاسم يجب أن يكون أكثر من حرفين';
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'يرجى إدخال بريد إلكتروني صحيح';
                }
                break;
                
            case 'phone':
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                if (value && !phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'يرجى إدخال رقم هاتف صحيح';
                }
                break;
                
            case 'message':
                if (value && value.length < 10) {
                    isValid = false;
                    errorMessage = 'الرسالة يجب أن تكون أكثر من 10 أحرف';
                } else if (value && value.length > 1000) {
                    isValid = false;
                    errorMessage = 'الرسالة يجب أن تكون أقل من 1000 حرف';
                }
                break;
                
            case 'privacy':
                if (field.type === 'checkbox' && !field.checked) {
                    isValid = false;
                    errorMessage = 'يجب الموافقة على سياسة الخصوصية';
                }
                break;
        }
        
        // Update field appearance and error message
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('success');
            if (errorElement) {
                errorElement.classList.remove('show');
                errorElement.textContent = '';
            }
        } else {
            field.classList.remove('success');
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.classList.add('show');
            }
        }
        
        return isValid;
    }
    
    function validateForm() {
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }
    
    function submitForm() {
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Simulate success (you can add actual form submission logic here)
            showFormStatus('success', 'تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت ممكن.');
            resetForm();
            
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> إرسال الرسالة';
            
            // You can add actual form submission here:
            // submitToServer(data);
            
        }, 2000);
    }
    
    function showFormStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.textContent = message;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
            formStatus.textContent = '';
        }, 5000);
    }
    
    function resetForm() {
        form.reset();
        
        // Reset field states
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
        });
        
        // Reset error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.classList.remove('show');
            error.textContent = '';
        });
        
        // Reset character counter
        if (charCount) {
            charCount.textContent = '0';
            charCount.style.color = '';
        }
        
        // Hide form status
        formStatus.className = 'form-status';
        formStatus.textContent = '';
    }
}

// Social links tracking
function initSocialTracking() {
    const socialLinks = document.querySelectorAll('.social-link, .contact-link[href^="mailto"], .contact-link[href^="tel"], .contact-link[href^="https://wa.me"]');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.classList.contains('github') ? 'GitHub' :
                           this.classList.contains('telegram') ? 'Telegram' :
                           this.classList.contains('instagram') ? 'Instagram' :
                           this.classList.contains('linkedin') ? 'LinkedIn' :
                           this.href.includes('mailto') ? 'Email' :
                           this.href.includes('tel') ? 'Phone' :
                           this.href.includes('wa.me') ? 'WhatsApp' : 'Unknown';
            
            console.log(`Social link clicked: ${platform}`);
            // Add analytics tracking here if needed
        });
    });
}

// Contact info animations
function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-info-item');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Initialize contact functionality
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initSocialTracking();
    initContactAnimations();
});

// Particles animation for hero section
function initParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: var(--color-accent);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.1};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
        }
        .hero-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }
    `;
    document.head.appendChild(style);
}

// Advanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animations for different elements
                if (entry.target.classList.contains('portfolio-item')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    entry.target.style.animationDelay = delay + 'ms';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.portfolio-item, .skill-item, .contact-info-item, .about-timeline .timeline-item');
    animateElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
    
    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        .portfolio-item.animate-element {
            transform: translateY(30px) scale(0.9);
        }
        .portfolio-item.animate-element.animate-in {
            transform: translateY(0) scale(1);
        }
    `;
    document.head.appendChild(style);
}

// Enhanced typing effect with multiple texts
function initAdvancedTyping() {
    const typingElement = document.querySelector('[data-typing="true"]');
    if (!typingElement) return;
    
    const texts = [
        'مطور ويب وبوتات ديسكورد وتيليجرام محترف',
        'متخصص في بناء مواقع عصرية وحلول ذكية',
        'أحول الأفكار إلى واقع رقمي يلهم ويفيد'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing effect after delay
    setTimeout(typeText, 2000);
}

// Smooth page transitions
function initPageTransitions() {
    // Add loading overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-primary);
        z-index: 10000;
        opacity: 1;
        transition: opacity 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-white);
        font-size: 1.2rem;
    `;
    overlay.innerHTML = '<div>مرحباً بك في موقع عمر...</div>';
    document.body.appendChild(overlay);
    
    // Hide overlay after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }, 1000);
    });
}

// Initialize advanced features
document.addEventListener('DOMContentLoaded', function() {
    initAdvancedTyping();
    initPageTransitions();
});

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
        z-index: 9998;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', initScrollProgress);