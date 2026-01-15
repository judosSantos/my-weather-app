function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searhFormElement = document.querySelector("#search-form");
searhFormElement.addEventListener("submit", handleSearchSubmit);
