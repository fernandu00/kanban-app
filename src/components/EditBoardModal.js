import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const EditBoardModal = ({
  boardsList,
  setBoardsList,
  setIsModal,
  setIsAddingBoard,
  setCurrentBoard,
  currentBoard,
  setIsEditingBoard,
}) => {
  // update board's name
  const handleUpdateBoard = (e) => {
    e.preventDefault();
    setBoardsList(boardsList.filter((board) => board.id !== currentBoard.id));
    const newBoard = {
      id: currentBoard.id,
      name: name,
      todo: [],
      doing: [],
      done: [],
    };
    setBoardsList((newBoardsList) => {
      return [...newBoardsList, newBoard];
    });
    setIsModal(false);
    setIsEditingBoard(false);
  };

  const [name, setName] = useState(currentBoard.name);
  return (
    <>
      <article
        className="modal create-board"
        onClick={() => {
          setIsModal(false);
        }}
      ></article>
      <div className="container">
        <h2 className="heading">edit board</h2>
        <form className="add-board-form">
          <label htmlFor="name">Board Name</label>
          <input
            type="text"
            placeholder="e.g. Web Design"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <button className="btn" onClick={handleUpdateBoard}>
          update board
        </button>
      </div>
    </>
  );
};

export default EditBoardModal;
