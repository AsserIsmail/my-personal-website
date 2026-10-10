const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-text');
// Storage can be blocked in private browsing or local-file previews.
let storedTheme;
try {
  storedTheme = localStorage.getItem('portfolio-theme');
} catch (_) {
  storedTheme = null;
}
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function setTheme(theme) {
  root.dataset.theme = theme;
  themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#101412' : '#f3f5f2');
}

setTheme(['light', 'dark'].includes(storedTheme) ? storedTheme : preferredTheme);
themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch (_) {
    // The toggle still works when the browser cannot save the preference.
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

const portfolioBrand = document.querySelector('.brand');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const brandStages = ['name', 'initials', 'photo'];
let brandStage = 0;
let brandTimer;

function syncBrandAnimation() {
  window.clearInterval(brandTimer);
  // Reduced motion uses instant stage changes through CSS, not a frozen logo.
  if (document.hidden) return;
  brandTimer = window.setInterval(() => {
    brandStage = (brandStage + 1) % brandStages.length;
    portfolioBrand.dataset.stage = brandStages[brandStage];
  }, 4200);
}

syncBrandAnimation();
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
