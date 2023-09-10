import AssignmentIcon from "@mui/icons-material/Assignment";

export default function Header() {
  return (
    <header className="p-3 bg-primary text-white">
      <h1 className="d-flex justify-content-center">
        Todo List
        <span>
          <AssignmentIcon fontSize="large" />
        </span>
      </h1>
    </header>
  );
}
