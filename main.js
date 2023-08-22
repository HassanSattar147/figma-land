const handleMobileMenuToggle = () => {
    document.querySelector('.mobile-menu').classList.toggle('active')
}

document.querySelector('.hamburger')?.addEventListener('click', handleMobileMenuToggle);
