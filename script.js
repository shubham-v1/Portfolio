// Stickey navbar
const navbar = () =>{
    let header = document.querySelector('.header');
    window.addEventListener('scroll',()=>{
        window.scrollY > 60 ?header.classList.add('headerColor'):header.classList.remove('headerColor');
    })

}

// Dynamic Text code
const dynamicTextFunction = () =>{
    let dynamicElement = document.querySelector('.dynamic-text');
    let cursor = document.querySelector('.cursor');
    const textArray = ["web developer", "web designer"];
    
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;

    let charIndex = 0;
    let textArrayIndex = 0;

    const type = () =>{
        if(charIndex < textArray[textArrayIndex].length){
            if(!cursor.classList.contains('typing')){
                cursor.classList.add("typing");
            }
            dynamicElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type,typingDelay);
        }
        else{
            cursor.classList.remove("typing");
            setTimeout(erase,newTextDelay);
        }
    }
    const erase = () =>{
        if(charIndex > 0){
            if(!cursor.classList.contains('typing')){
                cursor.classList.add("typing");
            }
            dynamicElement.textContent = textArray[textArrayIndex].substring(0,charIndex - 1);
            charIndex --;
            setTimeout(erase, erasingDelay);
        }
        else{
            cursor.classList.remove("typing");
            textArrayIndex ++;
            if(textArrayIndex >= textArray.length){
                textArrayIndex = 0;
            }
            setTimeout(type,typingDelay + 1100);
        }
    }
    if(textArray.length){
        setTimeout(type,newTextDelay+250);
    }
}

// Hamburger
const hamClick = () =>{
    const bar = document.querySelector('.bar');
    const elementToDisplay = document.querySelector('.unorderedList');
    bar.addEventListener('click',(e)=>{
        elementToDisplay.classList.toggle('displayMenu');
    })
}
hamClick();
document.addEventListener("DOMContentLoaded",()=>{
    dynamicTextFunction();
    navbar();
})