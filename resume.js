function updateResume() {
    document.getElementById("preview-name").innerText = 
        document.getElementById("firstName").value + " " + document.getElementById("lastName").value;

    document.getElementById("preview-jobTitle").innerText = 
        document.getElementById("jobTitle").value;

    document.getElementById("preview-phone").innerText = "Phone: " + 
        document.getElementById("phone").value;

    document.getElementById("preview-email").innerText = "Email: " + 
        document.getElementById("email").value;

    document.getElementById("preview-address").innerText = "Address: " + 
        document.getElementById("address").value;

    document.getElementById("preview-summary").innerText = 
        document.getElementById("summary").value;

    updateList("preview-experience", document.getElementById("experience").value);
    updateList("preview-education", document.getElementById("education").value);
    updateList("preview-certificates", document.getElementById("certificates").value);
    updateList("preview-skills", document.getElementById("skills").value);
}

// Convert comma-separated values into bullet points
function updateList(elementId, inputValue) {
    let listElement = document.getElementById(elementId);
    listElement.innerHTML = "";
    inputValue.split(",").forEach(item => {
        if (item.trim()) {
            let li = document.createElement("li");
            li.innerText = item.trim();
            listElement.appendChild(li);
        }
    });
}

function previewPhoto() {
    const file = document.getElementById("photoInput").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById("profile-pic").style.backgroundImage = `url(${event.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

function downloadPDF() {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save("resume.pdf");
}
