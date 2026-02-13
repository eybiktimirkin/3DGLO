const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    const fHours = hours < 10 ? "0" + hours : hours;
    const fMinutes = minutes < 10 ? "0" + minutes : minutes;
    const fSeconds = seconds < 10 ? "0" + seconds : seconds;

    return { timeRemaining, fHours, fMinutes, fSeconds };
  };

  let intervalId;

  const upDateClock = () => {
    let getTime = getTimeRemaining();
    timerHours.textContent = getTime.fHours;
    timerMinutes.textContent = getTime.fMinutes;
    timerSeconds.textContent = getTime.fSeconds;

    if (getTime.timeRemaining <= 0) {
      clearInterval(intervalId);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  intervalId = setInterval(upDateClock, 1000);

  upDateClock();
};

export default timer;
