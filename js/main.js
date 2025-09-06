// Hamburger menu functionality
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

function toggleNav() {
  const isOpen = nav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
}

navToggle.addEventListener('click', toggleNav);

// Auto-close nav when clicking outside (mobile only)
document.addEventListener('click', function(e) {
  if (!nav.contains(e.target) && !navToggle.contains(e.target) && nav.classList.contains('open')) {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Keyword highlighting
const keywords = [
  "newsrooms", "newsroom", "reporting", "defense", "politics", "sports",
  "elections", "media", "journalist", "startup", "builder",
  "stories", "inform", "engage", "imagine", "producer", "production", "design-thinking", "storytelling"
];

function highlightKeywords(paragraphId) {
  const para = document.getElementById(paragraphId);
  if (!para) return;
  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      keywords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        text = text.replace(regex, match =>
          `<span class="highlight-keyword">${match}</span>`
        );
      });
      if (text !== node.textContent) {
        const span = document.createElement('span');
        span.innerHTML = text;
        node.replaceWith(...span.childNodes);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
      Array.from(node.childNodes).forEach(walk);
    }
  }
  walk(para);
}

highlightKeywords("para1");
highlightKeywords("para2");
