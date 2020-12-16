import "./styles.css";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
};

function changeBodyColor() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  const color = colors[colorIndex];
  document.body.style.background = color;
}

let timer = null;
refs.startBtn.addEventListener("click", function (event) {
  event.target.disabled = true;
  timer = setInterval(changeBodyColor, 1000);
});

refs.stopBtn.addEventListener("click", function () {
  refs.startBtn.disabled = false;
  clearInterval(timer);
});
