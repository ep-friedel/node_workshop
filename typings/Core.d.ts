declare namespace Core {
  interface location {
    lat: number;
    long: number;
  }

  interface weatherData {
    value: number;
    time: number;
    color: string;
    text: string;
  }
}
