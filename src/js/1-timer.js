// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const inpu = document.querySelector('#datetime-picker');
const check = flatpickr(inpu, options);
console.log(inpu);
let userSelectedDate = selectedDates[0];
console.log(userSelectedDate);
