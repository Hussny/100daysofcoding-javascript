
 /*******************************************************
 Check if serviceworker property exists in the navigator
 ******************************************************/
 if('serviceWorker' in navigator)     // navigator is an object in javascript that represents the browser and information about it
  { 
   window.addEventListener('load', () =>{
     navigator.serviceWorker
     .register('sw.js')    // register service worker
     .then(reg => console.log('Service Worker: Registered'))
     .catch(err => console.log(`Service Worker:Error: ${err}`))
   })
 
 }