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
    <div className="w-5/6 lg:w-4/6 ">
      <header className="flex justify-between items-center py-4">
        <h1> Pending Task {tasks.length} </h1>
        <Link to='/create-task' className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Create task</Link>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <div key={index} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <button onClick={() => handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md self-center">Delete</button>
                <Link to={`/edit-task/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit task</Link>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default TaskList