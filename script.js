'use strict';
//Get modal

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btn=document.querySelector('.close-modal');
//Buttons
//Note: We cant select individual buttons as all three buttons have same class name
//Instead we have to loop to all 
//Using queryselector will only select first instace of the button
//Queryselectorall coz we have multiple button with same class name
const btnsOpen=document.querySelectorAll('.show-modal');

//DRY principal
//Instead of wrtting same code to close modal again , make it a function
const openmodal=function(){
    modal.classList.remove('hidden')
    //hide overlay
    overlay.classList.remove('hidden')
}
const closemodal=function(){
    modal.classList.add('hidden')
    //hide overlay
    overlay.classList.add('hidden')
}
for(let i=0;i<btnsOpen.length;i++){
    btnsOpen[i].addEventListener('click',openmodal)  
}

//Click on close will close the modal
//Direct call function
btn.addEventListener('click',closemodal)
//click outside of modal to remove it
overlay.addEventListener('click',closemodal)

//Respond to keyboard events (press esc key to close modal)

//Keydown : press keu
//keyup : when key is released

document.addEventListener('keydown',function(e){
    if(e.key=='Escape'){
        //close mondal function
        closemodal()
    }

    //close only if esc pressed

})