import { PRIORITYS } from "../../models/Priority.Enum";
import Badge from "react-bootstrap/Badge";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const taskCompleted = {
  color: "red",
  fontWeight: "bold",
  textDecoration: "line-through",
};

export default function TaskComponent({
  task,
  onToggleStatus,
  onDeleteTask,
  onOpenUpdateModal,
}) {
  function badgePriority() {
    let color = "";
    switch (task.priority.name) {
      case PRIORITYS.High.name:
        color = "danger";
        break;
      case PRIORITYS.Normal.name:
        color = "warning";
        break;
      default:
        color = "secondary";
        break;
    }
    return <Badge bg={color}>{task.priority.name}</Badge>;
  }

  function toggleStatus() {
    if (task.isCompleted) {
      return (
        <>
          <CheckBoxIcon
            onClick={() => onToggleStatus(task)}
            color="success"
            cursor="pointer"
          />
          Completed
        </>
      );
    } else {
      return (
        <>
          <CheckBoxOutlineBlankIcon
            onClick={() => onToggleStatus(task)}
            color="gray"
            cursor="pointer"
          />
          Pending
        </>
      );
    }
  }
  const today = new Date().toISOString().split("T")[0];
  return (
    <tr
      className={
        task.isCompleted
          ? "table-success"
          : today > task.dateToFinish
          ? "table-danger"
          : ""
      }
      style={task.isCompleted ? taskCompleted : null}
    >
      <th>
        <span className="ms-2">{task.id}</span>
      </th>
      <th>
        <span className="ms-2">{task.description}</span>
      </th>
      <th>
        <span className="ms-2">{badgePriority()}</span>
      </th>
      <th>
        <span className="ms-2">{task.dateToFinish}</span>
      </th>
      <th>
        <span className="ms-2">{toggleStatus()}</span>
      </th>
      <th>
        <span className="ms-2">
          <EditIcon onClick={() => onOpenUpdateModal(task)} cursor="pointer" />
          <DeleteIcon onClick={() => onDeleteTask(task)} cursor="pointer" />
        </span>
      </th>
    </tr>
  );
}
