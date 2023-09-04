import Card from "react-bootstrap/Card";

export default function Error({ message }) {
  return (
    <Card bg="danger" text="light" className="mt-4">
      <Card.Body>
        <Card.Title>{message}</Card.Title>
      </Card.Body>
    </Card>
  );
}
