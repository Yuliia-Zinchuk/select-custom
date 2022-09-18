//import countries from "./countries.json";
const countries = [
  {
    code: "US",
    name: "United States Of America",
  },
  {
    code: "UA",
    name: "Ukraine",
  },
  {
    code: "AD",
    name: "Andorra",
  },
  {
    code: "AI",
    name: "Anguilla",
  },
  {
    code: "AR",
    name: "Argentina",
  },
  {
    code: "AU",
    name: "Australia",
  },
];

const markupSelect = countries
  .map(
    (el) => `<div class="option">
  <input type="radio" class="radio" />
  <label for="film">${el.name}</label>
</div>`
  )
  .join("");
console.log(markupSelect);
console.log(countries);
console.log(countries[0].name);

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionsList = document.querySelectorAll(".option");

optionsContainer.insertAdjacentHTML("beforeend", markupSelect);

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
  console.log(e.target.value);
});

const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach((option) => {
    let label =
      option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
