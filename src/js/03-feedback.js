import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', resetData);

updateForm();
const formData = {};

function saveData(evt) {
  evt.preventDefault();

  formData[evt.target.name] = evt.target.value;

  // const formElements = evt.currentTarget.elements;
  // const email = formElements.email.value;
  // const message = formElements.message.value;
  // const dataForm = { email, message };

  // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function updateForm() {
  const saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (saveData) {
    form.elements.email.value = saveData.email || '';
    form.elements.message.value = saveData.message || '';
  }
}

function resetData(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}
