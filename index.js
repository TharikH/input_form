//creating different functions
function valid_name(name, regex) {
    return regex.test(name.value)
}
function confirm_password(pass, sPass) {
    return pass.value == sPass.value;
}
function error(parent) {
    parent.style.animation = "error 0.5s ease";
    parent.style.border = "0.2rem red solid";
}
function correct(parent) {
    parent.style.border = "0.2rem green solid";
}
//password showing and hiding function
function eye_pass() {
    const eyes = document.querySelectorAll(".pointer");
    eyes.forEach(eye => {
        eye.addEventListener("click", () => {
            if (eye.previousElementSibling.nodeName == "SPAN") {
                eye_pass_display(eye, 1)
            }
            else {
                eye_pass_display(eye, 0)
            }
        });
    });
}
function eye_pass_display(curr, flag) {
    var next;
    if (flag) {
        next = curr.previousElementSibling;
        const input = next.previousElementSibling;
        input.type = "password";
    }
    else {
        next = curr.nextElementSibling;
        const input = curr.previousElementSibling;
        input.type = "text";
    }
    display_change(curr, next);
}
function display_change(curr, next) {
    curr.classList.add("disNone");
    next.classList.remove("disNone");
}


//validation
function validation() {
    const validates = document.querySelectorAll("input");
    validates.forEach(valid => {
        const parent = valid.parentElement;
        valid.addEventListener("blur", () => {
            if (valid.placeholder == "username" && valid_name(valid,/^[a-z0-9_-]{5,16}$/)) {
                correct(parent);
            }
            else if (valid.placeholder == "email" && valid_name(valid, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                correct(parent);
            }
            else if (valid.placeholder == "password" && valid_name(valid, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
                correct(parent);
            }
            else if (valid.placeholder == "confirm password" && valid_name(valid, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/) && confirm_password(valid, document.getElementById("pass"))) {
                correct(parent);
            }
            else {
                error(parent);
            }

            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            });
        });
    });
}
validation();
eye_pass();


//sign up
function sign(name){
    const temp=document.getElementById(name);
    const inputs=temp.getElementsByTagName("input");
    var count=0;
    for(var i=0;i<inputs.length;i++){
        const parent=inputs[i].parentElement;
        if (inputs[i].placeholder == "username" && valid_name(inputs[i],/^[a-z0-9_-]{5,16}$/)) {
            correct(parent);
            count++;
        }
        else if (inputs[i].placeholder == "email" && valid_name(inputs[i], /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            correct(parent);
            count++;
        }
        else if (inputs[i].placeholder == "password" && valid_name(inputs[i], /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
            correct(parent);
            count++;
        }
        else if (inputs[i].placeholder == "confirm password" && valid_name(inputs[i], /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/) && confirm_password(inputs[i], document.getElementById("pass"))) {
            correct(parent);
            count++;
        }
        else {
            error(parent);
        }
        parent.addEventListener("animationend", () => {
            parent.style.animation = "";
        });
    }
    if(count==inputs.length){
        nextSlide(count,temp);
        return true;
    }
    else{
        return false;
    }
}
function change(curr,next){
    curr.classList.add("DisNone");
    curr.classList.remove("Dis");
    next.classList.remove("DisNone");
    next.classList.remove("Dis");
}
function nextSlide(count,name){
    if(count==4){
        next=name.nextElementSibling;
        change(curr,next);
    }
}

//acnchor tags
function change_sign(name){
    const curr=document.getElementById(name);
    var next;
    if(curr.previousElementSibling){
        next=curr.previousElementSibling;
    }
    else{
        next=curr.nextElementSibling;
    }
    change(curr,next);
}