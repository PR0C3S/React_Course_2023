import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <Card bg="primary" text="light" className="mt-4">
      <Card.Body>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Card.Body>
    </Card>
  );
}
