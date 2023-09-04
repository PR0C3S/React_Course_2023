import { useRef } from "react";
import Form from "react-bootstrap/Form";

export default function Search({ query, setQuery }) {
  const inputEl = useRef("");

  return (
    <Form.Control
      size="lg"
      className="search"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search City / Country"
      ref={inputEl}
    />
  );
}
