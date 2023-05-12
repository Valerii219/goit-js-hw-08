import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
};




refs.form.addEventListener('submit', onForm);
const formData = {};
const KEY_FORM = 'feedback-form-state';
function onForm(ev) {
  ev.preventDefault();
  ev.currentTarget.reset();
  localStorage.removeItem(KEY_FORM);
}

const onFormInput = (ev) => {
  formData[ev.target.name] = ev.target.value;
   const stringifyKey = localStorage.setItem(KEY_FORM, JSON.stringify(formData))
   
    console.log(formData);
    }

    
    refs.form.addEventListener('input', throttle(onFormInput, 500));
let saveMsg = JSON.parse(localStorage.getItem(KEY_FORM)) || "";

   
    
    


