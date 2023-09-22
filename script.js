let list = document.getElementById("list");
let menu = document.getElementById("menu");

// Initialize the list's display property to "none"
list.style.display = "none";

menu.addEventListener("click", () => {
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
});
