import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', e => {
  console.log(e);
  e.preventDefault();

  createPromise(value, delay);
});
let delay = Number(e.currentTarget.delay.value);
// function onSubmitForm(e) {

// }

function createPromise(value, delay) {
  const shouldResolve = e.currentTarget.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((shouldResolve = fulfilled)) {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });

  promise
    .then((value, delay) => {
      setTimeout(() => {
        iziToast.show({
          title: 'Congratulations',
          messageColor: 'rose',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topCenter',
          color: 'green',
        });
      });
    }, delay)
    .catch((value, delay) => {
      setTimeout(() => {
        iziToast.show({
          title: 'Looser',
          messageColor: 'black',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topCenter',
          color: 'red',
        });
      });
    }, delay);
  e.currentTarget.reset();
}
