import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();

  const delay = Number(form.querySelector("input[name='delay']").value);
  const step = Number(form.querySelector("input[name='step']").value);
  const amount = Number(form.querySelector("input[name='amount']").value);

  for (let i = 1; i <= amount; i += 1) {
     createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
     .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }

  form.reset();

}

function createPromise(position, delay) {

  const promiseObject = {position, delay};
  
  const shouldResolve = Math.random() > 0.3;

  return new Promise ((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      resolve(promiseObject)
    } else {
      // Reject
      reject(promiseObject)
    }
  }, delay)
})
}