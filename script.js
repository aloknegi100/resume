document.getElementById("nav").addEventListener("click", function (e) {
  document.getElementById("menu").style.display = "flex";
});

document
  .getElementsByClassName("c")[0]
  .addEventListener("click", function (event) {
    // document.getElementById("menu").style.display = "none";

    let d = document.getElementById("about").getBoundingClientRect().top;
    event.preventDefault();
    let x = 0;
    setInterval(function () {
      x += 30;
      if (x <= d) {
        window.scrollBy(0, 30);
      }
    }, 10);
  });

document
  .getElementsByClassName("c")[1]
  .addEventListener("click", function (event) {
    // document.getElementById("menu").style.display = "none";

    let d = document
      .getElementById("skills-display")
      .getBoundingClientRect().top;
    event.preventDefault();
    let x = 0;
    setInterval(function () {
      if (x <= d) {
        window.scrollBy(0, 30);
      }
      x += 30;
    }, 10);
  });
document
  .getElementsByClassName("c")[2]
  .addEventListener("click", function (event) {
    // document.getElementById("menu").style.display = "none";

    let d = document
      .getElementById("workexperience")
      .getBoundingClientRect().top;
    event.preventDefault();
    let x = 0;
    setInterval(function () {
      if (x <= d) {
        window.scrollBy(0, 30);
      }
      x += 30;
    }, 10);
  });
document
  .getElementsByClassName("c")[3]
  .addEventListener("click", function (event) {
    // document.getElementById("menu").style.display = "none";

    let d = document.getElementById("education").getBoundingClientRect().top;
    event.preventDefault();
    let x = 0;
    setInterval(function () {
      if (x <= d) {
        window.scrollBy(0, 30);
      }
      x += 30;
    }, 10);
  });
document
  .getElementsByClassName("c")[4]
  .addEventListener("click", function (event) {
    // document.getElementById("menu").style.display = "none";

    let d = document
      .getElementById("portfolio-container")
      .getBoundingClientRect().top;
    event.preventDefault();
    let x = 0;
    setInterval(function () {
      if (x <= d) {
        window.scrollBy(0, 30);
      }
      x += 30;
    }, 10);
  });

document
  .getElementsByClassName("c")[5]
  .addEventListener("click", function (event) {
    // document.getElementById("menu").style.display = "none";

    let d = document.getElementById("contactlinks").getBoundingClientRect().top;
    event.preventDefault();
    let x = 0;
    setInterval(function () {
      if (x <= d) {
        window.scrollBy(0, 30);
      }
      x += 30;
    }, 10);
  });

bars = document.querySelectorAll(".skill-section div div");
var bool = false;
function initialiseBars() {
  for (let i of bars) {
    i.style.width = 0 + "%";
  }
}
initialiseBars();
window.addEventListener("scroll", function () {
  var s = document.querySelector(".skill-section");
  var height = s.getBoundingClientRect().top;
  if (!bool && height < window.innerHeight) {
    bool = true;
    fill();
  } else if (height > this.window.innerHeight) {
    bool = false;
    initialiseBars();
  }
});

function fill() {
  for (let i of bars) {
    let m = 0;
    var interval = setInterval(function () {
      if (m < i.dataset.bar) {
        i.style.width = m + "%";
      } else {
        clearInterval(interval);
        return;
      }
      m++;
    }, 10);
  }
}
let scroll = document.getElementById("scroll");
window.addEventListener("scroll", function () {
  let h = this.window.scrollY;
  let totalHeight = this.document.body.scrollHeight - this.window.innerHeight;
  let percentage = parseInt(eval((h * 100) / totalHeight));
  scroll.innerText = percentage + "% Viewed";
});
