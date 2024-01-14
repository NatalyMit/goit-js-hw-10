import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  console.log(e);
  e.preventDefault();

  let delay = formEl.delay.value;

  const shouldResolve = formEl.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve === 'fulfilled') {
        resolve(delay);
      } else if (shouldResolve === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        title: 'Congratulations',
        messageColor: 'rose',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        color: 'green',
      });
    }, delay)
    .catch(delay => {
      iziToast.show({
        title: 'Looser',
        messageColor: 'black',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        color: 'red',
      });
    }, delay);
  e.currentTarget.reset();
});
