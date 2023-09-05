import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import Error from "./Components/Error";
import { useFetchData } from "./Hooks/useFetchData";

function App() {
  const [query, setQuery] = useState("");
  const { isLoading, data, error } = useFetchData(query);

  return (
    <div className="app">
      <Header />
      <Search query={query} setQuery={setQuery} />
      {isLoading && <Loader />}
      {!isLoading && !error && data && (
        <Weather
          location={data.location}
          weather={data.weather}
          temperature={data.temperature}
          windSpeed={data.windSpeed}
          feelsLike={data.feelsLike}
          icon={data.icon}
          humidity={data.humidity}
        />
      )}
      {error && <Error message={error} />}
    </div>
  );
}

export default App;
