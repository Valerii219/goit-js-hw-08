const e={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};e.form.addEventListener("submit",onFormInput),e.input.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t)})),e.textarea.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t)})),function(t){const o=localStorage.getItem("feedback-form-state");o&&(console.log(o),e.textarea.value=o)}();
//# sourceMappingURL=03-feedback.8884b859.js.map
