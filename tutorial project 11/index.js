const toggles = document.querySelectorAll('faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventLister('Click', () => {
        toggle.parentNode.classList.toggle('active')

    })
});



// 1- bring in toggle button (querySelectorAll)
// 2- loop through NodeList (forEach)
// 3- Add click event (addEventListener)
// 4- toggle the active class on the parent node (.parentNode & classList.toggle())
