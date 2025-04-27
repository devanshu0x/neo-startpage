import FavSites from "./components/FavSites"
import SpaceBackground from "./components/SpaceBackground"
import StatsBoard from "./components/StatsBoard"
import Tasks from "./components/Tasks"
import Timer from "./components/Timer"

// Blood moon eclipse
function App() {
  return(
    <div className="font-space">
        <SpaceBackground>
          <Timer/>
          <div className=" flex px-4 py-8 gap-4">
            <Tasks/>
            <div className="flex-grow space-y-3">
            <StatsBoard/>
            <FavSites/>
            </div>
          </div>
        </SpaceBackground>
    </div>
  )
}

export default App
