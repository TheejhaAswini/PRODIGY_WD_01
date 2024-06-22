window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
