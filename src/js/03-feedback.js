import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onForm);
refs.form.addEventListener('input', throttle(onFormInput, 500));
const KEY_FORM = 'feedback-form-state';

const {email, message} = refs.form.elements;

saveEl();

function onForm(ev) {
  ev.preventDefault();
  const mailEl = refs.input.value;
  const messageEl = refs.textarea.value;
  const formDataSubmit = 
  {mailEl, 
    messageEl }
  console.log(formDataSubmit);
  
  ev.currentTarget.reset();
  localStorage.removeItem(KEY_FORM);
  
 }
 function saveEl(){
  let saveMsg = JSON.parse(localStorage.getItem(KEY_FORM)) || '';

  if(saveMsg){
    refs.input.value = saveMsg.email || '';
    refs.textarea.value = saveMsg.message || '';
    return ;
  
  }
}
function onFormInput(ev) {
  const formData = { email: email.value, message: message.value };
  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
  
}



