// Portfolio Application JavaScript
class PortfolioApp {
    constructor() {
        this.currentRoute = window.location.pathname || '/';
        this.currentRating = 0;
        this.testimonials = [];
        
        // Embedded data
        this.data = {
            videos: [
                {
                    "title": "How I Record My YouTube Videos Using Just a Laptop & Phone | Camo Studio + OBS Setup Guide",
                    "videoId": "IeAd14GScxc",
                    "url": "https://youtu.be/IeAd14GScxc?si=lK_yVur_UQf4Nuef"
                },
                {
                    "title": "Samsung Galaxy Note 20 Ultra 5G Review in 2025 🔥 Still Worth Buying After 5 Years?",
                    "videoId": "EvMzlex4OSL4oJUn",
                    "url": "https://youtu.be/Mfuamoq1ysg?si=EvMzlex4OSL4oJUn"
                },
                {
                    "title": "Must-Have Gadget for Everyone: SSD with Enclosure!",
                    "videoId": "oRHhBAfnZss",
                    "url": "https://youtu.be/oRHhBAfnZss"
                },
                {
                    "title": "Boult X1 vs Zebronics Duke 🎮 Which Is Worth Your Money?",
                    "videoId": "BsVoZKsakTg",
                    "url": "https://youtu.be/BsVoZKsakTg"
                },
                {
                    "title": "Top 5 Phones for Students in 2025 — Under ₹30,000!",
                    "videoId": "ROk7xE796BM",
                    "url": "https://youtu.be/ROk7xE796BM"
                },
                {
                    "title": "₹1,199 Zebronics Duke Review Budget King",
                    "videoId": "D6TCzD7PmnQ",
                    "url": "https://youtu.be/D6TCzD7PmnQ"
                }
            ],
            pricing: [
                {
                    "service": "Social Media Post Design",
                    "price": 249,
                    "currency": "INR"
                },
                {
                    "service": "Social Media Story Design",
                    "price": 199,
                    "currency": "INR"
                },
                {
                    "service": "Other Social Media Design (YouTube Cover, LinkedIn Cover, Facebook Cover)",
                    "price": 399,
                    "currency": "INR"
                },
                {
                    "service": "Instagram Carousel Design (4 Pages)",
                    "price": 799,
                    "currency": "INR"
                },
                {
                    "service": "Infographics Design (Standard A4 Size)",
                    "price": 599,
                    "currency": "INR"
                },
                {
                    "service": "Flyers / Poster Design (Standard A4 Size)",
                    "price": 699,
                    "currency": "INR"
                },
                {
                    "service": "Resume / CV Design (Standard A4 Size)",
                    "price": 699,
                    "currency": "INR"
                },
                {
                    "service": "E-Book Design (8 Pages)",
                    "price": 999,
                    "currency": "INR",
                    "note": "₹99 extra per additional page"
                },
                {
                    "service": "Short Reel (≤60s)",
                    "price": 300,
                    "currency": "INR"
                },
                {
                    "service": "Long Video (YouTube-length)",
                    "price": 1000,
                    "currency": "INR"
                }
            ],
            reviews: [
                {
                    "name": "Sarah Johnson",
                    "company": "TechStart Solutions",
                    "quote": "Numaan delivered exceptional social media designs that perfectly captured our brand essence. His attention to detail and creative vision exceeded our expectations.",
                    "rating": 5
                },
                {
                    "name": "Rajesh Kumar",
                    "company": "Local Restaurant Chain",
                    "quote": "Working with Numaan was a pleasure. He created stunning promotional materials that significantly increased our customer engagement.",
                    "rating": 5
                },
                {
                    "name": "Emily Chen",
                    "company": "Fashion Boutique",
                    "quote": "The Instagram carousel designs were absolutely beautiful. Numaan understood our aesthetic perfectly and delivered on time.",
                    "rating": 5
                },
                {
                    "name": "Ahmed Hassan",
                    "company": "Real Estate Agency",
                    "quote": "Professional, creative, and reliable. The flyers and business cards helped establish our brand identity effectively.",
                    "rating": 4
                }
            ],
            instagramProjects: [
                {
                    "id": 1,
                    "title": "Brand Identity Design",
                    "description": "Complete brand package with logo and guidelines",
                    "url": "https://www.instagram.com/p/DM1m28rToZD/"
                },
                {
                    "id": 2,
                    "title": "Social Media Campaign",
                    "description": "Multi-platform social media graphics",
                    "url": "https://www.instagram.com/p/DM1G2TlTx8m/"
                },
                {
                    "id": 3,
                    "title": "Product Advertisement",
                    "description": "Eye-catching product promotion design",
                    "url": "https://www.instagram.com/p/DL738xrTbQC/"
                },
                {
                    "id": 4,
                    "title": "Event Poster Series",
                    "description": "Creative poster designs for events",
                    "url": "https://www.instagram.com/p/DMLqYGRTciI/"
                },
                {
                    "id": 5,
                    "title": "Restaurant Menu Design",
                    "description": "Modern menu layout and design",
                    "url": "https://www.instagram.com/p/DMLqboZTQIw/"
                },
                {
                    "id": 6,
                    "title": "Travel Content Design",
                    "description": "Tourism and travel promotional materials",
                    "url": "https://www.instagram.com/p/DMsXkJiPq46/"
                }
            ]
        };
    }

    init() {
        console.log('Initializing Portfolio App...');
        this.loadInitialContent();
        this.setupEventListeners();
        this.setupRouting();
        this.setupHoverEffects();
        this.renderCurrentRoute();
        console.log('Portfolio App initialized successfully');
    }

    setupEventListeners() {
        // Navigation toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                navMenu.classList.toggle('active');
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu && !navToggle?.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }

        // Testimonial form
        const testimonialForm = document.getElementById('testimonialForm');
        if (testimonialForm) {
            testimonialForm.addEventListener('submit', (e) => this.handleTestimonialForm(e));
        }

        // Star rating
        this.setupStarRating();

        // Selective click handler - only prevent default for specific elements
        document.addEventListener('click', (e) => {
            // Handle route navigation (nav links and buttons)
            const routeLink = e.target.closest('[data-route]');
            if (routeLink) {
                e.preventDefault();
                const route = routeLink.getAttribute('data-route');
                console.log('Route link clicked:', route);
                this.navigateTo(route);
                return;
            }

            // Handle anchor links (same page scrolling) - only for links that start with #
            const anchorLink = e.target.closest('a[href^="#"]');
            if (anchorLink && !anchorLink.hasAttribute('data-route')) {
                e.preventDefault();
                const targetId = anchorLink.getAttribute('href').substring(1);
                this.scrollToElement(targetId);
                return;
            }

            // Let all other clicks work normally (including project cards and video cards)
            // Don't prevent default for external links, forms, etc.
        });
    }

    setupRouting() {
        // Handle browser back/forward
        window.addEventListener('popstate', () => {
            this.currentRoute = window.location.pathname || '/';
            this.renderCurrentRoute();
        });
    }

    navigateTo(route) {
        console.log('Navigating to:', route);
        
        if (route.includes('#')) {
            const [path, hash] = route.split('#');
            
            if (path && path !== '/' && path !== '') {
                // Navigate to different page first
                this.currentRoute = path;
                window.history.pushState(null, '', path);
                this.renderCurrentRoute();
                
                // Then scroll to section after a brief delay
                setTimeout(() => {
                    if (hash) {
                        this.scrollToElement(hash);
                    }
                }, 200);
            } else {
                // Same page, just scroll to section
                if (this.currentRoute !== '/') {
                    this.currentRoute = '/';
                    window.history.pushState(null, '', '/');
                    this.renderCurrentRoute();
                    setTimeout(() => {
                        if (hash) {
                            this.scrollToElement(hash);
                        }
                    }, 200);
                } else {
                    if (hash) {
                        this.scrollToElement(hash);
                    }
                }
            }
        } else {
            // Regular route navigation
            this.currentRoute = route;
            window.history.pushState(null, '', route);
            this.renderCurrentRoute();
        }

        // Close mobile menu
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }

    scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    renderCurrentRoute() {
        console.log('Rendering route:', this.currentRoute);
        
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.add('hidden');
        });

        // Show current page
        let targetPageId = 'homePage';
        
        switch (this.currentRoute) {
            case '/':
                targetPageId = 'homePage';
                break;
            case '/youtube':
                targetPageId = 'youtubePage';
                break;
            case '/pricing':
                targetPageId = 'pricingPage';
                break;
            case '/reviews':
                targetPageId = 'reviewsPage';
                break;
            default:
                targetPageId = 'homePage';
                break;
        }

        const targetPage = document.getElementById(targetPageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            console.log('Showing page:', targetPageId);
        } else {
            console.error('Target page not found:', targetPageId);
        }

        // Update navigation
        this.updateActiveNavLinks();
        
        // Scroll to top of new page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateActiveNavLinks() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const route = link.getAttribute('data-route');
            if (route === this.currentRoute || 
                (this.currentRoute === '/' && route && route.includes('/#'))) {
                link.classList.add('active');
            }
        });
    }

    loadInitialContent() {
        console.log('Loading initial content...');
        this.loadProjects();
        this.loadVideos();
        this.loadPricing();
        this.loadReviews();
        this.testimonials = [...this.data.reviews];
    }

    loadProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) {
            console.error('Projects grid not found');
            return;
        }

        projectsGrid.innerHTML = '';
        projectsGrid.className = 'projects-grid hover-group';

        this.data.instagramProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
        
        console.log('Projects loaded:', this.data.instagramProjects.length);
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card hoverable';
        card.style.cursor = 'pointer';
        
        // Add click handler for Instagram link - using direct event handler
        card.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Opening Instagram post:', project.url);
            window.open(project.url, '_blank', 'noopener,noreferrer');
        };

        const bgColors = ['var(--color-bg-1)', 'var(--color-bg-2)', 'var(--color-bg-3)', 'var(--color-bg-4)', 'var(--color-bg-5)', 'var(--color-bg-6)', 'var(--color-bg-7)', 'var(--color-bg-8)'];
        const bgColor = bgColors[index % bgColors.length];

        card.innerHTML = `
    <div class="project-image">
        <img src="images/projects/project${project.id}.jpg" 
             alt="${project.title}" 
             loading="lazy"
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjZjBmMGYwIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzk5OTk5OSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPgo='">
    </div>
    <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    </div>
`;
    return card;
    }

    loadVideos() {
        const videosGrid = document.getElementById('videosGrid');
        if (!videosGrid) return;

        videosGrid.innerHTML = '';
        videosGrid.className = 'videos-grid hover-group';

        this.data.videos.forEach(video => {
            const videoCard = this.createVideoCard(video);
            videosGrid.appendChild(videoCard);
        });
        
        console.log('Videos loaded:', this.data.videos.length);
    }

    createVideoCard(video) {
        const card = document.createElement('div');
        card.className = 'video-card hoverable';
        card.style.cursor = 'pointer';
        
        // Add click handler for YouTube link - using direct event handler
        card.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Opening YouTube video:', video.url);
            window.open(video.url, '_blank', 'noopener,noreferrer');
        };

        const thumbnailUrl = `https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`;
        const fallbackUrl = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;

        card.innerHTML = `
            <div class="video-thumbnail">
                <img src="${thumbnailUrl}" alt="${video.title}" onerror="this.src='${fallbackUrl}'; this.onerror=null;">
                <div class="play-icon">▶</div>
            </div>
            <div class="video-content">
                <h3 class="video-title">${video.title}</h3>
            </div>
        `;

        return card;
    }

    loadPricing() {
        const pricingGrid = document.getElementById('pricingGrid');
        if (!pricingGrid) return;

        pricingGrid.innerHTML = '';

        this.data.pricing.forEach(item => {
            const pricingCard = this.createPricingCard(item);
            pricingGrid.appendChild(pricingCard);
        });
        
        console.log('Pricing loaded:', this.data.pricing.length);
    }

    createPricingCard(item) {
        const card = document.createElement('div');
        card.className = 'pricing-card';

        card.innerHTML = `
            <div class="service-name">${item.service}</div>
            <div class="price">₹${item.price.toLocaleString()}</div>
            ${item.note ? `<div class="price-note">${item.note}</div>` : ''}
        `;

        return card;
    }

    loadReviews() {
        this.renderTestimonials();
    }

    renderTestimonials() {
        const testimonialsContainer = document.getElementById('testimonials');
        if (!testimonialsContainer) return;

        testimonialsContainer.innerHTML = '';

        this.testimonials.forEach(review => {
            const testimonial = this.createTestimonialCard(review);
            testimonialsContainer.appendChild(testimonial);
        });
        
        console.log('Testimonials loaded:', this.testimonials.length);
    }

    createTestimonialCard(review) {
        const card = document.createElement('div');
        card.className = 'testimonial';

        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        card.innerHTML = `
            <div class="testimonial-header">
                <div class="client-info">
                    <h4>${review.name}</h4>
                    <p>${review.company}</p>
                </div>
                <div class="rating">${stars}</div>
            </div>
            <blockquote class="testimonial-quote">"${review.quote}"</blockquote>
        `;

        return card;
    }

    setupStarRating() {
        const stars = document.querySelectorAll('#starRating .star');
        stars.forEach(star => {
            star.addEventListener('click', (e) => {
                e.stopPropagation();
                const rating = parseInt(star.getAttribute('data-rating'));
                this.currentRating = rating;
                this.updateStarDisplay(rating);
            });

            star.addEventListener('mouseover', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                this.updateStarDisplay(rating);
            });
        });

        const starContainer = document.getElementById('starRating');
        if (starContainer) {
            starContainer.addEventListener('mouseleave', () => {
                this.updateStarDisplay(this.currentRating);
            });
        }
    }

    updateStarDisplay(rating) {
        const stars = document.querySelectorAll('#starRating .star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    handleContactForm(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            message: document.getElementById('contactMessage').value
        };

        // Validate email
        if (!this.isValidEmail(formData.email)) {
            this.showFormStatus('error', 'Please enter a valid email address.');
            return;
        }

        // Simulate form submission
        this.showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
        e.target.reset();
    }

    handleTestimonialForm(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const formData = {
            name: document.getElementById('testName').value,
            company: document.getElementById('testCompany').value || 'Anonymous',
            quote: document.getElementById('testReview').value,
            rating: this.currentRating
        };

        if (this.currentRating === 0) {
            alert('Please select a rating');
            return;
        }

        // Add to testimonials
        this.testimonials.unshift(formData);
        this.renderTestimonials();

        // Reset form
        e.target.reset();
        this.currentRating = 0;
        this.updateStarDisplay(0);
        
        alert('Thank you for your testimonial!');
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFormStatus(type, message) {
        const statusDiv = document.getElementById('formStatus');
        if (!statusDiv) return;

        statusDiv.className = `form-status ${type}`;
        statusDiv.textContent = message;

        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'form-status';
        }, 5000);
    }

    setupHoverEffects() {
        // Set up hover groups for blur effects
        setTimeout(() => {
            const hoverGroups = document.querySelectorAll('.hover-group');
            
            hoverGroups.forEach(group => {
                const hoverables = group.querySelectorAll('.hoverable');
                
                hoverables.forEach(hoverable => {
                    hoverable.addEventListener('mouseenter', () => {
                        hoverables.forEach(item => {
                            if (item !== hoverable) {
                                item.style.filter = 'blur(3px)';
                                item.style.opacity = '0.7';
                            }
                        });
                        hoverable.style.filter = 'none';
                        hoverable.style.opacity = '1';
                        hoverable.style.transform = 'translateY(-8px) scale(1.02)';
                        hoverable.style.zIndex = '10';
                    });
                    
                    hoverable.addEventListener('mouseleave', () => {
                        hoverables.forEach(item => {
                            item.style.filter = 'none';
                            item.style.opacity = '1';
                            item.style.transform = 'none';
                            item.style.zIndex = 'auto';
                        });
                    });
                });
            });

            // Setup channel buttons hover effect
            const channelButtons = document.querySelectorAll('.channel-btn');
            if (channelButtons.length > 0) {
                const channelContainer = channelButtons[0].parentElement;
                channelContainer.classList.add('hover-group');
                channelButtons.forEach(btn => btn.classList.add('hoverable'));
            }
        }, 100);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    try {
        window.portfolioApp = new PortfolioApp();
        window.portfolioApp.init();
    } catch (error) {
        console.error('Error initializing portfolio app:', error);
    }
});

// Fallback initialization
window.addEventListener('load', () => {
    if (!window.portfolioApp) {
        console.log('Fallback initialization');
        window.portfolioApp = new PortfolioApp();
        window.portfolioApp.init();
    }
});