const refs = {
    form:document.querySelector('.feedback-form'),
    input:document.querySelector('.feedback-form input'),
    textarea:document.querySelector('.feedback-form textarea'),

};

refs.form.addEventListener( 'submit', onFormInput );
refs.input.addEventListener('input', onInput);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

const KEY_FORM = "feedback-form-state";
function onForm(ev) {
    ev.preventDefault();
    ev.currentTarget.reset();
    localStorage.removeItem(KEY_FORM);
}

function onInput(ev){
    const inputEl = ev.target.value;
    localStorage.setItem(KEY_FORM, inputEl)
}


function onTextareaInput(ev) {
    const msg = ev.target.value;
    
    localStorage.setItem(KEY_FORM, msg)
}
function populateTextarea(ev){
    const saveMsg = localStorage.getItem(KEY_FORM);
    if(saveMsg){
        console.log(saveMsg);
    
    refs.textarea.value = saveMsg;
}
}

