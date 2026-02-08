const ctas = document.querySelectorAll(".cta");

ctas.forEach((button) => {
  button.addEventListener("click", () => {
    button.animate(
      [
        { transform: "scale(1)", boxShadow: "0 12px 32px rgba(124, 243, 255, 0.3)" },
        { transform: "scale(1.05)", boxShadow: "0 18px 40px rgba(176, 124, 255, 0.4)" },
        { transform: "scale(1)", boxShadow: "0 12px 32px rgba(124, 243, 255, 0.3)" },
      ],
      {
        duration: 400,
        easing: "ease-in-out",
      }
    );
  });
});
