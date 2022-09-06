import React from "react";

const SideBar = ({
  boardsList,
  currentBoard,
  setCurrentBoard,
  setIsModal,
  setIsAddingBoard,
}) => {
  // calls the AddBoardModal
  const handleBoard = () => {
    setIsModal(true);
    setIsAddingBoard(true);
  };
  return (
    <aside className="sidebar">
      <img src="/assets/logo-light.svg" alt="logo" />
      <div className="menu-container">
        <h3>all boards ({boardsList.length}) </h3>
        <ul>
          {boardsList.map((board) => {
            return (
              <li
                className="board"
                key={board.id}
                onClick={() => setCurrentBoard(board)}
              >
                <img className="icon" src="/assets/icon-board.svg" alt="icon" />
                {board.name}
              </li>
            );
          })}
          <li className="create">
            <img className="icon" src="/assets/icon-board.svg" alt="icon" />
            <button className="transparent" onClick={handleBoard}>
              + create board
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
