// WISCr site — small progressive-enhancement helpers.
// No frameworks, no build step: this runs as-is on GitHub Pages.

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    // close menu when a link is clicked (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Mark current page in nav via aria-current
  var here = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Countdown to the event (reads target date from data-target on #countdown)
  var countdownEl = document.getElementById("countdown");
  if (countdownEl && countdownEl.dataset.target) {
    var target = new Date(countdownEl.dataset.target).getTime();
    var daysEl = countdownEl.querySelector('[data-unit="days"]');
    var hoursEl = countdownEl.querySelector('[data-unit="hours"]');
    var minsEl = countdownEl.querySelector('[data-unit="minutes"]');
    var secsEl = countdownEl.querySelector('[data-unit="seconds"]');
    var labelEl = document.querySelector(".countdown-label");
    var pad = function (n) { return String(n).length < 2 ? "0" + n : String(n); };

    var tick = function () {
      var diff = target - Date.now();
      if (diff <= 0) {
        if (daysEl) daysEl.textContent = "0";
        if (hoursEl) hoursEl.textContent = "00";
        if (minsEl) minsEl.textContent = "00";
        if (secsEl) secsEl.textContent = "00";
        if (labelEl) labelEl.textContent = "WISCr 2026 is underway!";
        clearInterval(timer);
        return;
      }
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);
      if (daysEl) daysEl.textContent = String(d);
      if (hoursEl) hoursEl.textContent = pad(h);
      if (minsEl) minsEl.textContent = pad(m);
      if (secsEl) secsEl.textContent = pad(s);
    };

    tick();
    var timer = setInterval(tick, 1000);
  }
})();
