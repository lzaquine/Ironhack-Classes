// create a .dark class on css with background-color #444 and color white
// toggle the .dark class on the body every second

let bodyTag = document.getElementsByTagName('body')[0];
console.log(bodyTag);


setInterval(() => {
    /* This is what toggle is doing in the background
    if (bodyTag.className !== 'dark') {
        bodyTag.classList.add('dark');
    } else {
        bodyTag.classList.remove('dark');
    } */

    bodyTag.classList.toggle('dark');
    
}, 1000);