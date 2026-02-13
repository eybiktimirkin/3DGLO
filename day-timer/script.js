const getGreeting = document.getElementById("greeting");
const getToday = document.getElementById("currentDate");
const getTime = document.getElementById("currentTime");
const getNewYear = document.getElementById("countdown");

greeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "Доброе утро";
  if (hour >= 11 && hour < 17) return "Добрый день";
  if (hour >= 17 && hour < 23) return "Добрый вечер";
  return "Доброй ночи";
};

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const today = days[new Date().getDay()];

const time = new Date().toLocaleTimeString("en", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const now = new Date();

const nextYear = new Date(now.getFullYear() + 1, 0, 1);
const diff = nextYear.getTime() - now.getTime();
const daysLeft = Math.ceil(diff / 86400000);

getGreeting.textContent = greeting();
getToday.textContent = `Сегодня: ${today}`;
getTime.textContent = `Текущее время: ${time}`;
getNewYear.textContent = `До нового года осталось ${daysLeft} дней `;
