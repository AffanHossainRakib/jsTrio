// Shared header and footer components for jsTrio project

// Function to determine the current page for active navigation highlighting
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes("fortuneMsg")) return "fortune";
  if (path.includes("stopwatch")) return "stopwatch";
  if (path.includes("todoList")) return "todo";
  if (path.includes("index.html") || path.endsWith("/")) return "home";
  return "home";
}

// Function to get the correct path prefix based on current location
function getPathPrefix() {
  const path = window.location.pathname;
  // If we're in a subdirectory (pages/...), go up two levels
  if (path.includes("/pages/")) {
    return "../../";
  }
  // If we're at root
  return "./";
}

// Load Header Component
function loadHeader() {
  const currentPage = getCurrentPage();
  const pathPrefix = getPathPrefix();

  const headerHTML = `
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Navbar -->
        <div class="navbar bg-base-200 shadow-lg">
          <div class="flex-none lg:hidden">
            <label for="my-drawer" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div class="flex-1">
            <a href="${pathPrefix}index.html" class="btn btn-ghost text-xl">
              <i class="fas fa-code text-primary"></i>
              <span class="ml-2">jsTrio</span>
            </a>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal px-1">
              <li><a href="${pathPrefix}index.html" class="${
    currentPage === "home" ? "active" : ""
  }">
                <i class="fas fa-home"></i> Home
              </a></li>
              <li><a href="${pathPrefix}pages/fortuneMsg/fortuneMsg.html" class="${
    currentPage === "fortune" ? "active" : ""
  }">
                <i class="fas fa-star"></i> Fortune Message
              </a></li>
              <li><a href="${pathPrefix}pages/stopwatch/stopwatch.html" class="${
    currentPage === "stopwatch" ? "active" : ""
  }">
                <i class="fas fa-stopwatch"></i> Stopwatch
              </a></li>
              <li><a href="${pathPrefix}pages/todoList/todoList.html" class="${
    currentPage === "todo" ? "active" : ""
  }">
                <i class="fas fa-list-check"></i> To-Do List
              </a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Sidebar for mobile -->
      <div class="drawer-side z-50">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li class="mb-2">
            <a href="${pathPrefix}index.html" class="text-xl font-bold">
              <i class="fas fa-code text-primary"></i> jsTrio
            </a>
          </li>
          <div class="divider"></div>
          <li><a href="${pathPrefix}index.html" class="${
    currentPage === "home" ? "active" : ""
  }">
            <i class="fas fa-home"></i> Home
          </a></li>
          <li><a href="${pathPrefix}pages/fortuneMsg/fortuneMsg.html" class="${
    currentPage === "fortune" ? "active" : ""
  }">
            <i class="fas fa-star"></i> Fortune Message
          </a></li>
          <li><a href="${pathPrefix}pages/stopwatch/stopwatch.html" class="${
    currentPage === "stopwatch" ? "active" : ""
  }">
            <i class="fas fa-stopwatch"></i> Stopwatch
          </a></li>
          <li><a href="${pathPrefix}pages/todoList/todoList.html" class="${
    currentPage === "todo" ? "active" : ""
  }">
            <i class="fas fa-list-check"></i> To-Do List
          </a></li>
        </ul>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
}

// Load Footer Component
function loadFooter() {
  const footerHTML = `
       <footer
      class="footer footer-center p-10 bg-base-200 text-base-content mt-auto flex flex-col items-center justify-center"
    >
      <aside class="flex flex-col items-center justify-center">
        <i class="fas fa-code text-4xl text-primary"></i>
        <p class="font-bold text-lg text-center">
          jsTrio - JavaScript Mini Projects
        </p>
        <p class="text-center">
          Demonstrating DOM manipulation, event handling, and local storage
        </p>
        <p class="text-sm opacity-70 text-center">
          © ${new Date().getFullYear()} - Built with Vanilla JS, Tailwind CSS &
          DaisyUI
        </p>
      </aside>
      <nav class="flex justify-center">
        <div class="grid grid-flow-col gap-4">
          <a href="https://github.com/AffanHossainRakib/" target="_blank" class="link link-hover" title="GitHub">
            <i class="fa-brands fa-github text-2xl"></i>
          </a>
          <a href="https://facebook.com/AffanHossainRakib/" target="_blank" class="link link-hover" title="Twitter">
            <i class="fa-brands fa-facebook text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/affanhossainrakib/"
            target="_blank"
            class="link link-hover"
            title="LinkedIn"
          >
            <i class="fa-brands fa-linkedin text-2xl"></i>
          </a>
        </div>
      </nav>
    </footer>
    
    <!-- Scroll to Top Button -->
    <button id="scrollToTopBtn" class="btn btn-circle btn-primary fixed bottom-8 right-8 shadow-lg hidden z-50" title="Go to top">
      <i class="fas fa-arrow-up text-xl"></i>
    </button>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Initialize scroll to top functionality
  initScrollToTop();
}

// Scroll to Top functionality
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove("hidden");
    } else {
      scrollToTopBtn.classList.add("hidden");
    }
  });

  // Scroll to top when clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Initialize components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});
