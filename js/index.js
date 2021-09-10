//Form Validation

console.log('Working');

const fname = document.getElementById('fname');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const invalid = document.getElementById('invalid');
const invalidpwd = document.getElementById('invalidpwd');
const invalidemail = document.getElementById('invalidemail');
let valid =false;
let validEmail =false;
let validPwd =false;

fname.addEventListener('blur', ()=>{
    console.log('blur is working');
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;

    let str = fname.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('It matches.');
        valid =true;
    }
    else{
        console.log("It doesn't match.");
        valid =false;
        function inv(){
            invalid.innerHTML = `<small id="is-invalid" class="is-invalid">Must start with an Alphabet</small>`
        }
        inv();
    }

});

// ----> /^([a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
email.addEventListener('blur', ()=>{
    console.log('blur is working');
    let regex = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('It matches.');
        validEmail =true;
    }
    else{
        console.log("It doesn't match.");
        validEmail =false;
        function inv(){
            invalidemail.innerHTML = `<small id="is-invalid" class="is-invalid">Not a mail format</small>`
        }
        inv();
    }

});

pwd.addEventListener('blur', ()=>{
    console.log('blur is working');
    let regex = /^([-\.\-\$\@\#\!a-zA-Z]+)([0-9a-zA-Z]){5,10}$/;

    let str = pwd.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('pwd matches.');
        validPwd =true;
    }
    else{
        console.log("pwd doesn't match.");
        validPwd =false;
        function inv(){
            invalidpwd.innerHTML = `<small id="is-invalid" class="is-invalid">Must be at least 6 letters</small>`
        }
        inv();
    }

});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    // e.preventDefault();

    let aname=document.getElementById('fname').value;

    if(aname==""){
        alert('Please input a value!');
        return false;
    }
    else{
        if(valid && validEmail && validPwd){
            console.log('Submitted');
            alert('Submitted!');
            return true;
        }
        else{
            console.log('Something is not valid');
        }
    }
});