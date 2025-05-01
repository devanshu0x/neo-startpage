import { differenceInDays } from "date-fns";
import { Check, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleComplete } from "../features/todo/taskSlice";

export default function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <div className="bg-gray-900/40 rounded-lg p-4 border border-indigo-900 shadow-lg backdrop-blur-sm h-[70vh] w-100 overflow-y-auto">
      <h2 className=" text-2xl text-blue-300 tracking-wide">Tasks</h2>
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
  const delay = differenceInDays(new Date().setHours(0, 0, 0, 0), startDate);
  const dispatch = useDispatch();
  function deleteTask() {
    dispatch(removeTask(id));
  }
  function toggleCompleteHandler() {
    dispatch(
      toggleComplete({
        id,
        completed: !completed,
      })
    );
  }

  return (
    <li
      className={`flex justify-between items-center p-3 ${
        completed
          ? "bg-indigo-900/20 hover:bg-indigo-900/70 border-green-700"
          : delay === 0
          ? "bg-black/50 hover:bg-neutral-900/70 border-blue-700"
          : "bg-red-400/10 hover:bg-red-600/10 border-red-700"
      } transition-colors duration-200 border-l-2 `}
    >
      <div className="grid grid-cols-12 gap-3 items-center">
        <button
          onClick={() => toggleCompleteHandler(id)}
          className={`col-span-1 w-5 h-5 rounded-full flex items-center justify-center border bg-transparent ${
            completed ? " border-green-400" : delay===0? " border-blue-400": "border-red-400"
          }`}
        >
          {completed && <Check size={16} className="text-green-400" />}
        </button>
        <div
          className={`flex-grow text-sm col-span-11 break-words whitespace-normal ${
            completed ? "line-through text-gray-500" : "text-gray-300"
          }`}
        >
          {description}
        </div>
      </div>
      <button
        onClick={deleteTask}
        className="text-red-400/50 hover:text-red-400 transition-colors duration-300 "
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
}

function TaskAdder() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  function addNewTask() {
    if (task.trim() !== "") {
      dispatch(
        addTask(
          task,
        )
      );
      setTask("");
    }
  }
  return (
    <div className="flex mt-6 mb-5">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            addNewTask();
          }
        }}
        placeholder="Add a new task..."
        className="flex-grow px-3 py-2 bg-black/50 border-b-2 border-indigo-800 focus:border-blue-400 focus:outline-none text-gray-300 placeholder-gray-500"
      />
      <button
        onClick={addNewTask}
        className="bg-indigo-900 hover:bg-indigo-800 px-3 py-2 flex items-center justify-center transition-colors duration-200"
      >
        <Plus size={20} className="text-blue-200" />
      </button>
    </div>
  );
}
