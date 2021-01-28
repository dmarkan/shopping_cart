let slika = document.querySelector("#slika");
let korpa = document.querySelector("#korpa");
let formular = document.querySelector(".formular");
let tekst = document.querySelector("#tekst");
let sifra = document.querySelector("#sifra");


function scrollWin(x, y) {
  window.scrollBy(x, y);
}

slika.addEventListener("dblclick", function() {
  slika.style.zoom = 1.2;
  slika.style.cursor = zoom-out;
})

slika.addEventListener("click", function() {
  slika.style.zoom = 1;
})

korpa.addEventListener("click", function() {
  let proizvod = document.querySelector("#sifra").textContent;
  document.getElementById("tekst").value = proizvod;
  formular.style.visibility = "visible";
})
