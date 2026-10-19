const accordionBtn = document.getElementById('accordion-btn');
const accordionContent = document.getElementById('accordion-content');

accordionBtn.addEventListener('click', () => {
    accordionContent.classList.toggle('is-open');
});
