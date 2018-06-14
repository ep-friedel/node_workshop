import * as geocoder from "node-geocoder";

const options: geocoder.Options = {
  provider: "openstreetmap"
};

const gc: geocoder.Geocoder = geocoder(options);

export function geocode(city: string): Promise<Core.location> {
  return new Promise((resolve, reject) => {
    gc.geocode(city, (err, res) => {
      if (err) reject(err);

      const location: Core.location = {
        lat: res[0].latitude,
        long: res[0].longitude
      };

      resolve(location);
    });
  });
}
