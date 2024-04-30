let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});


sr.reveal('.home-text span',{delay:200, origin: 'top'});
sr.reveal('.home-text h1',{delay:400, origin: 'left'});
sr.reveal('.home-text p',{delay:520, origin: 'right'});
sr.reveal('.main-btn',{delay:600, origin: 'left'});

sr.reveal('.share',{delay:700, origin: 'bottom'});

sr.reveal('.home-img',{delay:750, origin: 'right'});



sr.reveal('.aboutme-text h1',{delay:250, origin: 'top'});
sr.reveal('.aboutme-text p',{delay:420, origin: 'right'});
sr.reveal('.aboutme-text #p2',{delay:420, origin: 'left'});

sr.reveal('.aboutme-img',{delay:550, origin: 'left'});

sr.reveal('.portfolio',{delay:250, origin: 'left'});

sr.reveal('.contato-img',{delay:550, origin: 'left'});
sr.reveal('.contato-text h1',{delay:250, origin: 'top'});
sr.reveal('.contato-text p',{delay:420, origin: 'right'});




