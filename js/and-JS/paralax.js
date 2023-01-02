"use strict"
window.onload = function () {

   const bkl = document.querySelector('.main-much')
   if (bkl) {

      /*--*/
      const forn1 = 15
      const forn2 = 5
      const forn3 = 10
      const forn4 = 50

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/

         document.querySelector('#bs-1').style.cssText = `transform: translate(${-positionX / forn1}%, ${-positionY / forn1}%);`;
         document.querySelector('#bs-2').style.cssText = `transform: translate(${positionX / forn2}%, ${positionY / forn2}%);`;
         document.querySelector('#bs-3').style.cssText = `transform: translate(${positionX / forn3}%, ${-positionY / forn3}%);`;
         document.querySelector('#bs-4').style.cssText = `transform: translate(${-positionX / forn3}%, ${positionY / forn2}%);`;
         document.querySelector('#bs-5').style.cssText = `transform: translate(${positionX / forn4}%, ${positionY / forn4}%);`;
         document.querySelector('#bs-6').style.cssText = `transform: translate(${positionX / forn4}%, ${positionY / forn4}%);`;
         document.querySelector('#bs-7').style.cssText = `transform: translate(${positionX / forn4}%, ${positionY / forn4}%);`;


         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      bkl.addEventListener('mousemove', function (event) {
         const paralaxWidth = bkl.offsetWidth
         const paralaxHeight = bkl.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }
   const bkv = document.querySelector('.main-search')

   if (bkv) {

      /*--*/
      const forn4 = 50

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/


         document.querySelector('#bs-7').style.cssText = `transform: translate(${positionX / forn4}%, ${positionY / forn4}%);`;
         document.querySelector('#bs-8').style.cssText = `transform: translate(${positionX / forn4}%, ${positionY / forn4}%);`;


         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      bkv.addEventListener('mousemove', function (event) {
         const paralaxWidth = bkv.offsetWidth
         const paralaxHeight = bkv.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }
   const bkq = document.querySelector('.main-punkts')

   if (bkq) {

      /*--*/
      const forn4 = 50

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/


         document.querySelector('#bs-9').style.cssText = `transform: translate(${positionX / forn4}%, ${positionY / forn4}%);`;


         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      bkq.addEventListener('mousemove', function (event) {
         const paralaxWidth = bkq.offsetWidth
         const paralaxHeight = bkq.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }
   const bkg = document.querySelector('.main-form')

   if (bkg) {

      /*--*/
      const forn4 = 50

      const speed = 0.05

      let positionX = 0, positionY = 0;
      let coordXproces = 0, coordsYproces = 0;

      function setMouseParalaxStyle() {
         const distX = coordXproces - positionX
         const distY = coordsYproces - positionY

         positionX = positionX + (distX * speed)
         positionY = positionY + (distY * speed)
         /*--*/


         document.querySelector('#bs-10').style.cssText = `transform: translate(${positionX / forn4}%, ${positionY / forn4 - 30}%);`;


         requestAnimationFrame(setMouseParalaxStyle)
      }
      setMouseParalaxStyle();

      bkg.addEventListener('mousemove', function (event) {
         const paralaxWidth = bkg.offsetWidth
         const paralaxHeight = bkg.offsetHeight

         const coordX = event.pageX - paralaxWidth / 2
         const coordY = event.pageY - paralaxHeight / 2

         coordXproces = coordX / paralaxWidth * 100;
         coordsYproces = coordY / paralaxHeight * 100
      })
   }
}