// check browser support service worker or not
if ('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js')
        .then(function(){
            console.log('service worker registered!');
        });
}