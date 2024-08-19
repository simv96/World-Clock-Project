function updateTime() {
  let cityOneElement = document.querySelector("#city-one");
  let cityOneDateElement = cityOneElement.querySelector(".date");
  let cityOneTimeElement = cityOneElement.querySelector(".time");
  let cityOneTime = moment().tz("Europe/Rome");
  cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do YYYY");
  cityOneTimeElement.innerHTML = cityOneTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
  let cityTwoElement = document.querySelector("#city-two");
  let cityTwoDateElement = cityTwoElement.querySelector(".date");
  let cityTwoTimeElement = cityTwoElement.querySelector(".time");
  let cityTwoTime = moment().tz("Europe/Dublin");
  cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do YYYY");
  cityTwoTimeElement.innerHTML = cityTwoTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
  let cityThreeElement = document.querySelector("#city-three");
  let cityThreeDateElement = cityThreeElement.querySelector(".date");
  let cityThreeTimeElement = cityThreeElement.querySelector(".time");
  let cityThreeTime = moment().tz("America/Toronto");
  cityThreeDateElement.innerHTML = cityThreeTime.format("MMMM Do YYYY");
  cityThreeTimeElement.innerHTML = cityThreeTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citySelectTime = moment().tz(cityTimeZone);
  let cityInfoElement = document.querySelector("#allCitiesInfo");
  cityInfoElement.innerHTML = `<div class="cityInfo" id="city-one">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${citySelectTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${citySelectTime.format(
            "h:mm:ss"
          )} <small>${citySelectTime.format("A")}</small></div>
        </div>`;
}

updateTime();
//setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector(".list");
citiesSelectElement.addEventListener("change", updateCity);
