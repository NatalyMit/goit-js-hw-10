import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
  console.log(e);
  e.preventDefault();

  let delay = formEl.delay.value;

  const selectedState = formEl.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delay);
      } else if (selectedState === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(response => {
      iziToast.show({
        messageColor: 'white',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        backgroundColor: 'green',
      });
    }, delay)
    .catch(error => {
      iziToast.show({
        messageColor: 'white',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        color: 'red',
      });
    }, delay);
  e.currentTarget.reset();
});
