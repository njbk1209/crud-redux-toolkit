import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// useDispatch for update de state
// useSelector for view the data state


function App() {

  return (
    <div className="App">
      <h1>Hello word</h1>

      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
