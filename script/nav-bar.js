window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navbarLinks = document.querySelectorAll('nav ul li a');
    let scrollPosition = window.scrollY;

    sections.forEach((currentSection, i) => {
      let sectionTop = currentSection.offsetTop;
      let sectionHeight = currentSection.clientHeight;
      if (scrollPosition >= sectionTop - 80 && scrollPosition < sectionTop + sectionHeight - 80) {
        navbarLinks[i].classList.add('active');
      } else {
        navbarLinks[i].classList.remove('active');
      }
    });
  });