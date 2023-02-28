const app = document.querySelector(".advantage__app");
const list = document.querySelector(".advantage__list");
const item = document.querySelectorAll(".advantage__item");

const nextDiv = document.createElement("div");
nextDiv.classList.add("swiper-button-next");

const prevDiv = document.createElement("div");
prevDiv.classList.add("swiper-button-prev");

const fragment = document.createDocumentFragment();
fragment.appendChild(nextDiv);
fragment.appendChild(prevDiv);

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 515px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    app.classList.add("swiper");
    app.classList.add("mySwiper");
    list.classList.add("swiper-wrapper");

    app.classList.remove("advantage__app");
    list.classList.remove("advantage__list");

    for (let i = 0; i <= item.length - 1; i++) {
      item[i].classList.remove("advantage__item");
    }

    for (let i = 0; i <= item.length - 1; i++) {
      item[i].classList.add("swiper-slide");
    }

    app.appendChild(fragment);
  } else if (window.matchMedia("(min-width: 515px)").matches) {
    app.classList.remove("swiper");
    app.classList.remove("mySwiper");
    list.classList.remove("swiper-wrapper");

    for (let i = 0; i <= item.length - 1; i++) {
      item[i].classList.remove("swiper-slide");
    }

    app.classList.add("advantage__app");
    list.classList.add("advantage__list");

    for (let i = 0; i <= item.length - 1; i++) {
      item[i].classList.add("advantage__item");
    }
  }
});
