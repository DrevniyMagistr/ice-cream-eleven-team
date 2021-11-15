(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      mobMenu: document.querySelector('[data-mobile-menu]'),
      buttonBuy: document.querySelector('[data-button-buy]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    window.matchMedia('(min-width: 1279px)').addEventListener('change', e => {
      if (!e.matches) return;
      if(refs.mobMenu.classList.contains('is-open')){
        refs.buttonBuy.classList.remove('is-hidden');
        refs.openModalBtn.classList.remove('is-hidden');
        refs.mobMenu.classList.toggle('is-open');
        bodyScrollLock.enableBodyScroll(document.body);
      }  
      
    });
  
    function toggleModal() {
      refs.openModalBtn.classList.toggle('is-hidden');    
      refs.buttonBuy.classList.toggle('is-hidden');
      refs.mobMenu.classList.toggle('is-open');
      
    }
  })();