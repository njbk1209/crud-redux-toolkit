import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice"
import { Link } from "react-router-dom";

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }


  return (
    <div>
      <header>
        <h1> Hola {tasks.length} </h1>
        <Link to='/create-task'>Create task</Link>
      </header>
      {tasks.map((task, index)=>(
        <div key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit task</Link>
        </div>
      ))}
    </div>
  )
}

export default TaskList