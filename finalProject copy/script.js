$(document).ready(function() {
    $('.piece').draggabilly({
        containment: false
    });
});


//animate on scroll
document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        });
    });

    document.querySelectorAll('.description').forEach((element) => observer.observe(element));
    document.querySelectorAll('.beginning').forEach((element) => observer.observe(element));
    document.querySelectorAll('.roleTitle').forEach((element) => observer.observe(element));
    document.querySelectorAll('.durationTitle').forEach((element) => observer.observe(element));
    document.querySelectorAll('.teamTitle').forEach((element) => observer.observe(element));
    document.querySelectorAll('.skillsTitle').forEach((element) => observer.observe(element));
    

});


