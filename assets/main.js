// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Contact form demo submit
const form = document.getElementById('inquiryForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const msg = document.getElementById('successMsg');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
    setTimeout(() => {
      form.style.display = 'none';
      if (msg) { msg.style.display = 'block'; }
    }, 1500);
  });
}
