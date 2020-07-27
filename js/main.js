$('.owl-carousel').owlCarousel({

loop:true,
margin:0,
items:1,
})

//-- show menu
let menuToggle = document.querySelector('.navbar__toggle');
let hiddenMenu = document.querySelector('.js-hidden-menu');

const toggleMenu = () => {
  hiddenMenu.classList.toggle('show');
  menuToggle.classList.toggle('active');
}

menuToggle.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == hiddenMenu;
  let its_hamburger = target == menuToggle;
  let menu_is_active = hiddenMenu.classList.contains('show');

  if (!its_menu && menu_is_active) {
    toggleMenu();

  }
})
//-- arrow up
    const arrowShow = ()=> {
      	let scroll = document.documentElement.scrollTop;
        let header = document.querySelector('.header');
        let headerHeight = header.offsetHeight;
      	if (scroll > headerHeight) {
    		    arrowUp.classList.add('show')
        	}
        else {
		      arrowUp.classList.remove('show')
      	}
    }
	 let arrowUp = document.querySelector('.scroll-up');
	  window.addEventListener('scroll', arrowShow);

//---reload

window.onload=function(){
  let preload = document.querySelector('.preload');
  preload.style.display="none";
    document.body.classList.remove('hidden');
}
