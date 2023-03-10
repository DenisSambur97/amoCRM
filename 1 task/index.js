const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const timeInterval = setInterval(() => {
      const hour = Math.floor(seconds / 60 / 60),
            minute = Math.floor(seconds / 60) - (hour * 60),
            second = seconds % 60
          
            let timeFormatted = [
              hour.toString().padStart(2, '0'),
              minute.toString().padStart(2, '0'),
              second.toString().padStart(2, '0')
            ].join(':')
            
            timerEl.innerHTML = `${timeFormatted}`

            seconds = seconds - 1
    }, 1000)

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9+]/g, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
