document.querySelectorAll(".accordion details").forEach((details) => {
  details.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !details.open) return;

    details.open = false;
    details.querySelector("summary")?.focus();
  });
});
