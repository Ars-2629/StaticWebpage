let html = document.getElementById('html');

// Light mode and Dark Mode For Mobile

let change_btn = document.getElementById('change_btn');
let change_image = document.getElementById('change_image');

change_btn.addEventListener('click',()=>{
    html.classList.toggle('dark');

    if(change_image.src.includes('img/moon.svg')){
        change_image.src = 'img/sun.svg';
    }else{
        change_image.src = 'img/moon.svg'; 
    }
});

// Light mode and Dark Mode For Desktop

let change_image2 = document.getElementById('change_image2');
let change_btn2 = document.getElementById('change_btn2');

change_btn2.addEventListener('click',()=>{
    html.classList.toggle('dark');

    if(change_image2.src.includes('img/moon.svg')){
        change_image2.src = 'img/sun.svg';
    }else{
        change_image2.src = 'img/moon.svg'; 
    }
});

// Main Menu For Mobile

let main_menu = document.getElementById('main_menu');
let mobile_btn = document.getElementById('mobile_btn');

mobile_btn.addEventListener('click',()=>{
    main_menu.classList.toggle('hidden');
});

// Form Validation

onsubmit=function formValidation(e){

let Fname = document.Form1.fname.value;
let emailAdd = document.Form1.emailAdd.value;
let address = document.Form1.address.value;
let contact = document.Form1.contact.value;
let message = document.Form1.message.value;
let warn1 = document.getElementById('warn1');
let warn2 = document.getElementById('warn2');
let warn3 = document.getElementById('warn3');
let warn4 = document.getElementById('warn4');

const Fname_exp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])+$/;
const email_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const contact_exp = /^([0-9]{10})+$/;

    if(Fname == "" || emailAdd == "" || address == "" || contact == "" || message == ""){
            warn1.innerHTML='*Fields Can Not Be Empty';
            e.preventDefault();
    }else{
        warn1.innerHTML='';
    }
   
    if(!Fname_exp.test(Fname)){
          warn2.innerHTML='*This Field Should Contain Alphabates Only';
          e.preventDefault();
    }else{
        warn2.innerHTML='';
    }
    
    if(!email_exp.test(emailAdd)){
            warn3.innerHTML='*Please Enter A Valid Email Address';
            e.preventDefault();
            
    }else{
        warn3.innerHTML='';
    }

    if(!contact_exp.test(contact)){
       warn4.innerHTML='*This Field Should Contain 10 Digits Number Only';
       e.preventDefault();
    
    }else{
        warn4.innerHTML='';
    }

    if(Fname_exp.test(Fname) && email_exp.test(emailAdd) && contact_exp.test(contact)){
        warn1.innerHTML='Your Query Have Been Submitted Successfully'
        // window.location.href = 'index.html';
    };

};



// Form Reset

const formReset = document.getElementById('formReset');

formReset.addEventListener('click',resetForm);

function resetForm(){

let Fname = document.getElementById('fname');
let emailAdd = document.getElementById('emailAdd');
let address = document.getElementById('address');
let contact = document.getElementById('contact');
let message = document.getElementById('message');
let warn1 = document.getElementById('warn1');
let warn2 = document.getElementById('warn2');
let warn3 = document.getElementById('warn3');
let warn4 = document.getElementById('warn4');

Fname.innerHTML ='';
emailAdd.innerHTML='';
address.innerHTML='';
contact.innerHTML='';
message.innerHTML='';
warn1.innerHTML='';
warn2.innerHTML='';
warn3.innerHTML='';
warn4.innerHTML='';

};

