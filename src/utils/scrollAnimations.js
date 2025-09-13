// Scroll-triggered animations utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Parallax effect for hero section
export const initParallaxEffect = () => {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (heroSection) {
      heroSection.style.transform = `translateY(${rate}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Typing effect for hero text
export const initTypingEffect = (element, text, speed = 100) => {
  if (!element) return;
  
  let i = 0;
  element.innerHTML = '';
  
  const typeWriter = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  
  typeWriter();
};

// Counter animation for stats
export const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + suffix;
          }
        };
        
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach((counter) => observer.observe(counter));
};

// Mouse parallax effect
export const initMouseParallax = () => {
  const elements = document.querySelectorAll('.glass-card');
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;
    
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < innerHeight && rect.bottom > 0;
      
      if (isInView) {
        element.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  return () => document.removeEventListener('mousemove', handleMouseMove);
};

// Initialize all animations
export const initAllAnimations = () => {
  const scrollObserver = initScrollAnimations();
  const parallaxCleanup = initParallaxEffect();
  const mouseParallaxCleanup = initMouseParallax();
  animateCounters();
  
  return () => {
    scrollObserver.disconnect();
    parallaxCleanup();
    mouseParallaxCleanup();
  };
};
