import TaskComponent from "../Pure/TaskComponent";
import Table from "react-bootstrap/Table";

export default function TaskList({
  tasks,
  onToggleStatus,
  onDeleteTask,
  onUpdateTask,
  onOpenUpdateModal,
  sortBy,
  filter,
}) {
  let sortedItems;
  if (filter) {
    sortedItems = tasks.filter((task) =>
      task.description.toUpperCase().includes(filter.toUpperCase())
    );
  } else {
    sortedItems = tasks;
  }
  if (sortBy === "Status-ASC") {
    sortedItems = sortedItems.sort((a, b) => a.isCompleted - b.isCompleted);
  }
  if (sortBy === "Status-DESC") {
    sortedItems = sortedItems.sort((a, b) => b.isCompleted - a.isCompleted);
  }

  if (sortBy === "Description") {
    sortedItems = sortedItems.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortBy === "Priority-DESC") {
    sortedItems = sortedItems.sort(
      (a, b) => b.priority.level - a.priority.level
    );
  }

  if (sortBy === "Priority-ASC") {
    sortedItems = sortedItems.sort(
      (a, b) => a.priority.level - b.priority.level
    );
  }

  return (
    <div className="table-responsive">
      <Table hover>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Date to finish</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/** TODO: Iterar sobre una lista de tareas */}
          {sortedItems.length > 0 ? (
            sortedItems.map((task, index) => (
              <TaskComponent
                task={task}
                key={index}
                onToggleStatus={onToggleStatus}
                onDeleteTask={onDeleteTask}
                onUpdateTask={onUpdateTask}
                onOpenUpdateModal={onOpenUpdateModal}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <h5 className="d-flex justify-content-center">
                  No items added
                </h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
