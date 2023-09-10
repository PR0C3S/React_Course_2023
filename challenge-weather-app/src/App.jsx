import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import { useFetchData } from "./Hooks/useFetchData";
import Message from "./Components/Message";

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
      {!isLoading && !error && !data && (
        <Message message="Search a country/city to start" color="primary" />
      )}
      {error && <Message message={error} color="danger" />}
    </div>
  );
}

export default App;
