import { useDispatch, useSelector } from "react-redux";
// useDispatch for update de state
// useSelector for view the data state


function App() {

  const tasksState = useSelector(state => state.task.tasks)

  console.log(tasksState)

  return (
    <div className="App">
      <h1>Hello word</h1>
    </div>
  );
}

export default App;
