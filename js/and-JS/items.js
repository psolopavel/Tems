window.addEventListener('load', Items)

function Items() {
   const parents = document.querySelectorAll('.main-search__cayegory')
   const menus = document.querySelectorAll('.main-search__block')
   let j = 0
   let b = 0
   let q = 0
   parents.forEach(parent => {
      ++j
      parent.setAttribute('data-parent', `${j}`)
   });
   menus.forEach(menu => {
      ++b
      menu.setAttribute('data-submenu', `${b}`)
   });

   document.querySelector('.main-search__block').querySelectorAll('.main-search__content').forEach(el => {
      el.classList.add('_active')
   });

   const items = document.querySelectorAll('.main-punkts__item')
   items.forEach(el => {
      q = q + 3
      el.style.transition = `all 0.3s ease ${q}s`
      el.querySelector('.main-punkts__number').style.transition = `all 0.3s ease ${q}s`
      el.querySelector('.main-punkts__text').style.transition = `all 0.3s ease ${q}s`
      setInterval(function () {
         el.classList.toggle('_active')
         el.querySelector('.main-punkts__number').classList.toggle('_active')
         el.querySelector('.main-punkts__text').classList.toggle('_active')
      }, `${3 * items.length}900`)
   });
   const much1 = document.querySelector('.main-much__busines')
   const much2 = document.querySelector('.main-much__partners')

   much1.addEventListener('click', function () {
      much1.classList.add('_active')
      much2.classList.remove('_active')
      document.querySelector('.main-much__right').classList.add('_active')
      document.querySelector('.main-work__title').innerHTML = 'Trusted by'
      document.querySelector('.main-search').classList.add('_active')
      document.querySelector('.main-punkts').classList.add('_dnone')
      document.querySelector('.main-black2').classList.add('_block')
      document.querySelector('.main-black').classList.add('_dnone')
      document.querySelector('.main-form').classList.add('_dnone')
      document.querySelector('.main-hottes__title').innerHTML = 'In demand Partners'
      document.querySelector('.main-pupels').classList.add('_active')
      document.querySelector('.main-rocket').classList.add('_active')

   })
   much2.addEventListener('click', function () {
      much1.classList.remove('_active')
      much2.classList.add('_active')
      document.querySelector('.main-much__right').classList.remove('_active')
      document.querySelector('.main-work__title').innerHTML = 'We work with'
      document.querySelector('.main-search').classList.remove('_active')
      document.querySelector('.main-punkts').classList.remove('_dnone')
      document.querySelector('.main-black2').classList.remove('_block')
      document.querySelector('.main-black').classList.remove('_dnone')
      document.querySelector('.main-form').classList.remove('_dnone')
      document.querySelector('.main-hottes__title').innerHTML = 'Our hottest rolesd'
      document.querySelector('.main-pupels').classList.remove('_active')
      document.querySelector('.main-rocket').classList.remove('_active')
   })
}