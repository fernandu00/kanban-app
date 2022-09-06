import { IoEllipsisVerticalOutline } from "react-icons/io5";

const TopBar = ({
  currentBoard,
  boardsList,
  setIsCreatingTask,
  setIsModal,
  setBoardsList,
  setCurrentBoard,
  setEditId,
  setIsEditingBoard,
  setShow,
  show,
}) => {
  const handleCreateTask = () => {
    setIsCreatingTask(true);
    setIsModal(true);
  };
  // remove board from boardsList
  const removeBoard = () => {
    const newBoardsList = boardsList.filter(
      (board) => board.id !== currentBoard.id
    );
    setBoardsList(newBoardsList);
    if (boardsList.length > 0) {
      setCurrentBoard(boardsList[0]);
    }
    setCurrentBoard("");
    setShow(!show);
  };
  // calls updateTaskModal
  const updateBoard = () => {
    setIsModal(true);
    setIsEditingBoard(true);
    setShow(false);
  };

  return (
    <section className="topbar">
      <div className="topbar-container">
        <h1>{boardsList && currentBoard && currentBoard.name}</h1>
        <div className="buttons-container">
          <button className="btn" onClick={handleCreateTask}>
            + add new task
          </button>
          <div className="menu">
            <IoEllipsisVerticalOutline
              className="ellipsis"
              onClick={() => setShow(!show)}
            />
            <div className={show ? "edit-menu" : "edit-menu hidden"}>
              <ul>
                {/* calls the EditBoardModal */}
                <li onClick={updateBoard}>edit board</li>
                <li className="red" onClick={removeBoard}>
                  delete board
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
