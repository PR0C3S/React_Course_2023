import SpeedIcon from "@mui/icons-material/Speed";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/Container";

export default function Weather({
  weather,
  location,
  temperature,
  windSpeed,
  feelsLike,
  humidity,
  icon,
}) {
  return (
    <Card bg="primary" text="light" className="mt-4">
      <Card.Body>
        <h2 className="bold">{location}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${weather} image`}
        />
        <h1>{temperature.toFixed(0)}°C</h1>
        <h1>{weather}</h1>

        <Container className="mt-2">
          <Row>
            <Col xs={4}>
              <WaterDropIcon fontSize="large" />
              <h5>Humidity</h5>
              <h5>{humidity.toFixed(0)}%</h5>
            </Col>
            <Col xs={4}>
              <ThermostatIcon fontSize="large" />
              <h5>Feels Like</h5>
              <h5>{feelsLike.toFixed(0)} °C</h5>
            </Col>
            <Col xs={4}>
              <SpeedIcon fontSize="large" />
              <h5>Wind Speed</h5>
              <h5>{windSpeed.toFixed(2)}m/s</h5>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
