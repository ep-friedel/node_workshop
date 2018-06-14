import fetch from "node-fetch";

export async function fetchWeather(
  location: Core.location
): Promise<WetterCom.weatherData> {
  const url = "http://www.wetter.com/wetter_aktuell/nowcast_update";
  const weatherData = await fetch(
    `${url}/?lat=${location.lat}&lng=${location.long}`,
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }
  ).then(res => res.json());

  return weatherData;
}

export function parseWeather(
  weatherData: WetterCom.weatherData
): Core.weatherData[] {
  const events = weatherData.events;

  return events.map(event => {
    const dateObj = new Date();
    const [hours, minutes] = event.time.split(":");

    dateObj.setHours(Number(hours));
    dateObj.setMinutes(Number(minutes));
    dateObj.setSeconds(0);
    dateObj.setMilliseconds(0);

    return {
      ...event,
      text: event.short,
      time: dateObj.getTime()
    };
  });
}
