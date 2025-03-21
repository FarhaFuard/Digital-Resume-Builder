function generateResume() {
    document.getElementById("preview-name").textContent = document.getElementById("name").value || "Your Name";
    document.getElementById("preview-email").textContent = document.getElementById("email").value || "Your Email";
    document.getElementById("preview-phone").textContent = document.getElementById("phone").value || "Your Phone";
    document.getElementById("preview-education").textContent = document.getElementById("education").value || "Your Education";
    document.getElementById("preview-experience").textContent = document.getElementById("experience").value || "Your Experience";
    document.getElementById("preview-skills").textContent = document.getElementById("skills").value || "Your Skills";
}

function downloadPDF() {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save("resume.pdf");
}
