// ===== VEGETABLE DATA =====
const vegetables = [
  { name: "Potato", price: 25, unit: "kg", image: "images/potato.jpg" },
  { name: "Onion", price: 30, unit: "kg", image: "images/onion.jpg" },
  { name: "Tomato", price: 40, unit: "kg", image: "images/tomato.jpg" },
  { name: "Cauliflower", price: 35, unit: "piece", image: "images/cauliflower.jpg" },
  { name: "Spinach", price: 20, unit: "bundle", image: "images/spinach.jpg" },
  { name: "Brinjal", price: 30, unit: "kg", image: "images/brinjal.jpg" },
  { name: "Cabbage", price: 25, unit: "piece", image: "images/cabbage.jpg" },
  { name: "Ladyfinger", price: 40, unit: "kg", image: "images/ladyfinger.jpg" },
  { name: "Green Chilli", price: 60, unit: "kg", image: "images/greenchilli.jpg" },
  { name: "Carrot", price: 45, unit: "kg", image: "images/carrot.jpg" },
];

const WHATSAPP_NUMBER = "916207823585";

// ===== RENDER VEGETABLE CARDS =====
function renderVegetables() {
  var grid = document.getElementById("vegGrid");
  if (!grid) return;

  grid.innerHTML = vegetables
    .map(function (veg) {
      var message = encodeURIComponent(
        "Hi, I want to order " + veg.name + " from Freshta."
      );
      var waLink =
        "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message;

      return (
        '<div class="veg-card fade-in">' +
        '  <div class="veg-card-img">' +
        '    <img src="' + veg.image + '" alt="Fresh ' + veg.name + '" loading="lazy" />' +
        "  </div>" +
        '  <div class="veg-card-body">' +
        "    <h4>" + veg.name + "</h4>" +
        '    <div class="price">' +
        "      &#8377;" + veg.price +
        "      <span> / " + veg.unit + "</span>" +
        "    </div>" +
        '    <a href="' + waLink + '" target="_blank" rel="noopener" class="btn-order">' +
        '      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">' +
        '        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>' +
        '        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.115 1.519 5.845L.058 23.678a.5.5 0 00.612.612l5.834-1.46A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.382-1.572l-.386-.232-3.462.867.884-3.462-.232-.386A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>' +
        "      </svg>" +
        "      Order on WhatsApp" +
        "    </a>" +
        "  </div>" +
        "</div>"
      );
    })
    .join("");
}

// ===== STICKY NAVBAR SHADOW =====
function initNavbar() {
  var navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ===== HAMBURGER TOGGLE =====
function initHamburger() {
  var hamburger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobileNav");
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("open");
    document.body.style.overflow = mobileNav.classList.contains("open")
      ? "hidden"
      : "";
  });
}

function closeMobileNav() {
  var hamburger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobileNav");
  if (hamburger) hamburger.classList.remove("active");
  if (mobileNav) mobileNav.classList.remove("open");
  document.body.style.overflow = "";
}

// ===== SCROLL FADE-IN ANIMATION =====
function initScrollAnimations() {
  var elements = document.querySelectorAll(".fade-in");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", function () {
  renderVegetables();
  initNavbar();
  initHamburger();

  // Small delay so dynamically-created cards also get observed
  setTimeout(initScrollAnimations, 100);
});
