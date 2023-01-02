function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('[data-parent]')) {
      const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      const catalogMenu = document.querySelector('.catalog-header')
      if (subMenu) {
         const ActiveBlock = document.querySelector('._sub-menu-active');
         const OpenBlock = document.querySelector('._sub-menu-open');

         /*если хотим штоби при нажатии на новий абект старий не закривался \/*/
         if (ActiveBlock && ActiveBlock !== targetElement /*&& subMenuId < 14*/) {
            ActiveBlock.classList.remove('_sub-menu-active');
            OpenBlock.classList.remove('_sub-menu-open');
            setTimeout(function () {
               OpenBlock.querySelectorAll('.main-search__content').forEach(el => {
                  el.classList.remove('_active')

               });
            }, 10)
            document.documentElement.classList.remove('_sub-menu-open')
         }
         // document.documentElement.classList.toggle('_sub-menu-open')
         targetElement.classList.add('_sub-menu-active');
         subMenu.classList.add('_sub-menu-open');
         setTimeout(function () {
            let v = 0
            subMenu.querySelectorAll('.main-search__content').forEach(el => {
               el.classList.add('_active')
               el.style.cssText = `transition:all 0.5s ease 0.${++v}s;`
            });
         }, 10)
      } else {
         console.log('Упс...')
      }

      e.preventDefault();
   }
   if (targetElement.closest('.menu-top-header__items_catalog')) {
      document.documentElement.classList.add('catalog-open')
      e.preventDefault();
   }
   if (targetElement.closest('.icon-menu,.menu-catalog__back')) {
      document.documentElement.classList.remove('catalog-open')
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
      e.preventDefault();
   }
   if (targetElement.closest('.sub-menu-catalog__back')) {
      document.documentElement.classList.remove('_sub-menu-open')
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
      e.preventDefault();
   }

}
document.addEventListener('click', documentActions)