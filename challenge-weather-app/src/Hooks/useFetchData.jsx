import { useEffect, useState } from "react";

const API_KEY = "6fe736c53b8b305abd8da9c3339a447a";
export function useFetchData(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(
    function () {
      const controller = new AbortController();

      async function getData() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            if (res.status === 404) {
              throw new Error("City / Country not found");
            } else {
              throw new Error("Something went wrong with fetching weather");
            }
          }
          const data = await res.json();
          const weather = {
            weather: data.weather.at(0).main,
            location: `${data.name}, ${data.sys.country}`,
            feelsLike: data.main.feels_like,
            temperature: data.main.temp,
            windSpeed: data.wind.speed,
            icon: data.weather.at(0).icon,
            humidity: data.main.humidity,
          };
          setData(weather);
          setError("");
        } catch (error) {
          setData(null);
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setData(null);
        if (query.length === 0) {
          setError("");
        } else {
          setError("The minimun lenght for search is 3 characters");
        }
        return;
      }
      getData();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { isLoading, data, error };
}
