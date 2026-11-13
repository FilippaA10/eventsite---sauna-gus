// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

if (svgPlaceholder) {
  const firstDetails = document.querySelector("#details-first");
  const secondDetails = document.querySelector("#details-second");
  const thirdDetails = document.querySelector("#details-third");
  const fourthDetails = document.querySelector("#details-fourth");

  function updateSvgPosition() {
    const openDetails = document.querySelector(".accordion-item[open]");
    if (openDetails) {
      svgPlaceholder.dataset.position = openDetails.dataset.position;
    } else {
      delete svgPlaceholder.dataset.position;
    }
  }

  firstDetails.addEventListener("toggle", updateSvgPosition);
  secondDetails.addEventListener("toggle", updateSvgPosition);
  thirdDetails.addEventListener("toggle", updateSvgPosition);
  fourthDetails.addEventListener("toggle", updateSvgPosition);

  updateSvgPosition(); // så Ild er fremhævet fra start, fordi den har "open"
}
