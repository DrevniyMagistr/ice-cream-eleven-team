// (() => {
//     const refs = {
//       openModalBtn: document.querySelector('[data-modal-open]'),
//       closeModalBtn: document.querySelector('[data-modal-close]'),
//       mobMenu: document.querySelector('[data-mobile-menu]'),
//       buttonBuy: document.querySelector('[data-button-buy]'),
//       clickMenuItem: document.querySelectorAll('[data-mobile-item]')
//     };
//     refs.clickMenuItem.forEach((e)=>{
//       e.addEventListener('click',toggleModal)
//     })
  
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
  
//     window.matchMedia('(min-width: 1279px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       if(refs.mobMenu.classList.contains('is-open')){
//         refs.buttonBuy.classList.remove('is-hidden');
//         refs.openModalBtn.classList.remove('is-hidden');
//         refs.mobMenu.classList.toggle('is-open');
//         bodyScrollLock.enableBodyScroll(document.body);
//       }  
      
//     });
  
//     function toggleModal() {
//       refs.openModalBtn.classList.toggle('is-hidden');    
//       refs.buttonBuy.classList.toggle('is-hidden');
//       refs.mobMenu.classList.toggle('is-open');
      
//     }
//   })();
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu')

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
  
})();