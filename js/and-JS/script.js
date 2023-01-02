
window.addEventListener('load', items)

function items() {
   if (document.querySelector('.header-bottom__item')) {
      document.documentElement.addEventListener('mouseover', HoverA)
      document.documentElement.addEventListener('mouseout', HoverA)

      function HoverA(e) {
         const item = e.target.closest('.header-bottom__item')
         const line = document.querySelector('.header__line')

         if (!item) return;

         if (e.type === 'mouseover') {
            const ItemX = item.getBoundingClientRect().left - scrollX
            line.style.cssText = `
               transition: all 0.3s ease 0.1s;
               transform: translate(${ItemX}px, 2px);
               width:${item.offsetWidth}px;
            `
            line.classList.remove('_none')
         }
         if (e.type === 'mouseout') {
            line.classList.add('_none')
         }
      }
   }
}
