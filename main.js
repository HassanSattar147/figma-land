const hamburger = document.querySelector('.hamburger')


hamburger.addEventListener('click', showMobileMenu)

function showMobileMenu(){
    document.querySelector('.mobile-menu').classList.toggle('active')

    console.log("Hello")
}