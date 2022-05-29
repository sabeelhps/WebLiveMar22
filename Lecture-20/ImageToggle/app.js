const image = document.querySelector('img');
const h1 = document.querySelector('h1');


function imageToggle() {

    let isTrue = false;
    
    setInterval(() => {
        if (isTrue) {
            image.setAttribute('src','https://images.unsplash.com/photo-1639718561716-b59d3995d886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')
        } else {
            image.setAttribute('src','https://images.unsplash.com/photo-1653537649117-821e01f707c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
        }

        isTrue = !isTrue;

    }, 1000);
}

imageToggle();



// ---------




function makeRandomRGBColor() {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}



function toggleHeadingBackground() {
    
    setInterval(() => {
        h1.style.backgroundColor = makeRandomRGBColor();
    }, 1000);
}


h1.style.color = 'purple';
h1.style.border = '4px solid black';
h1.style.padding = '10px 5px';

toggleHeadingBackground();



