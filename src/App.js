import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Tasks from "./components/Tasks";
import AddBoardModal from "./components/AddBoardModal";
import EditBoardModal from "./components/EditBoardModal";
import CreateTaskModal from "./components/CreateTaskModal";
import { useEffect } from "react";
import UpdateTaskModal from "./components/UpdateTaskModal";

// const boardsListPlan = [{ name: "", todo: [{title: , description: , subtasks:[], isCompleted:false }], doing: [], done: [] }];

function App() {
  // get boardsList from localstorage
  const getBoardsList = () => {
    let boardsList = localStorage.getItem("boardsList");
    if (boardsList) {
      return JSON.parse(localStorage.getItem("boardsList"));
    } else {
      return [];
    }
  };
  // get currentBoard from localstorage
  const getCurrentBoard = () => {
    let currentBoard = localStorage.getItem("currentBoard");

    if (currentBoard) {
      return JSON.parse(localStorage.getItem("currentBoard"));
    } else {
      return [];
    }
  };

  const [boardsList, setBoardsList] = useState(getBoardsList());
  const [currentBoard, setCurrentBoard] = useState(getCurrentBoard());
  const [isModal, setIsModal] = useState(false);
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [isTaskUpdate, setTaskUpdate] = useState(false);
  const [isAddingBoard, setIsAddingBoard] = useState(false);
  const [isEditingBoard, setIsEditingBoard] = useState(false);
  const [editId, setEditId] = useState("");
  const [show, setShow] = useState(false);

  // update localstorage
  useEffect(() => {
    localStorage.setItem("currentBoard", JSON.stringify(currentBoard));
    localStorage.setItem("boardsList", JSON.stringify(boardsList));
  }, [currentBoard, boardsList]);

  return (
    <main className="main">
      <SideBar
        boardsList={boardsList}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        setIsModal={setIsModal}
        setIsAddingBoard={setIsAddingBoard}
      />
      <TopBar
        boardsList={boardsList}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        setIsCreatingTask={setIsCreatingTask}
        setIsModal={setIsModal}
        setBoardsList={setBoardsList}
        setEditId={setEditId}
        setIsAddingBoard={setIsAddingBoard}
        setIsEditingBoard={setIsEditingBoard}
        show={show}
        setShow={setShow}
      />
      <Tasks
        boardsList={boardsList}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        setIsModal={setIsModal}
        setTaskUpdate={setTaskUpdate}
        editId={editId}
        setEditId={setEditId}
      />
      {isModal && isAddingBoard && (
        <AddBoardModal
          boardsList={boardsList}
          setBoardsList={setBoardsList}
          isModal={isModal}
          setIsModal={setIsModal}
          setIsAddingBoard={setIsAddingBoard}
          setCurrentBoard={setCurrentBoard}
        />
      )}
      {isModal && isEditingBoard && (
        <EditBoardModal
          boardsList={boardsList}
          setBoardsList={setBoardsList}
          isModal={isModal}
          setIsModal={setIsModal}
          setIsAddingBoard={setIsAddingBoard}
          setCurrentBoard={setCurrentBoard}
          currentBoard={currentBoard}
          setIsEditingBoard={setIsEditingBoard}
        />
      )}

      {isModal && isCreatingTask && (
        <CreateTaskModal
          setIsModal={setIsModal}
          setIsCreatingTask={setIsCreatingTask}
          isCreatingTask={isCreatingTask}
          boardsList={boardsList}
          currentBoard={currentBoard}
        />
      )}
      {isModal && isTaskUpdate && (
        <UpdateTaskModal
          setTaskUpdate={setTaskUpdate}
          boardsList={boardsList}
          setIsModal={setIsModal}
          editId={editId}
          setEditId={setEditId}
          currentBoard={currentBoard}
          show={show}
          setShow={setShow}
        />
      )}
    </main>
  );
}

export default App;
