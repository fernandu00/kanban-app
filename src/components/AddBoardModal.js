import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddBoardModal = ({
  boardsList,
  setBoardsList,
  setIsModal,
  setIsAddingBoard,
  setCurrentBoard,
}) => {
  // creates a new board with a uuid and a name from state besides the three columns (todo, doing and done)
  const handleBoard = (e) => {
    e.preventDefault();
    const newBoard = { id: uuid(), name: name, todo: [], doing: [], done: [] };
    setBoardsList((boardsList) => {
      return [...boardsList, newBoard];
    });
    setCurrentBoard(newBoard);
    setIsModal(false);
    setIsAddingBoard(false);
  };

  const [name, setName] = useState("");
  return (
    <>
      <article
        className="modal create-board"
        onClick={() => {
          setIsModal(false);
        }}
      ></article>
      <div className="container">
        <h2 className="heading">add new board</h2>
        <form className="add-board-form">
          <label htmlFor="name">Board Name</label>
          <input
            type="text"
            placeholder="e.g. Web Design"
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <button className="btn" onClick={handleBoard}>
          create new board
        </button>
      </div>
    </>
  );
};

export default AddBoardModal;
