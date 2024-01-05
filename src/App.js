import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// useDispatch for update de state
// useSelector for view the data state

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
