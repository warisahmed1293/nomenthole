document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove "hidden" class from the selected section and hide others
            let selectedTab = this.getAttribute("data-tab");

            tabContents.forEach(content => {
                if (content.id === selectedTab) {
                    content.classList.remove("hidden");
                } else {
                    content.classList.add("hidden");
                }
            });
        });
    });
});
