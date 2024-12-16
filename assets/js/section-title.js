document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll("section .section-title");

  titles.forEach((title) => {
    const underline = document.createElement("span");
    underline.classList.add("gradient-underline");
    title.appendChild(underline);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  titles.forEach((title) => {
    observer.observe(title);
  });
});

