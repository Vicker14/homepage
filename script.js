const navToggle = document.getElementById("icon");
const navItems = document.getElementById("menu")

navToggle.addEventListener("click", () => {
    if (navItems.style.display === "flex") {
        navItems.style.display = "none";
    } else {
        navItems.style.display = "flex";
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 500) {
        navItems.style.display = "";
    }
})