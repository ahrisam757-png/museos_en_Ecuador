// Carousel
let current = 0;
const inner = document.getElementById('carousel-inner');
const items = inner.children.length;
document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % items;
    inner.style.transform = `translateX(-${current * 100}%)`;
});
document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + items) % items;
    inner.style.transform = `translateX(-${current * 100}%)`;
});

// Accordion
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.classList.toggle('hidden');
}
