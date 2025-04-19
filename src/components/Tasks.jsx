import { differenceInDays } from "date-fns";
import { Check, Trash2 } from "lucide-react";

const tasks = [
  {
    id: 1,
    startDate: new Date(),
    description: "Learn spanish",
    completed: false,
  },
  {
    id: 2,
    startDate: new Date("2025-04-18"),
    description: "Watch ipl match",
    completed: "true",
  },
];

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export default function Tasks() {
  return (
    <div className="bg-red-950/80 rounded-lg min-h-82 p-4">
      <h2 className="text-center text-3xl font-bold text-red-50">Tasks</h2>
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
  const delay = differenceInDays(stripTime(new Date()), stripTime(startDate));
  console.log(delay);
  return (
    <li className="flex justify-between items-center bg-red-900/30 rounded-md p-3 font-signika">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleComplete(id)}
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
      <button className="text-red-200 hover:text-red-500 transition-colors duration-300">
        <Trash2 size={18} />
      </button>
    </li>
  );
}

//   {/* Task List */}
//   <ul className="space-y-3">
//   {tasks.map(task => (
//     <li key={task.id} className="flex items-center justify-between bg-red-900/30 rounded-md px-4 py-3">
//       <div className="flex items-center gap-3">
//         <button
//           onClick={() => toggleComplete(task.id)}
//           className={`w-6 h-6 rounded flex items-center justify-center border
//             ${task.completed
//               ? 'bg-amber-300/80 border-amber-200'
//               : 'bg-transparent border-red-700 hover:border-amber-300'}`}
//         >
//           {task.completed && <Check size={16} className="text-red-950" />}
//         </button>
//         <span className={`text-lg ${task.completed ? 'line-through text-red-300/60' : 'text-red-100'}`}>
//           {task.text}
//         </span>
//       </div>
//       <button
//         onClick={() => deleteTask(task.id)}
//         className="text-red-400 hover:text-red-200"
//       >
//         <Trash2 size={18} />
//       </button>
//     </li>
//   ))}
// </ul>
