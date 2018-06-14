declare namespace WetterCom {
  interface weatherData {
    events: weatherEvent[];
    text: string;
  }

  interface weatherEvent {
    time: string;
    value: number;
    color: string;
    short: string;
  }
}
