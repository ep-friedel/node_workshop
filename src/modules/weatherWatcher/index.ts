import { deleteWeather, insertWeather } from "../db/weather";
import { fetchWeather, parseWeather } from "./api";
let location: Core.location;

setInterval(async () => {
  console.log("interval");
  if (location) {
    try {
      console.log("setData");
      const rawWeatherData = await fetchWeather(location);
      const weatherData = parseWeather(rawWeatherData);
      insertWeather(weatherData);
    } catch (error) {
      console.log(error);
    }
  }
}, 1000 * 60);

export async function setLocation(newLocation: Core.location) {
  if (
    newLocation &&
    (!location ||
      location.lat !== newLocation.lat ||
      location.long !== newLocation.long)
  ) {
    try {
      await deleteWeather();
      location = newLocation;
    } catch (error) {
      console.log(error);
      return Promise.reject({ success: false, error });
    }
  }
}
