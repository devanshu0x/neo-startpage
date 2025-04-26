import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCodeforcesData,
  fetchGithubData,
} from "../features/stats/statsSlice";
import { format } from "date-fns";

function StatsBoard() {
  const [showModal, setShowModal] = useState(false);
  const [activeService, setActiveService]=useState("github");

  return (
    <div>
      <div className="bg-black/50 border border-indigo-900 backdrop-blur-sm flex rounded-lg h-42">
        {/* Codeforces */}
        <CodeforcesStats setActiveService={setActiveService} setShowModal={setShowModal} />

        {/* Github */}
        <GithubStats setActiveService={setActiveService} setShowModal={setShowModal} />
      </div>

      {
        showModal && <ChangeIdModal setShowModal={setShowModal} activeService={activeService}/>
      }
    </div>
  );
}

const GithubStats = ({setActiveService, setShowModal}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGithubData);
  });

  const githubData = useSelector((state) => state.stats.githubData);
  const handleIdChange= ()=>{
    setActiveService("github");
    setShowModal(true);
  }

  return (
    <div className="w-1/2 px-3 bg-indigo-900/20 rounded-r-lg">
      <h4 className="relative text-center text-violet-600">
        Github
        <button onClick={handleIdChange} className="absolute text-white right-2 top-1 text-xs bg-indigo-900 hover:bg-indigo-800 px-4 py-1 rounded-2xl transition-colors duration-200">
          Change Id
        </button>
      </h4>
      {githubData !== null && (
        <div className="flex gap-2 p-2">
          <img
            src={githubData.avatar}
            alt=""
            className="h-28 rounded-lg border border-purple-200"
          />
          <div className="text-sm">
            <div className="text-violet-400">{githubData.userId}</div>
            <div>
              Repos:{" "}
              <span className="text-violet-400">{githubData.repo_count}</span>
            </div>
            <div>
              Gists:{" "}
              <span className="text-violet-400">{githubData.gist_count}</span>
            </div>
            <div>
              Last Commit:{" "}
              <span className="text-violet-400">
                {format(new Date(githubData.lastCommit), "dd/MM/yy")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CodeforcesStats = ({setActiveService, setShowModal}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCodeforcesData());
  }, []);
  const codeforcesData = useSelector((state) => state.stats.codeforcesData);

  const handleIdChange= ()=>{
    setActiveService("codeforces");
    setShowModal(true);
  }

  return (
    <div className="w-1/2 border-r-1 border-indigo-900 px-3">
      <h4 className="relative text-center text-blue-600">
        Coderforces
        <button onClick={handleIdChange} className="absolute text-white right-2 top-1 text-xs bg-blue-900 hover:bg-blue-800 px-4 py-1 rounded-2xl transition-colors duration-200">
          Change Id
        </button>
      </h4>
      {codeforcesData !== null && (
        <div className="flex gap-2 p-2">
          <img
            src={codeforcesData.avatar}
            alt=""
            className="h-28 rounded-lg border border-blue-200"
          />
          <div className="text-sm">
            <div className="text-blue-400">{codeforcesData.userId}</div>
            <div>
              Rating:{" "}
              <span className="text-blue-400">
                {codeforcesData.rating} (Max {codeforcesData.maxRating})
              </span>
            </div>
            <div>
              Rank:{" "}
              <span className="text-blue-400 capitalize ">
                {codeforcesData.rank}
              </span>
            </div>
            <div>
              Delta:{" "}
              <span
                className={`${
                  codeforcesData.delta <= 0 ? "text-red-300" : "text-green-300"
                }`}
              >
                {codeforcesData.delta}
              </span>
            </div>
            <div>
              Last Contest:{" "}
              <span className="text-blue-400">
                {format(new Date(codeforcesData.lastContestTime), "dd/MM/yy")}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function ChangeIdModal({ setShowModal, activeService }) {
  const [userId, setUserId] = useState("");
  
  function handleFormSubmit(e) {
    e.preventDefault();
    // Handle the ID change based on activeService
    // Then close the modal
    setShowModal(false);
  }
  
  return (
    <div className="absolute inset-0 bg-black/70  flex justify-center items-center z-10">
      <div className="bg-black/40 rounded-lg border border-indigo-900 p-6 w-96 shadow-lg shadow-indigo-900/30">
        <h3 className="text-xl font-semibold mb-4 text-center">
          {activeService === "github" ? (
            <span className="text-violet-400">Change GitHub ID</span>
          ) : (
            <span className="text-blue-400">Change Codeforces ID</span>
          )}
        </h3>
        
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={`Enter ${activeService === "github" ? "GitHub" : "Codeforces"} ID`} 
              className="w-full bg-indigo-950/50 text-white py-2 px-4 rounded-md border border-indigo-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          <div className="flex justify-between items-center gap-4 mt-6">
            <button 
              type="button" 
              onClick={() => setShowModal(false)}
              className="flex-1 py-2 px-4 rounded-md border border-indigo-700 text-indigo-300 hover:bg-indigo-900/30 transition-colors duration-200"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={`flex-1 py-2 px-4 rounded-md ${
                activeService === "github" 
                  ? "bg-violet-700 hover:bg-violet-600" 
                  : "bg-blue-700 hover:bg-blue-600"
              } text-white transition-colors duration-200`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StatsBoard;
