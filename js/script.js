let weather = {
  apikey: "7570fab78a3787862b71f8a665af4527&units=metric",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "";
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".humidity").innerText =
      "Humidity : " + humidity + " %";
    document.querySelector(".wind").innerText =
      " Wind Speed : " + speed + " Km/h";
    document.querySelector(".weather").classList.remove("loading");
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};



document.querySelector(".search button")
  .addEventListener("click", function () {
  weather.search();

  });

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Denver");