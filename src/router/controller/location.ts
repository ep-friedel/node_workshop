import { geocode } from "../../modules/location";
import { setLocation as setWeatherLocation } from "../../modules/weatherWatcher";

export async function setLocation(req, res) {
  const city: string = req.body.city;

  try {
    const location: Core.location = await geocode(city);

    setWeatherLocation(location);
    res.status(200).json({ success: true, data: location });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
}
