document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            highlightActiveLink();
            setupMobileMenu();
        });

    // Load Footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});

function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("text-blue-400", "font-semibold");
        }
    });
}

function setupMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const openIcon = document.getElementById("mobile-menu-open");
    const closeIcon = document.getElementById("mobile-menu-close");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            const isHidden = menu.classList.toggle("hidden");
            if (openIcon && closeIcon) {
                if (isHidden) {
                    openIcon.classList.remove("hidden");
                    closeIcon.classList.add("hidden");
                } else {
                    openIcon.classList.add("hidden");
                    closeIcon.classList.remove("hidden");
                }
            }
        });

        // Close menu when a link is clicked
        const menuLinks = menu.querySelectorAll("a");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.add("hidden");
                if (openIcon && closeIcon) {
                    openIcon.classList.remove("hidden");
                    closeIcon.classList.add("hidden");
                }
            });
        });
    }
}
