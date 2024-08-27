document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".splide");

  console.log(slides);

  slides.forEach((slide) => {
    console.log(slide);
    new Splide(slide, {
      pagination: false,
      type: "loop",
      perPage: 1,
      perMove: 1,
      arrows: true,
      mediaQuery: "min",
      breakpoints: {
        768: {
          perPage: 3,
        },
        1024: {
          perPage: 4,
        }
      },
    }).mount();
  });
});
