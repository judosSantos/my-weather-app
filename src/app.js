function refreshTemperature(response) {
  let temperatureElement = document.querySelector(".degrees");
  let temperature = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "76ab2ecoa4e0c3c3807ad4cff1b5696t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unitsmetric`;
  axios.get(apiUrl).then(refreshTemperature);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityInput");
  searchCity(searchInput.value);
}

let searhFormElement = document.querySelector("#search-form");
searhFormElement.addEventListener("submit", handleSearchSubmit);

searchCity(Hamburg);
