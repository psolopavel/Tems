"use strict"

window.addEventListener('load', windowLoad)

function windowLoad() {
   if (document.querySelector('[data-glow]')) {
      document.documentElement.addEventListener('mouseover', buttonActions)
      document.documentElement.addEventListener('mousemove', buttonActions)
      document.documentElement.addEventListener('mouseout', buttonActions)

      let bGlow, bGlowColor, bGlowSize;

      function buttonActions(e) {
         const button = e.target.closest('[data-glow]')
         if (!button) return;

         if (e.type === 'mouseover') {
            button.insertAdjacentHTML(
               'beforeend',
               `<div class="button-glow">
                  <span class="button-colour"></span>
                </div>
               `
            )
            bGlow = button.querySelector('.button-glow');
            bGlowColor = button.querySelector('.button-colour');
            bGlowSize = Math.min(button.offsetWidth, button.offsetHeight)

            bGlow.style.width = bGlow.style.height = `${bGlowSize}px`

            bGlowColor.style.width = `${button.offsetWidth}px`
            bGlowColor.style.height = `${button.offsetHeight}px`
         }
         if (e.type === 'mouseout') {
            button.querySelector('.button-glow').remove();
         }
         if (e.type === 'mousemove') {
            const posX = e.pageX - (button.getBoundingClientRect().left - scrollX)
            const posY = e.pageY - (button.getBoundingClientRect().top - scrollY)
            bGlow.style.left = `${posX - bGlowSize / 2}px`
            bGlow.style.top = `${posY - bGlowSize / 2}px`
            bGlowColor.style.transform = `
               translate(${posX - (button.offsetWidth - bGlowSize / 2)}px, ${posY - (button.offsetHeight - bGlowSize / 2)}px)
            `
         }
      }
   }
}