document.addEventListener('DOMContentLoaded',()=>{
  const popup = document.querySelector('.popup');
  const open = document.querySelector('.popupOpen');
  const bg = popup.querySelector('.popup__bg');
  const close = popup.querySelector('.popup__close');

  open.addEventListener('click',(e)=>{
    e.preventDefault();
    popup.classList.add('open')
  });

  close.addEventListener('click',()=>{
    popup.classList.remove('open')
  });

  bg.addEventListener('click',()=>{
    popup.classList.remove('open')
  });

})