const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: ''
};

const trimFormValues = () => {
  formData.email = formData.email.trim();
  formData.message = formData.message.trim();
};

window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email;
    form.message.value = formData.message;
  }
});

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  trimFormValues();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  trimFormValues();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
  }
});
