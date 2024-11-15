// JavaScript for handling Register and Login buttons

// Event listener for "Register / Login" buttons for students and teachers
document.querySelectorAll('.register-btn').forEach(button => {
    button.addEventListener('click', function () {
        const userType = this.getAttribute('data-user');
        
        // Redirect based on user type
        if (userType === 'student') {
            window.location.href = 'student/student-register.html'; // Redirect to student registration page
        } else if (userType === 'teacher') {
            window.location.href = 'teacher/teacher-register.html'; // Redirect to teacher registration page
        }
    });
});

document.querySelectorAll('.login-btn').forEach(button => {
    button.addEventListener('click', function () {
        const userType = this.getAttribute('data-user');
        
        // Redirect based on user type
        if (userType === 'student') {
            window.location.href = 'student/student-login.html'; // Redirect to student login page
        } else if (userType === 'teacher') {
            window.location.href = 'teacher/teacher-login.html'; // Redirect to teacher login page
        }
    });
});

// Optional: Event listener for "Read More" button
const readMoreButton = document.querySelector('.read-more-btn');
readMoreButton.addEventListener('click', function () {
    window.location.href = 'read-more.html';
});


// JavaScript to redirect About link to read-more.html
document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent the default #about behavior
    window.location.href = "read-more.html";  // Redirect to read-more.html
});
