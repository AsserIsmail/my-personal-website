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
const brandStages = ['name', 'initials', 'photo'];
let brandStage = 0;
const greeting = document.getElementById('greeting');
const greetings = [
  { text: 'Hi', lang: 'en' },
  { text: 'مرحبًا', lang: 'ar' },
  { text: 'Bonjour', lang: 'fr' },
  { text: 'Hola', lang: 'es' },
  { text: 'Ciao', lang: 'it' },
  { text: 'Hallo', lang: 'de' },
  { text: 'Olá', lang: 'pt' },
  { text: 'こんにちは', lang: 'ja' },
  { text: '你好', lang: 'zh' },
];
let greetingIndex = 0;
let cycleTimer;
let greetingAnimations = [];

function advanceGreeting() {
  const outgoing = greeting.lastElementChild;
  greetingIndex = (greetingIndex + 1) % greetings.length;
  const incoming = document.createElement('bdi');
  incoming.className = 'greeting-word';
  incoming.lang = greetings[greetingIndex].lang;
  incoming.textContent = greetings[greetingIndex].text + ',';
  greeting.appendChild(incoming);
  const timing = { duration: 600, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'both' };
  const leave = outgoing.animate([
    { opacity: 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(-35%)' },
  ], timing);
  const enter = incoming.animate([
    { opacity: 0, transform: 'translateY(35%)' },
    { opacity: 1, transform: 'translateY(0)' },
  ], timing);
  greetingAnimations = [leave, enter];
  Promise.all(greetingAnimations.map(animation => animation.finished)).then(() => {
    outgoing.remove();
    leave.cancel();
    enter.cancel();
    greetingAnimations = [];
  }).catch(() => {});
}

function syncPortfolioAnimations() {
  window.clearInterval(cycleTimer);
  greetingAnimations.forEach(animation => animation.finish());
  if (document.hidden) return;
  cycleTimer = window.setInterval(() => {
    // A shared tick keeps the logo and greeting on the same timeline.
    brandStage = (brandStage + 1) % brandStages.length;
    portfolioBrand.dataset.stage = brandStages[brandStage];
    advanceGreeting();
  }, 3000);
}

syncPortfolioAnimations();
document.addEventListener('visibilitychange', syncPortfolioAnimations);

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
