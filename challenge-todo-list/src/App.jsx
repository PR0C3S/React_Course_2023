import { useState } from "react";
import ModalComponent from "./Components/Container/Modal";
import FormTask from "./Components/Pure/Form/FormTask";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Filter from "./Components/Pure/Filter";
import Header from "./Components/Pure/Header";
import TaskList from "./Components/Container/TaskList";
import { useLocalStorageState } from "./Components/Hooks/useLocalStorageStage";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useLocalStorageState([], "tasks");
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [alert, setAlert] = useState(null);
  const [sortBy, setSortBy] = useState("Status-ASC");
  const [query, setQuery] = useState("");

  function handleOpenModal(task) {
    setSelectedTask(task);
    setShowModal(true);
    setAlert(null);
  }
  function handleOpenDeleteModal(task) {
    setSelectedTask(task);
    setDeleteModal(true);
    setAlert(null);
  }

  function handleCloseModal() {
    setSelectedTask(null);
    setShowModal(false);
  }
  function handleCloseDeleteModal() {
    setSelectedTask(null);
    setDeleteModal(false);
  }

  function handleAddTask(task) {
    const newArray = [...tasks, task];
    setTasks(newArray);
    setAlert({
      messsage: `Task ID: "${task.id}" was added.`,
      color: "success",
    });
    handleCloseModal();
  }

  function handleDeleteTask() {
    const newList = tasks.filter((task) => task.id !== selectedTask.id);
    setTasks(newList);
    setAlert({
      messsage: `Task ID: "${selectedTask.id}" was deleted.`,
      color: "danger",
    });
    handleCloseDeleteModal();
  }

  function handleUpdateTask(newTask) {
    const newList = tasks.map((task) =>
      task.id === newTask.id
        ? {
            ...task,
            isCompleted: newTask.isCompleted,
            description: newTask.description,
            priority: newTask.priority,
            dateToFinish: newTask.dateToFinish,
          }
        : task
    );
    setTasks(newList);
    setAlert({
      messsage: `Task ID: "${selectedTask.id}" was updated.`,
      color: "warning",
    });
    handleCloseModal();
  }

  function handleToggleStatus(updateTask) {
    const newList = tasks.map((task) =>
      task.id === updateTask.id
        ? { ...task, isCompleted: !updateTask.isCompleted }
        : task
    );
    setTasks(newList);
    setAlert({
      messsage: `Task ID: "${updateTask.id}" was updated.`,
      color: "warning",
    });
  }

  function handleChangeQuery(word) {
    setQuery(word);
    if (alert) {
      setAlert(null);
    }
  }

  function handleSortBy(sortType) {
    setSortBy(sortType);
    if (alert) {
      setAlert(null);
    }
  }

  return (
    <>
      <Header />
      <Card body>
        <Filter
          onClickSortBy={handleSortBy}
          query={query}
          onChangeQuery={handleChangeQuery}
          onOpenModal={handleOpenModal}
        />

        {alert && (
          <Alert
            className="d-flex justify-content-center mt-2"
            variant={alert.color}
          >
            {alert.messsage}
          </Alert>
        )}
        <TaskList
          tasks={tasks}
          onOpenUpdateModal={handleOpenModal}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleOpenDeleteModal}
          onToggleStatus={handleToggleStatus}
          sortBy={sortBy}
          filter={query}
        />
      </Card>

      {showModal && (
        <ModalComponent
          onCloseModal={handleCloseModal}
          title={selectedTask ? `Edit Task ${selectedTask.id}` : "New Task"}
          formID={selectedTask ? "editTaskForm" : "newTaskForm"}
        >
          <FormTask
            formID={selectedTask ? "editTaskForm" : "newTaskForm"}
            initialData={selectedTask}
            onSubmit={selectedTask ? handleUpdateTask : handleAddTask}
          />
        </ModalComponent>
      )}

      {showDeleteModal && (
        <ModalComponent
          title={`Delete Task ${selectedTask.id}`}
          onCloseModal={handleCloseDeleteModal}
          buttonAcceptText="Delete"
          buttonAcceptStyle="danger"
          onSubmit={handleDeleteTask}
        >
          <p style={{ color: "red" }}>
            {"Are you sure you want to delete this task?"}
          </p>
        </ModalComponent>
      )}
    </>
  );
}
