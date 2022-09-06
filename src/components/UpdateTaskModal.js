import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

const UpdateTaskModal = ({
  setIsModal,
  setTaskUpdate,
  boardsList,
  boardIndex,
  editId,
  setEditId,
  currentBoard,
  show,
  setShow,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [showTask, setShowTask] = useState(false);

  // delete task based on id
  const deleteTask = (id) => {
    // filters the three task columns and updates without the given id
    const newTodos = currentBoard.todo.filter((todo) => todo.id !== id);
    currentBoard.todo = newTodos;
    const newDoing = currentBoard.doing.filter((todo) => todo.id !== id);
    currentBoard.doing = newDoing;
    const newDone = currentBoard.done.filter((done) => done.id !== id);
    currentBoard.done = newDone;
    setIsModal(false);
    setTaskUpdate(false);
    localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
  };

  // returns the task id on the find that returns true | try to map in the future
  const editedTask =
    currentBoard.todo.find((todo) => todo.id === editId) ||
    currentBoard.doing.find((todo) => todo.id === editId) ||
    currentBoard.done.find((todo) => todo.id === editId);

  // set the input values to the latest state values
  const updateTask = useCallback(() => {
    setTitle(editedTask.title);
    setDescription(editedTask.description);
    setStatus(editedTask.status);
  }, [editedTask.description, editedTask.title, editedTask.status]);

  // loads the current data to update inputs
  useEffect(() => {
    updateTask();
  }, [updateTask]);

  // do the actual update pushing the task into the new list based on the task status and updating the current tasks columns (todo, doing, done) to the new values
  const handleUpdate = () => {
    updateTask();
    if (editedTask.status !== status && status === "doing") {
      currentBoard.doing.push({
        id: editedTask.id,
        title,
        description,
        status,
        isCompleted: false,
      });
      const newTodos = currentBoard.todo.filter((todo) => todo.id !== editId);
      currentBoard.todo = newTodos;
      const newDone = currentBoard.done.filter((done) => done.id !== editId);
      currentBoard.done = newDone;
    }
    if (editedTask.status !== status && status === "done") {
      currentBoard.done.push({
        id: editedTask.id,
        title,
        description,
        status,
        isCompleted: true,
      });
      const newTodos = currentBoard.todo.filter((todo) => todo.id !== editId);
      currentBoard.todo = newTodos;
      const newDoing = currentBoard.doing.filter((todo) => todo.id !== editId);
      currentBoard.doing = newDoing;
    }
    if (editedTask.status !== status && status === "todo") {
      currentBoard.todo.push({
        id: editedTask.id,
        title,
        description,
        status,
        isCompleted: false,
      });
      const newDoing = currentBoard.doing.filter((todo) => todo.id !== editId);
      currentBoard.doing = newDoing;
      const newDone = currentBoard.done.filter((done) => done.id !== editId);
      currentBoard.done = newDone;
    } else {
      editedTask.title = title;
      editedTask.description = description;
    }
    setIsModal(false);
    setTaskUpdate(false);
    localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
  };

  // sets the current values as soon as the modal renders

  // useEffect(() => {
  //   updateTask();
  // }, [updateTask]);

  const resetModal = () => {
    setIsModal(false);
    setTaskUpdate(false);
  };

  return (
    <>
      <article className="modal create-task" onClick={resetModal}></article>
      <div className="create-task-container">
        <div className="heading-container">
          <h2 className="heading">Edit task</h2>
          <IoEllipsisVerticalOutline
            className="ellipsis-task"
            onClick={() => setShowTask(!showTask)}
          />
          <div className={showTask ? "edit-menu-task" : "edit-menu hidden"}>
            <ul>
              <li className="red" onClick={() => deleteTask(editId)}>
                delete task
              </li>
            </ul>
          </div>
        </div>

        <form className="add-board-form">
          <label htmlFor="title">title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">description</label>
          <textarea
            name="description"
            cols="40"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="status">status</label>
          <select
            className="select"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">todo</option>
            <option value="doing">doing</option>
            <option value="done">done</option>
          </select>
        </form>
        <button className="btn" onClick={handleUpdate}>
          update task
        </button>
      </div>
    </>
  );
};

export default UpdateTaskModal;
