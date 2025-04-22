import SpaceBackground from "./components/SpaceBackground"
import Tasks from "./components/Tasks"
import Timer from "./components/Timer"

// Blood moon eclipse
function App() {
  return(
    <div className="font-space">
        <SpaceBackground>
          <Timer/>
          <div className="flex px-4 py-8">
            <Tasks/>
          </div>
        </SpaceBackground>
    </div>
  )
}

export default App
