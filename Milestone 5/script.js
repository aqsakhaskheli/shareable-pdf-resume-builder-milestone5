// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var fathersname = document.getElementById('fathersname').value;
    var surname = document.getElementById('surname').value;
    var dateofbirth = document.getElementById('dateofbirth').value;
    var nic = document.getElementById('nic').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var status = document.getElementById('status').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var othereducation = document.getElementById('othereducation').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2>Resume</h2>\n<h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Father's Name:</b><span contenteditable =\"true\">").concat(fathersname, "</span></p>\n    <p><b>Surname:</b><span contenteditable =\"true\">").concat(surname, "</span></p>\n    <p><b>Date of Birth:</b><span contenteditable =\"true\">").concat(dateofbirth, "</span></p>\n    <p><b>CNIC:</b><span contenteditable =\"true\">").concat(nic, "</span></p>\n    <p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>Phone no:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable =\"true\">").concat(address, "</span></p>\n    <p><b>Marital Status:</b><span contenteditable =\"true\">").concat(status, "</span></p>\n    \n    <h3>Objective:</h3>\n    <p contenteditable=\"true\">").concat(objective, "</p>\n\n    <h3>Qualification:</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Others Qualification:</h3>\n    <p contenteditable=\"true\">").concat(othereducation, "</p>\n\n    <h3>Experinece:</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('fathersname').value =
                resumeData.fathersname;
            document.getElementById('surname').value =
                resumeData.surname;
            document.getElementById('dateofbirth').value =
                resumeData.dateofbirth;
            document.getElementById('nic').value =
                resumeData.nic;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('address').value =
                resumeData.address;
            document.getElementById('status').value =
                resumeData.status;
            document.getElementById('objective').value =
                resumeData.objective(document.getElementById('education')).value =
                    resumeData.education;
            document.getElementById('othereducation').value =
                resumeData.othereducation(document.getElementById('experience')).value
                    = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
