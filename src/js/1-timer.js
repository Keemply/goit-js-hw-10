// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
let userSelectedDate = null;
const button = document.querySelector('button[data-start]');
button.setAttribute('disabled', true);
const values = document.querySelectorAll('.value');
const timer = {
  currentDate: '',
  selectedDate: '',
  intervalID: null,
  valueIndex: 0,
  tick() {
    const currentTick = convertMs(timer.selectedDate - timer.currentDate);
    timer.valueIndex = 0;
    Object.values(currentTick).forEach(value => {
      values[timer.valueIndex].textContent = value.toString().padStart(2, '0');
      timer.valueIndex++;
    });
    timer.selectedDate -= 1000;

    if (Object.values(currentTick).filter(value => value === 0).length === 4) {
      clearInterval(timer.intervalID);
      button.removeAttribute('disabled', false);
    }
  },
  startTimer() {
    timer.intervalID = setInterval(timer.tick, 1000);
    button.setAttribute('disabled', true);
  },
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() <= this.now) {
      iziToast.show({
        message: 'Please choose a date in the future',
        position: 'topRight',
        progressBar: false,
        backgroundColor: 'red',
        messageColor: 'white',
      });
      button.setAttribute('disabled', true);
    } else {
      button.removeAttribute('disabled', false);
      timer.currentDate = this.now.getTime();
      timer.selectedDate = userSelectedDate.getTime();
    }
  },
};
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
button.addEventListener('click', timer.startTimer);
const inpu = document.querySelector('#datetime-picker');
const check = flatpickr(inpu, options);
