// Stickey navbar
const navbar = () => {
    let header = document.querySelector('.navbar-container');
    let navLinks = document.querySelectorAll('.nav-links');
    let allSection = document.querySelectorAll('.allSection'); 
    window.addEventListener('scroll', () => {
        window.scrollY > 60 ? header.classList.add('headerColor') : header.classList.remove('headerColor');

        for(let i = 0; i < allSection.length; i++){
            let top = window.scrollY;
            let offset = allSection[i].offsetTop - 150;
            let height = allSection[i].offsetHeight;
            let id = allSection[i].id;
            if(top > offset && top < offset + height){
                navLinks.forEach(link =>{
                    document.title = `Shubham | ${id.slice(0,1).toUpperCase()+id.slice(1,id.length)}`
                    link.classList.remove('active');
                    document.querySelector('div header nav ul li a[href*='+id+']').classList.add('active');
                })
            }

        }

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

const hamNavigate = () =>{
    const hamIcon = document.querySelector('.bar');
    const sidebar = document.getElementById('sidebar');
    let isNavActive = true;
    hamIcon.addEventListener('click',()=>{
        if(isNavActive === true){
            hamIcon.innerHTML = '<i class="fa-solid fa-xmark"></i> ';
            document.documentElement.style.overflowY = "hidden";
            isNavActive = false;
        }
        else{
            hamIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
            document.documentElement.style.overflowY = "";
            isNavActive = true;
        }
        sidebar.classList.toggle('activeNav');
    })
    
    document.addEventListener('click',(e)=>{
        if(e.target.id !== "sidebar" && !e.target.classList.contains('fa-solid')){
            sidebar.classList.remove('activeNav');
            hamIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
            document.documentElement.style.overflowY = "";
            isNavActive = true;
            
        }
    })
}

hamNavigate();
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

// Email send
function sendEmail() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let body = `Name: ${name}<br>Email: ${email}<br>Message: ${message}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "shubhwebdev@gmail.com",
        Password: "B4C9EF5FA7B5B3A2FE76F99124461F15313A",
        To: "shubhamvairagade91@gmail.com",
        From: "shubhwebdev@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: body
    }).then(
        message => alert(message)
    );
}



document.addEventListener("DOMContentLoaded", () => {
    dynamicTextFunction();
})
navbar();
skillProgressBar();