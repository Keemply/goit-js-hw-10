import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
console.log('bar');
const form = document.querySelector('.form');
const input = form.children[0].children[0];
const snackBar = {
  inputValue: null,
};
function inputHandler() {
  snackBar.inputValue = input.value;
  console.log(input.value);
  console.log(form);
}
function submitHandler(event) {
  event.preventDefault();
  const check = event.originalTarget[2].checked;
  form.reset();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve(
          iziToast.show({
            message: `✅ Fulfilled promise in ${snackBar.inputValue}ms`,
            backgroundColor: 'red',
            position: 'topRight',
            messageColor: 'white',
            progressBar: false,
            close: false,
          })
        );
      } else {
        reject(
          iziToast.show({
            message: `❌ Rejected promise in ${snackBar.inputValue}ms`,
            backgroundColor: 'red',
            position: 'topRight',
            messageColor: 'white',
            progressBar: false,
            close: false,
          })
        );
      }
    }, snackBar.inputValue);
  });
}
input.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);
