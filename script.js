document.querySelectorAll('h2').forEach(sectionHeader => {
    sectionHeader.addEventListener('click', function() {
        let sectionContent = this.nextElementSibling;
        if (sectionContent.style.display === "none" || sectionContent.style.display === "") {
            sectionContent.style.display = "block";
        } else {
            sectionContent.style.display = "none";
        }
    });
});
