document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-toggle");

    accordionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const contentId = button.getAttribute("aria-controls");
            const content = document.getElementById(contentId);

            if (!content) {
                return;
            }

            const isExpanded = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isExpanded));
            content.hidden = isExpanded;
        });
    });

    // Light/Dark Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        // Restore the previously selected theme
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-theme");
            themeToggle.textContent = "Dark Mode";
        }

        // Switch themes when the button is clicked
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-theme");

            const isLight = document.body.classList.contains("light-theme");

            themeToggle.textContent = isLight ? "Dark Mode" : "Light Mode";

            // Save the selected theme
            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );
        });
    }
});