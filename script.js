// Stickey navbar
const navbar = () => {
    let header = document.querySelector('.navbar-container');
    window.addEventListener('scroll', () => {
        window.scrollY > 60 ? header.classList.add('headerColor') : header.classList.remove('headerColor');
    })


}

// Dynamic Text code
const dynamicTextFunction = () => {
    let dynamicElement = document.querySelectorAll('.dynamic-text');
    let cursor = document.querySelector('.cursor');
    const textArray = ["Web Developer", "Web Designer"];

    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;

    let charIndex = 0;
    let textArrayIndex = 0;

    const type = () => {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursor.classList.contains('typing')) {
                cursor.classList.add("typing");
            }
            dynamicElement[0].textContent += textArray[textArrayIndex].charAt(charIndex);
            dynamicElement[1].textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            cursor.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
    const erase = () => {
        if (charIndex > 0) {
            if (!cursor.classList.contains('typing')) {
                cursor.classList.add("typing");
            }
            dynamicElement[0].textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            dynamicElement[1].textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursor.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 1100);
        }
    }
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
}


// Hamburger
let isNavActive = true;
const hamClick = () => {
    const bar = document.querySelector('.bar');
    const elementToDisplay = document.querySelector('.unorderedList');
    bar.addEventListener('click', (e) => {
        if (isNavActive) {
            bar.innerHTML = '<i class="fa-solid fa-xmark"></i> ';
            isNavActive = false;
        }
        else {
            bar.innerHTML = '<i class="fa-solid fa-bars"></i>';
            isNavActive = true;
        }
        elementToDisplay.classList.toggle('displayMenu');
    })


}

// Skill progress-bar

const skillProgressBar = () => {
    const aboutContainer = document.getElementById('skills');
    const circleItems = document.querySelectorAll('.circle-item');
    const circleItemText = document.querySelectorAll('.skillPtg');
    let count = 0;
    let isLoad = false;
    window.addEventListener('scroll',()=>{
        if(window.scrollY > aboutContainer.offsetTop - 200 && isLoad === false){

            for(let i = 0; i < circleItems.length; i++){
                const data = circleItems[i].dataset.count;
                circleItemText[i].innerText = "0%"
                function progress(){
                    if(count < data){
                        count++;
                        circleItems[i].style.background =`conic-gradient(#2196f3 ${count * 3.5}deg, #e7e7e7 0deg)`;
                        circleItemText[i].innerHTML = `${count}%`
                        setTimeout(progress, 80);
                    }
                    else{    
                        circleItems[i].style.background =`conic-gradient(#2196f3 ${data * 3.5}deg, #e7e7e7 0deg)`;
                        circleItemText[i].innerHTML = `${data}%`
                    }
                }
                progress();
                isLoad = true;
            }
        }
    })

}





document.addEventListener("DOMContentLoaded", () => {
    dynamicTextFunction();
})
navbar();
hamClick();
skillProgressBar();