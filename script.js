document.querySelectorAll(".video-thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("mouseenter", function () {
    this.querySelector("video").play();
  });

  thumbnail.addEventListener("mouseleave", function () {
    this.querySelector("video").pause();
  });
});

function toggleExplanation(id) {
  const explanation = document.getElementById(id);
  explanation.style.display =
    explanation.style.display === "none" || explanation.style.display === ""
      ? "block"
      : "none";
}
