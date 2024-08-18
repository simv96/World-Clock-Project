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
updateTime();

setInterval(updateTime, 1000);
