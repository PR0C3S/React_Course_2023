import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
export default function Filter({
  query,
  onChangeQuery,
  onClickSortBy,
  onOpenModal,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="search"
            placeholder="Search by description"
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
          />
        </Col>
        <Col md={"auto"}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Sorted By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => onClickSortBy("Description")}>
                Description
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onClickSortBy("Status-ASC")}>
                Status: Pending-Completed
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onClickSortBy("Status-DESC")}>
                Status: Completed-Pending
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onClickSortBy("Priority-ASC")}>
                Priority: Low-Normal-High
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onClickSortBy("Priority-DESC")}>
                Status: High-Normal-Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={"auto"}>
          <Button variant="primary" onClick={() => onOpenModal(null)}>
            New Task
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
