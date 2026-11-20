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

/*opsamling*/
if(opsamlingPlaceholder) {
  const kortParams = new URLSearchParams(window.location.search);
  const hold = kortParams.get("hold") === "day" ? "day" : "night";
  const element = (kortParams.get("behandling") || "ild").toLowerCase();

  const datoer = {
    night: "d. 11.12.2026, klokken 22:00",
    day: "d. 12.12.2026, klokken 10:00"
  };

const symboler = {
  ild: "img/ild.svg",
  vand: "img/vand.svg",
  jord: "img/jord.svg",
  luft: "img/luft.svg"

};

opsamlingPlaceholder.classList.add(hold);

opsamlingPlaceholder.innerHTML = `
<h1>Tak for din tilmelding</h1>
<p>Du er nu tilmeldt Sansehyttens Saunagus</p>
<h2 class="datotekst">${datoer[hold]}</h2>
<p>
Vi glæder os til at se dig og guide dig igennem de fire elementer: vand, ild, jord og luft.
Det bliver en sanselig oplevelse, der kan styrke din ro og forbindelse til dig selv.
</p>
<p>Vi anbefaler, at du kommer 15 minutter før din session, så du kan ankomme i ro og mag.</p>
<p>
Du finder os på Refshalevej 143. Har du spørgsmål, eller kan du ikke komme alligevel, så skriv til os på sansehytten@gmail.com senest 12 timer før. Vi ses snart!
</p>
<p class="farvelp">- Sanse Hytten</p>
<img class="symbol" src="${symboler[element] || symboler.ild}" alt="${element}">`;
}

