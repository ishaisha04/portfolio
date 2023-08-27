const btn=document.getElementById('rd-more-btn');
const text=document.getElementsByClassName('hiddentxt')
btn.addEventListener('click',()=>{
  text[0].classList.toggle('show-more');
  if(btn.innerText==="Read More"){
   btn.innerText="Read Less";
  }
  else{
    btn.innerText="Read More";
  }
})
// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let link of anchorLinks) {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Highlight current section in navbar on scroll
const navbar = document.querySelector('nav');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', e => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbar.offsetHeight;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  const navbarLinks = document.querySelectorAll('nav a');

  navbarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});