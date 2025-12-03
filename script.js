 
    // Floating particles (background)
    function createParticles() {
      const container = document.getElementById('particles');
      const count = 30;
      for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'particle';
        const size = Math.random() * 5 + 2;
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.animationDelay = (Math.random() * 20).toFixed(2) + 's';
        el.style.animationDuration = (Math.random() * 12 + 14).toFixed(2) + 's';
        container.appendChild(el);
      }
    }

    // Smooth scroll + active link
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    function updateActiveLink() {
      const scrollPos = window.scrollY;
      const offset = 120; // navbar height margin
      document.querySelectorAll('section').forEach(sec => {
        const top = sec.offsetTop - offset;
        const bottom = top + sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Contact form basic handler
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();

      alert(`Thank you, ${name}! I will get back to you at ${email} soon.`);
      form.reset();
    });

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Init
    createParticles();
    updateActiveLink();
  