const button = document.getElementById('alertButton');

button.addEventListener('click', () => {
    alert('Hello! You just interacted with your first script.');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition - 80; // -80 for navbar offset
            let startTime = null;

            // Adjust this number for speed: higher = slower
            const duration = 15000; 

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // This "Ease" function makes the start and end of the scroll feel natural
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});
const observerOptions = {
    threshold: 0.15 // Trigger when 15% of the card is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: Stop observing after it reveals once
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Target all elements with the .reveal class
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX * -0.05) / 8;
    const moveY = (e.clientY * -0.05) / 8;
    
    document.body.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
});
