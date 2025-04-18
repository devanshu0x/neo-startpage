import Tasks from "./components/Tasks"
import Timer from "./components/Timer"

// Blood moon eclipse
function App() {
  return(
    <div className="bg-gradient-to-tr from-[#1a0008] via-[#2a0a14] to-black min-h-screen p-5 font-caveat">
        <Timer/>
        <Tasks/>
    </div>
  )
}

export default App
