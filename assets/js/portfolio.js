const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-text');
const storedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function setTheme(theme) {
  root.dataset.theme = theme;
  themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#101412' : '#f3f5f2');
}

setTheme(storedTheme || preferredTheme);
themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', nextTheme);
  setTheme(nextTheme);
});

document.getElementById('year').textContent = new Date().getFullYear();

const portfolioBrand = document.querySelector('.brand');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const brandStages = ['initials', 'name', 'photo'];
let brandStage = 0;
let brandTimer;

function syncBrandAnimation() {
  window.clearInterval(brandTimer);
  if (reducedMotion.matches) {
    brandStage = 0;
    portfolioBrand.dataset.stage = brandStages[brandStage];
    return;
  }
  if (document.hidden) return;
  brandTimer = window.setInterval(() => {
    brandStage = (brandStage + 1) % brandStages.length;
    portfolioBrand.dataset.stage = brandStages[brandStage];
  }, 4200);
}

syncBrandAnimation();
reducedMotion.addEventListener('change', syncBrandAnimation);
document.addEventListener('visibilitychange', syncBrandAnimation);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}
