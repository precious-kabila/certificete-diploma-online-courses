// Sample course data
const courses = [
    { title: "Web Development Fundamentals", description: "Learn the basics of HTML, CSS, and JavaScript." },
    { title: "Digital Marketing Certificate", description: "Master the art of online marketing and SEO." },
    { title: "Data Science Essentials", description: "Introduction to data analysis and machine learning." },
    { title: "Business Administration Diploma", description: "Comprehensive course on business management." },
    { title: "Graphic Design Certificate", description: "Develop skills in visual communication and design software." }
];

// Function to generate course items
function generateCourseItems(courseList) {
    const courseListElement = document.querySelector('.course-list');
    courseListElement.innerHTML = '';

    courseList.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button onclick="window.location.href='course-details.html'">Learn More</button>
        `;
        courseListElement.appendChild(courseElement);
    });
}

// Function to filter courses based on search input
function filterCourses(searchTerm) {
    return courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Event listener for search input
document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value;
    const filteredCourses = filterCourses(searchTerm);
    generateCourseItems(filteredCourses);
});

// Initialize the course list on page load
document.addEventListener('DOMContentLoaded', function() {
    generateCourseItems(courses);
});
