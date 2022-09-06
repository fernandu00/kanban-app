import { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateTaskModal = ({
  setIsModal,
  setIsCreatingTask,
  boardsList,
  currentBoard,
  boardIndex,
  setBoardIndex,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  // resets the modal
  const resetModal = () => {
    setIsModal(false);
    setIsCreatingTask(false);
  };

  // creates task into a given column (todo, doing, done) based on the status
  const createTask = (e) => {
    e.preventDefault();

    if (status === "doing") {
      currentBoard.doing.push({
        id: uuid(),
        title,
        description,
        status,
        isCompleted: false,
      });
    }
    if (status === "done") {
      currentBoard.done.push({
        id: uuid(),
        title,
        description,
        status,
        isCompleted: false,
      });
    }
    if (status === "todo") {
      currentBoard.todo.push({
        id: uuid(),
        title,
        description,
        status,
        isCompleted: false,
      });
    }
    localStorage.setItem("currentBoard", JSON.stringify(currentBoard));

    setIsCreatingTask(false);
    setIsModal(false);
  };

  return (
    <>
      <article className="modal create-task" onClick={resetModal}></article>
      <div className="create-task-container">
        <h2 className="heading">add new task</h2>
        <form className="add-board-form">
          <label htmlFor="title">title</label>
          <input
            type="text"
            placeholder="e.g. Web Design"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">description</label>
          <textarea
            name="description"
            cols="40"
            rows="4"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="status">status</label>
          <select
            className="select"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">todo</option>
            <option value="doing">doing</option>
            <option value="done">done</option>
          </select>
        </form>
        <button onClick={createTask} className="btn">
          create new task
        </button>
      </div>
    </>
  );
};

export default CreateTaskModal;
