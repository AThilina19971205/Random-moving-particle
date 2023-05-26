const divElm = document.createElement('div');
let tmrId = null;

divElm.classList.add('cursor');
document.body.append(divElm);

let mousepointX=0;
let mousepointY=0;
document.body.addEventListener('mousemove',(eventData)=> {
    clearTimeout(tmrId);
    divElm.style.visibility = 'visible';
    divElm.style.opacity = '1';

    mousepointX=eventData.clientX;
    mousepointY=eventData.clientY;

    divElm.style.left = eventData.clientX + "px";
    divElm.style.top = eventData.clientY + "px";

});

document.body.addEventListener('mouseleave',(eventData)=> {
    divElm.style.visibility = 'hidden';
});
