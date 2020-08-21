/*******************************************************
 Check if serviceworker property exists in the navigator
 ******************************************************
if('serviceWorker' in navigator){                                 // navigator is an object in javascript that represents the browser and information about it
    navigator.serviceworker.register('sw.js')                      // register service worker
    .then((reg) => console.log('service worker registered', reg))        Promise syntax to deal with asynchronous task
    .catch((arr) => console.log('service worker not registered', arr));
  }
  */
 if('serviceWorker' in navigator) {
   window.addEventListener('load', () =>{
     navigator.serviceWorker
     .register('sw.js')
     .then(reg => console.log('Service Worker: Registered'))
     .catch(err => console.log(`Service Worker:Error: ${err}`))
   })
 
 }