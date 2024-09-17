import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
// if (check) {
//     resolve();
//     iziToast.show({
//       message: `✅ Fulfilled promise in ${delay}ms`,
//       backgroundColor: 'red',
//       position: 'topRight',
//       messageColor: 'white',
//       progressBar: false,
//       close: false,
//     });
//   } else {
//     reject();
//     iziToast.show({
//       message: `❌ Rejected promise in ${delay}ms`,
//       backgroundColor: 'red',
//       position: 'topRight',
//       messageColor: 'white',
//       progressBar: false,
//       close: false,
//     });
//   }
// }

function submitHandler(event) {
  event.preventDefault();
  const check = event.target[2].checked;
  const delay = event.target[0].value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve(exect(check, delay));
      } else {
        reject(exect(check, delay));
      }
    }, delay);
  });
  form.reset();
}
function exect(value, delay) {
  if (value) {
    iziToast.show({
      message: `✅ Fulfilled promise in ${delay}ms`,
      backgroundColor: 'red',
      position: 'topRight',
      messageColor: 'white',
      progressBar: false,
      close: false,
    });
  } else {
    iziToast.show({
      message: `❌ Rejected promise in ${delay}ms`,
      backgroundColor: 'red',
      position: 'topRight',
      messageColor: 'white',
      progressBar: false,
      close: false,
    });
  }
}

form.addEventListener('submit', submitHandler);
