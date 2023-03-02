const btns = document.querySelectorAll('.tab-btn')
const aboutCtnr = document.querySelector('.about')
const contents = document.querySelectorAll('.content')

aboutCtnr.addEventListener('click', function(e) {

    const id = e.target.dataset.id

    if(id) {
        // remove active from other buttons
        btns.forEach(function(btn) {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        // hide the other content when current one is clicked
        contents.forEach(function(content) {
            content.classList.remove('active')
        })
        const specific = document.getElementById(id)
        specific.classList.add('active')
    }
})
