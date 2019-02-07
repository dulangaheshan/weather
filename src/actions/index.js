import axios from "axios";
export const FETCH_WEATHER = "fetch_posts";
const Api_Key = "3472f85c5a93466aea8a40db53de8a9b";

export function fetchweather(ci) {
  const request = axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${ci}&appid=${Api_Key}`
  );

  //   const request = axios.get(
  //     `http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${Api_Key}`
  //   );
  // console.log(city);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
