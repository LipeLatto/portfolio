const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        let opacity = 0;
        let y = 20;

        function fadeIn() {
          opacity += 0.5;
          y -= 0.8;

          entry.target.style.opacity = opacity;
          entry.target.style.transform = `translateY(${y}px)`;

          if (opacity < 1) {
            requestAnimationFrame(fadeIn);
          }
        }

        fadeIn();

      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(20px)";
      }

    });
  },
  { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));
