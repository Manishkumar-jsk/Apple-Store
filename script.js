const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const showContent = document.querySelector('.show-content');
const service = document.querySelector('.service');
const account = document.querySelector('.account1');
const Apple__Store = document.querySelector('.apple__store');
const Business = document.querySelector('.business');
const Education = document.querySelector('.education');
const Healthcare = document.querySelector('.healthcare');
const Apple__values = document.querySelector('.apple__values');
const About__apple = document.querySelector('.about__apple');
const closebtn = document.querySelector('.closebtn');
const closebtn1 = document.querySelector('.closebtn1');
const closebtn2 = document.querySelector('.closebtn2');
const closebtn3 = document.querySelector('.closebtn3');
const closebtn4 = document.querySelector('.closebtn4');
const closebtn5 = document.querySelector('.closebtn5');
const closebtn6 = document.querySelector('.closebtn6');
const closebtn7 = document.querySelector('.closebtn7');
const closebtn8 = document.querySelector('.closebtn8');
const navbarToggle = document.querySelector('.navbar-toggler');
const navBar = document.querySelector('.navbar');

btn1.addEventListener('click',function(e){
    //console.log(showContent);
    //console.log(showContent.classList);
    showContent.classList.remove('hidden');
    closebtn.style.display = 'inline'
    btn1.style.display = 'none'
})
closebtn.addEventListener('click',function(e){
    showContent.classList.add('hidden');
    closebtn.style.display = 'none'
    btn1.style.display = 'inline'
})
btn2.addEventListener('click',function(e){
    //console.log(service);
    //console.log(service.classList);
    service.classList.remove('hidden');
    closebtn1.style.display='inline'
    btn2.style.display = 'none'
})
closebtn1.addEventListener('click',function(e){
    service.classList.add('hidden');
    closebtn1.style.display = 'none'
    btn2.style.display = 'inline'
})
btn3.addEventListener('click',function(e){
    //console.log(account);
    //console.log(account.classList);
    account.classList.remove('hidden');
    closebtn2.style.display='inline'
    btn3.style.display = 'none'
})
closebtn2.addEventListener('click',function(e){
    account.classList.add('hidden');
    closebtn2.style.display = 'none'
    btn3.style.display = 'inline'
})
btn4.addEventListener('click',function(e){
    //console.log(ddd);
    //console.log(ddd.classList);
    Apple__Store.classList.remove('hidden');
    closebtn3.style.display='inline'
    btn4.style.display = 'none'
})
closebtn3.addEventListener('click',function(e){
    Apple__Store.classList.add('hidden');
    closebtn3.style.display = 'none'
    btn4.style.display = 'inline'
})
btn5.addEventListener('click',function(e){
    //console.log(ddd);
    //console.log(ddd.classList);
    Business.classList.remove('hidden');
    closebtn4.style.display='inline'
    btn5.style.display = 'none'
})
closebtn4.addEventListener('click',function(e){
    Business.classList.add('hidden');
    closebtn4.style.display = 'none'
    btn5.style.display = 'inline'
})
btn6.addEventListener('click',function(e){
    //console.log(Education);
    //console.log(Education.classList);
    Education.classList.remove('hidden');
    closebtn5.style.display='inline'
    btn6.style.display = 'none'
})
closebtn5.addEventListener('click',function(e){
    Education.classList.add('hidden');
    closebtn5.style.display = 'none'
    btn6.style.display = 'inline'
})
btn7.addEventListener('click',function(e){
    //console.log(Healthcare);
    //console.log(Healthcare.classList);
    Healthcare.classList.remove('hidden');
    closebtn6.style.display='inline'
    btn7.style.display = 'none'
})
closebtn6.addEventListener('click',function(e){
    Healthcare.classList.add('hidden');
    closebtn6.style.display = 'none'
    btn7.style.display = 'inline'
})
btn8.addEventListener('click',function(e){
    //console.log(Apple__values);
    //console.log(Apple__values.classList);
    Apple__values.classList.remove('hidden');
    closebtn7.style.display='inline'
    btn8.style.display = 'none'
})
closebtn7.addEventListener('click',function(e){
    Apple__values.classList.add('hidden');
    closebtn7.style.display = 'none'
    btn8.style.display = 'inline'
})
btn9.addEventListener('click',function(e){
    //console.log(About__apple);
    //console.log(About__apple.classList);
    About__apple.classList.remove('hidden');
    closebtn8.style.display='inline'
    btn9.style.display = 'none'
})
closebtn8.addEventListener('click',function(e){
    About__apple.classList.add('hidden');
    closebtn8.style.display = 'none'
    btn9.style.display = 'inline'
})
navbarToggle.addEventListener('click',function(e){
    console.log(navBar);
})
const shopping = document.querySelector('.shopping');
console.log(window.innerWidth);