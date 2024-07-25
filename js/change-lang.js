"use strict";

const changeLangWrap = document.querySelector(".header__change-lang-btns"),
  changeLangBtns = document.querySelectorAll(".header__change-lang-btn");

if (window.innerWidth < 800) {
  changeLangWrap.classList.add("header__change-lang-btns--hidden");
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 820) {
    changeLangWrap.classList.add("header__change-lang-btns--hidden");

    changeLangBtns.forEach((btn) => {
      if (!btn.classList.contains("header__change-lang-btn--active")) {
        btn.style.visibility = "hidden";

        setTimeout(() => {
          btn.style.display = "none";
        }, 50);
      }
    });
  } else {
    changeLangWrap.classList.remove("header__change-lang-btns--hidden");

    changeLangBtns.forEach((btn) => {
      if (!btn.classList.contains("header__change-lang-btn--active")) {
        btn.style.visibility = "visible";

        setTimeout(() => {
          btn.style.display = "block";
        }, 50);
      }
    });
  }
});

function openBtns() {
  changeLangWrap.classList.add("header__change-lang-btns--active");
  changeLangBtns.forEach((btn) => {
    btn.style.display = "block";

    setTimeout(() => {
      btn.style.visibility = "visible";
    }, 100);
  });
}

function closeBtns() {
  changeLangBtns.forEach((btn) => {
    if (!btn.classList.contains("header__change-lang-btn--active")) {
      btn.style.visibility = "hidden";

      setTimeout(() => {
        btn.style.display = "none";
      }, 50);
    }
  });

  changeLangWrap.classList.remove("header__change-lang-btns--active");
}

function removeActive() {
  changeLangBtns.forEach((btn) => {
    btn.classList.remove("header__change-lang-btn--active");
  });
}

function changeLang(target) {
  switch (true) {
    case target.classList.contains("header__change-lang-english"): {
      console.log("language changed to english");
      break;
    }
    case target.classList.contains("header__change-lang-spanish"): {
      console.log("language changed to spanish");
      break;
    }
    case target.classList.contains("header__change-lang-french"): {
      console.log("language changed to french");
      break;
    }
  }
}

changeLangWrap.addEventListener("click", (e) => {
  let target = e.target;

  if (changeLangWrap.classList.contains("header__change-lang-btns--hidden")) {
    if (target.classList.contains(`header__change-lang-btn--active`)) {
      openBtns();
      removeActive();
    } else {
      target.classList.add("header__change-lang-btn--active");
      changeLang(target);
      closeBtns();
    }
  } else {
    changeLang(target);
  }
});
