import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onForm);
refs.form.addEventListener('input', throttle(onFormInput, 500));
const KEY_FORM = 'feedback-form-state';
formData = {};
const {email, message} = refs.form.elements;

saveEl();
function onForm(ev) {
  ev.preventDefault();
  ev.currentTarget.reset();
  localStorage.removeItem(KEY_FORM);
  const formEl = ev.currentTarget.elements;
  const mailEl = formEl.email.value;
  const messageEl = formEl.message.value;
  const formDataSubmit = 
  {mailEl, 
    messageEl }
  console.log(formDataSubmit);
 }
 
function onFormInput(ev) {
  formData= { email: email.value, message: message.value };
  const stringifyKey = localStorage.setItem(KEY_FORM, JSON.stringify(formData));
}
function saveEl(){
  let saveMsg = JSON.parse(localStorage.getItem(KEY_FORM)) || '';

  if(saveMsg){
    email.value = saveMsg.email || '';
    message.value = saveMsg.message || '';
    return ;
  
  }
}


