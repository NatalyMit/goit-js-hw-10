import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const daysTime = document.querySelector('[data-days]');
const hoursTime = document.querySelector('[data-hours]');
const minutesTime = document.querySelector('[data-minutes]');
const secondsTime = document.querySelector('[data-seconds]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0].getTime();
    console.log(selectedDates[0]);
    onValidUserSelected(userSelectedDate);
  },
};
flatpickr('#datetime-picker', options);
class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
    this.isActive = false;
    this.intervalId = null;
    buttonEl.disabled = true;
  }
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    const idInterval = (this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const someTime = userSelectedDate - currentTime;
      const time = convertMs(someTime);

      this.onTick(time);
      buttonEl.disabled = true;
      inputEl.disabled = true;

      if (someTime < 1000) {
        iziToast.show({
          title: 'Congratulations',
          messageColor: 'white',
          message: 'Finish. You can use the timer again',
          position: 'topCenter',
          color: 'green',
        });

        clearInterval(idInterval);
        this.isActive = false;
        // const time = this.convertMs(0);
        this.onTick(time);
      }
    }, 1000));
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  daysTime.textContent = `${days}`.padStart(2, '0');
  hoursTime.textContent = `${hours}`.padStart(2, '0');
  minutesTime.textContent = `${minutes}`.padStart(2, '0');
  secondsTime.textContent = `${seconds}`.padStart(2, '0');
}

const timer = new Timer({
  onTick: addLeadingZero,
});
function onValidUserSelected(userSelectedDate) {
  if (userSelectedDate < Date.now()) {
    buttonEl.disabled = true;
    iziToast.show({
      title: 'Error',
      messageColor: 'white',
      message: 'Please choose a date in the future!',
      position: 'topCenter',
      color: 'red',
    });
  } else {
    buttonEl.disabled = false;
    iziToast.show({
      title: 'Good work',
      messageColor: 'white',
      message: 'Start?',
      position: 'topCenter',
      color: 'green',
    });
  }
}
buttonEl.addEventListener('click', timer.start.bind(timer));
