// SecurityQ Portfolio Utilities
(function () {
  // Render email & reduce scraper harvesting
  const u = "contact", d = "securityq.org";
  const e = `${u}@${d}`;

  const emailSpan = document.getElementById("email");
  if (emailSpan) emailSpan.innerHTML = `<strong>${e}</strong>`;

  const emailLink = document.getElementById("emailLink");
  if (emailLink) emailLink.href = `mailto:${e}?subject=Hello%20SecurityQ`;

  // Dynamic year in footer
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
