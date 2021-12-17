const navBarOnScroll = () => {
  const navbar = document.querySelector('nav');
  const banner = document.querySelector('.banner');
  if (navbar && banner) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= banner.getBoundingClientRect().height) {
        navbar.classList.add('active', 'box-shadowed');
      } else {
        navbar.classList.remove('active', 'box-shadowed');
      }
    });
  }
}

export { navBarOnScroll };
