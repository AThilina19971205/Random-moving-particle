const texts = [
    'Hello! Wellcome to My GitHub Account','I am Thilina',
    "This is my javaScript Test Example"
];

const spanElm = document.querySelector("h1 > span");

let i = 0;
let k = 0;
let m = 0;
let erase = false;

setInterval(()=> {
    let text = texts[k];
    i++;
    if (i % 2 == 0 && !erase) {
        m++;
        spanElm.innerText = text.substring(0, m);
        if (m >= (text.length + 10)) erase = true;
    }else if(erase){
        m--;
        spanElm.innerText = text.substring(0, m);
        if (m <= 0) {
            erase = false;
            k++;
            if (k === texts.length) k = 0;
        }
    }
}, 50);