// Setting our skills progress
let ourSkillsSection = document.querySelector("#our-skills");
let progressSpans = document.querySelectorAll("#our-skills .progessSpan");

window.onscroll = function () {
  if (window.scrollY >= ourSkillsSection.offsetTop) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// Setting stats goal
let statsSection = document.querySelector("#stats");
let statsNumber = document.querySelectorAll("#stats .number");
let started = false;
function count(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 2500 / goal);
}

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      statsNumber.forEach((num) => count(num));
    }
    started = true;
  }
};
