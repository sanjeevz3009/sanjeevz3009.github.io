// Dark and light mode
// Landing animation
// Loading animation
// Few animations in the website
// Contact me page/ system
// Home, about, portfolio, resume, maybe projects and contact me

function backToTop() {
    const animation = document.querySelector('.animation');
    const svg = document.getElementById('triangles');
    svg.onclick = (e) => {
        const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
        const rando = () => colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.cssText = `
        --dark-color: ${rando()};
        --light-color: ${rando()};
        `
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }
}

window.addEventListener('load', backToTop);
