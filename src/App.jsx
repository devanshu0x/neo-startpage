import Tasks from "./components/Tasks"
import Timer from "./components/Timer"

// Blood moon eclipse
function App() {
  return(
    <div className="bg-gradient-to-tr from-[#1a0008] via-[#2a0a14] to-black min-h-screen p-5 font-caveat">
        <Timer/>
        <div className="grid grid-cols-3 mt-8">
          <Tasks/>
        </div>
    </div>
  )
}

export default App
