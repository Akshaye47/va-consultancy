const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector(".lead-form");
const footer = document.querySelector(".site-footer");

const socialAccounts = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/va-consultants",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.98H3.8V20h3.14V8.98ZM7.2 5.58c0-.98-.79-1.78-1.82-1.78s-1.82.8-1.82 1.78.79 1.78 1.82 1.78 1.82-.8 1.82-1.78ZM20.44 20v-6.08c0-3.02-1.61-4.42-3.76-4.42-1.73 0-2.51.95-2.94 1.62V8.98h-3.01V20h3.14v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h2.73Z"/></svg>',
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vaconsultants",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2.8h8.4a5 5 0 0 1 5 5v8.4a5 5 0 0 1-5 5H7.8a5 5 0 0 1-5-5V7.8a5 5 0 0 1 5-5Zm0 2A3 3 0 0 0 4.8 7.8v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3V7.8a3 3 0 0 0-3-3H7.8Zm4.2 3.1a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm4.35-2.7a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"/></svg>',
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/vaconsultants",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.1 8.2V6.55c0-.8.53-.99.9-.99h2.29V2.03L14.14 2c-3.5 0-4.3 2.62-4.3 4.3v1.9H7.08v3.64h2.76V22h4.26V11.84h2.87l.38-3.64H14.1Z"/></svg>',
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/61000000000",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2.2A9.73 9.73 0 0 0 3.7 16.96L2.55 21.2l4.34-1.14a9.7 9.7 0 0 0 5.15 1.48h.01a9.67 9.67 0 1 0-.01-19.34Zm.01 17.7a8.08 8.08 0 0 1-4.12-1.13l-.29-.17-2.57.68.68-2.51-.19-.3a8.1 8.1 0 1 1 6.49 3.43Zm4.44-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>',
  },
];

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-active");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-active");
    document.body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Request received";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 2200);
  });
}

if (footer && !footer.querySelector(".social-links")) {
  const socialLinks = document.createElement("div");
  socialLinks.className = "social-links";
  socialLinks.setAttribute("aria-label", "Social media links");
  socialLinks.innerHTML = socialAccounts
    .map(
      (account) =>
        `<a class="social-link" href="${account.url}" target="_blank" rel="noopener noreferrer" aria-label="${account.name}">${account.icon}<span>${account.name}</span></a>`,
    )
    .join("");
  footer.appendChild(socialLinks);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
