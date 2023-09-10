import Card from "react-bootstrap/Card";

export default function Message({ message, color }) {
  return (
    <Card bg={color} text="light" className="mt-4">
      <Card.Body>
        <Card.Title>{message}</Card.Title>
      </Card.Body>
    </Card>
  );
}
