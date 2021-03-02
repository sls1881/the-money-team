//event listener to redirect to P1 for the "Get Started" button
// these folder names (p0, p1, etc) are a bit hard to follow
const button = document.getElementById('begin');
button.addEventListener('click', () => {
    window.location = './p1';
});