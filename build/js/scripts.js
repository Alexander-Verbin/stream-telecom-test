
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
document.addEventListener('DOMContentLoaded', ()=>{
  const switcher = document.querySelector('.switcher__item');
  const body = document.querySelector('body')
  const title = document.querySelectorAll('.title');
  const text = document.querySelectorAll('.text');
  const auth = document.querySelector('.auth__content');
  const popup = document.querySelector('.popup');


  switcher.addEventListener('click',()=>{
    switcher.classList.toggle('active');
    body.classList.toggle('dark');
    auth.classList.toggle('dark');
    popup.classList.toggle('dark')
    title.forEach(el => {
      el.classList.toggle('dark')
    });
    text.forEach(el => {
      el.classList.toggle('dark')
    });
  })
})