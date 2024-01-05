import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice"

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      {tasks.map((task, index)=>(
        <div key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TaskList