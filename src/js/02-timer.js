// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const start = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

start.setAttribute('disabled', true);
start.addEventListener('click', onStartBtn);

let userDate;
const options = {
    enableTime: true, 
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userDate = selectedDates[0];
        if (userDate > Date.now()) {
            start.disabled = false;
        } else {
            Notify.failure("Please choose a date in the future");
        } 
      },
    };
    flatpickr("input#datetime-picker", options);


    function onStartBtn () {
        start.setAttribute('disabled', true);
        setInterval(() => {
            const currentTime = convertMs(userDate - Date.now());
    
            seconds.textContent = addLeadingZero(currentTime.seconds);
            minutes.textContent = addLeadingZero(currentTime.minutes);
            hours.textContent = addLeadingZero(currentTime.hours);
            days.textContent = addLeadingZero(currentTime.days);
            
        }, 1000);
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

    // Напиши функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.
    function addLeadingZero(value) {
        return value.toString().padStart(2, '0');
    }
      