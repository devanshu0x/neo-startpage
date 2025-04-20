import { differenceInDays } from "date-fns";
import { Check, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo, removeTodo,toggleComplete} from "../features/todo/todoSlice"


export default function Tasks() {
  const tasks= useSelector(state => state.todos)
  return (
    <div className="bg-red-950/80 rounded-lg p-4 h-[70vh] overflow-y-auto">
      <h2 className="text-center text-3xl font-bold text-red-50">Tasks</h2>
      <TaskAdder />
      <ul className="space-y-3">
        {tasks.map((li) => (
          <Task
            key={li.id}
            description={li.description}
            startDate={li.startDate}
            completed={li.completed}
            id={li.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Task({ description, startDate, completed, id }) {
  const delay = differenceInDays((new Date()).setHours(0,0,0,0),startDate);
  const dispatch=useDispatch();
  function removeTask(){
    dispatch(removeTodo({id}))
  }
  function toggleCompleteHandler(){
    dispatch(toggleComplete({
      id,
      completed:!completed
    }))
  }
  console.log(delay);
  return (
    <li className="flex justify-between items-center bg-red-900/30 rounded-md p-3 font-signika">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleCompleteHandler(id)}
          className={`w-6 h-6 rounded flex items-center justify-center border ${
            completed
              ? "bg-amber-400/80 border-amber-200"
              : "bg-transparent border-amber-100 hover:border-amber-200"
          }`}
        >
          {completed && <Check size={16} className="text-red-100" />}
        </button>
        <div
          className={`text-md ${
            completed ? "line-through text-red-300/60" : "text-red-100"
          }`}
        >
          {description}
        </div>
      </div>
      <button onClick={removeTask} className="text-red-200 hover:text-red-500 transition-colors duration-300">
        <Trash2 size={18} />
      </button>
    </li>
  );
}

function TaskAdder() {
  const [task, setTask] = useState("");
  const dispatch= useDispatch()
  function addTask() {
    dispatch(addTodo({
      description:task
    }));
    setTask("")
  }
  return (
    <div className="flex mt-3 mb-6 font-signika">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        placeholder="Add a new task..."
        className="flex-grow bg-red-900/30 text-red-100 rounded-l-md px-4 py-2 border-red-800 border focus:outline-none"
      />
      <button
        onClick={addTask}
        className="bg-red-800 hover:bg-red-700 px-4 rounded-r-md flex items-center justify-center"
      >
        <Plus size={20} className="text-red-100"/>
      </button>
    </div>
  );
}
