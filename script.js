const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // ====== HEADER SCROLL EFFECT ======
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // ====== HERO SLIDER ======
        const heroSliderContainer = document.getElementById('sliderContainer');
        const heroSliderDots = document.querySelectorAll('#sliderNav .slider-dot');
        let heroCurrentSlide = 0;
        let heroSlideInterval;

        function showHeroSlide(index) {
            heroCurrentSlide = index;
            heroSliderContainer.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
            
            heroSliderDots.forEach(dot => dot.classList.remove('active'));
            heroSliderDots[heroCurrentSlide].classList.add('active');
        }

        function nextHeroSlide() {
            heroCurrentSlide = (heroCurrentSlide + 1) % heroSliderDots.length;
            showHeroSlide(heroCurrentSlide);
        }

        function startHeroSlider() {
            heroSlideInterval = setInterval(nextHeroSlide, 2500);
        }

        heroSliderDots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(heroSlideInterval);
                showHeroSlide(parseInt(dot.dataset.index));
                startHeroSlider();
            });
        });

        startHeroSlider();

        heroSliderContainer.addEventListener('mouseenter', () => {
            clearInterval(heroSlideInterval);
        });

        heroSliderContainer.addEventListener('mouseleave', startHeroSlider);

        // ====== TESTIMONIAL SLIDER ======
        const testimonialSlider = document.getElementById('testimonialSlider');
        const testimonialDots = document.querySelectorAll('.testimonials .slider-btn');
        let testimonialCurrentSlide = 0;
        let testimonialSlideInterval;

        function showTestimonialSlide(index) {
            testimonialCurrentSlide = index;
            testimonialSlider.style.transform = `translateX(-${testimonialCurrentSlide * 100}%)`;
            
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            testimonialDots[testimonialCurrentSlide].classList.add('active');
        }

        function nextTestimonialSlide() {
            testimonialCurrentSlide = (testimonialCurrentSlide + 1) % testimonialDots.length;
            showTestimonialSlide(testimonialCurrentSlide);
        }

        function startTestimonialSlider() {
            testimonialSlideInterval = setInterval(nextTestimonialSlide, 3000);
        }

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(testimonialSlideInterval);
                showTestimonialSlide(parseInt(dot.dataset.index));
                startTestimonialSlider();
            });
        });

        startTestimonialSlider();

        // ====== SCROLL ANIMATIONS ======
        function animateOnScroll() {
            const elements = document.querySelectorAll('.category-card, .product-card');
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const animationPoint = windowHeight * 0.8;
                
                if (elementPosition < animationPoint) {
                    element.classList.add('animated');
                }
            });
        }
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);