import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Task } from "../../../models/Task";
import { PRIORITYS } from "../../../models/Priority.Enum";

const generateID = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);
export default function FormTask({ initialData, onSubmit, formID }) {
  const [id] = useState(initialData?.id || generateID);
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [priority, setPriority] = useState(
    initialData?.priority || PRIORITYS.Normal
  );
  const [selectedDate, setSelectedDate] = useState(
    initialData?.dateToFinish || ""
  );
  const [isCompleted, setIsCompleted] = useState(
    initialData?.isCompleted || false
  );
  const isEdit = initialData ? true : false;
  const minDate = () => {
    let dateObj = new Date();
    // Subtract one day from current time
    dateObj.setDate(dateObj.getDate() - 1);
    return dateObj.toISOString().split("T")[0];
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = new Task(
      id,
      description.trim(),
      selectedDate,
      priority,
      isCompleted
    );
    onSubmit(newTask);
  }

  return (
    <form id={formID} onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Form.Group className="mb-3" controlId="form.controlDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              minLength={5}
              maxLength={80}
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="form.controlDateToFinish">
            <Form.Label>Date to finish</Form.Label>
            <Form.Control
              type="date"
              name="dateToFinish"
              value={selectedDate}
              min={minDate()}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="form.controlPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              name="priority"
              value={priority.name}
              onChange={(e) => {
                setPriority(PRIORITYS[e.target.value]);
              }}
              required
            >
              <option value={PRIORITYS.Low.name}>{PRIORITYS.Low.name}</option>
              <option value={PRIORITYS.Normal.name}>
                {PRIORITYS.Normal.name}
              </option>
              <option value={PRIORITYS.High.name}>{PRIORITYS.High.name}</option>
            </Form.Select>
          </Form.Group>
        </Row>
        {isEdit && (
          <Row>
            <Form.Group className="mb-3" controlId="form.controlIsCompleted">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="isCompleted"
                value={isCompleted}
                onChange={(e) => setIsCompleted(JSON.parse(e.target.value))}
                required
              >
                <option value={true}>Completed</option>
                <option value={false}>Pending</option>
              </Form.Select>
            </Form.Group>
          </Row>
        )}
      </Container>
    </form>
  );
}
