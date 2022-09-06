import React from "react";

const Tasks = ({
  boardsList,
  currentBoard,
  boardIndex,
  setTaskUpdate,
  setIsModal,
  editId,
  setEditId,
}) => {
  // update task
  const handleUpdate = (id) => {
    setIsModal(true);
    setTaskUpdate(true);
    setEditId(id);
  };
  return (
    <section className="tasks">
      <div className="column">
        <div className="header">
          <h5 id="todo">
            Todo (
            {currentBoard &&
              currentBoard.todo !== undefined &&
              currentBoard.todo.length}
            )
          </h5>
        </div>
        <ul className="task-list">
          {boardsList !== undefined &&
            boardsList.length > 0 &&
            currentBoard &&
            currentBoard.todo.map((todo) => {
              return (
                <li
                  className="item"
                  key={todo.id}
                  onClick={() => handleUpdate(todo.id)}
                >
                  {todo && todo.title}
                  <p className="subtask">{todo.description}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="column">
        <div className="header">
          <h5 id="doing">
            doing (
            {currentBoard &&
              currentBoard.doing !== undefined &&
              currentBoard.doing.length}
            )
          </h5>
        </div>
        <ul className="task-list">
          {boardsList !== undefined &&
            boardsList.length > 0 &&
            currentBoard &&
            currentBoard.doing.map((doing) => {
              return (
                <li
                  className="item"
                  key={doing.id}
                  onClick={() => handleUpdate(doing.id)}
                >
                  {doing && doing.title}{" "}
                  <p className="subtask">{doing.description}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="column">
        <div className="header">
          <h5 id="done">
            done (
            {currentBoard &&
              currentBoard.done !== undefined &&
              currentBoard.done.length}
            )
          </h5>
        </div>
        <ul className="task-list">
          {boardsList !== undefined &&
            boardsList.length > 0 &&
            currentBoard &&
            currentBoard.done.map((done) => {
              return (
                <li
                  className="item"
                  key={done.id}
                  onClick={() => handleUpdate(done.id)}
                >
                  {done && done.title}{" "}
                  <p className="subtask">{done.description}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Tasks;
