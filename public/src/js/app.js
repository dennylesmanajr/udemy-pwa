// check browser support service worker or not
if ('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js')
        .then(function(){
            console.log('service worker registered!');
        })
        .catch(function(err){
            console.log('err: ', err);
        });
}


window.addEventListener('beforeinstallprompt',function(event){
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

var promise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        resolve('this is executed once the time is done!');
        
    }, 3000);
})

promise.then((text)=>{
    console.log('text: ', text);
    return text;

}).then((newText) =>{
    console.log('newText: ', newText);

}).catch((err) =>{
    console.log('err: ', err);

});

console.log('this is executed right after setTimeout()');