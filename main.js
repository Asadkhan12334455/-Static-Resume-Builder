// Function to toggle the visibility of the Skills section
function toggleSkills() {
    // Get the skills list element by its ID
    var skillsList = document.getElementById("skills-list");
    // Check if the skills list element exists, and toggle display style
    if (skillsList) {
        skillsList.style.display = skillsList.style.display === "none" ? "block" : "none";
    }
}
toggleSkills();
