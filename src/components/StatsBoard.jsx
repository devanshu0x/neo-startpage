import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCodeforcesData, fetchGithubData } from "../features/stats/statsSlice";
import { format } from "date-fns";

function StatsBoard() {
  return (
    <div className="bg-black/50 border border-indigo-900 backdrop-blur-sm flex rounded-lg h-42">

      {/* Codeforces */}
      <CodeforcesStats/>
      

      {/* Github */}
      <GithubStats/>
      
    </div>
  );
}

const GithubStats= ()=>{
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetchGithubData);
  })

  const githubData= useSelector((state)=> state.stats.githubData)

  return (
    <div className="w-1/2 px-3 bg-indigo-900/20 rounded-r-lg">
          <h4 className="relative text-center text-violet-600">Github
            <button className="absolute text-white right-2 top-1 text-xs bg-indigo-900 hover:bg-indigo-800 px-4 py-1 rounded-2xl transition-colors duration-200" >Change Id</button>
          </h4>
          <div className="flex gap-2 p-2">
            <img
              src={githubData.avatar}
              alt=""
              className="h-28 rounded-lg border border-purple-200"
            />
            <div className="text-sm">
              <div className="text-violet-400">{githubData.userId}</div>
              <div>Repos: <span className="text-violet-400">{githubData.repo_count}</span></div>
              <div>Gists: <span className="text-violet-400">{githubData.gist_count}</span></div>
              <div>Last Commit: <span className="text-violet-400">{format(new Date(githubData.lastCommit),"dd/MM/yy")}</span></div>
            </div>
          </div>
        </div>
  )
}

const CodeforcesStats= ()=>{
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCodeforcesData());
  },[])
  const codeforcesData= useSelector(state=> state.stats.codeforcesData)
   console.log(codeforcesData);

  return (
    <div className="w-1/2 border-r-1 border-indigo-900 px-3">
          <h4 className="relative text-center text-blue-600">Coderforces
          <button className="absolute text-white right-2 top-1 text-xs bg-blue-900 hover:bg-blue-800 px-4 py-1 rounded-2xl transition-colors duration-200" >Change Id</button>
          </h4>
          <div className="flex gap-2 p-2">
            <img
              src= {codeforcesData.avatar}
              alt=""
              className="h-28 rounded-lg border border-blue-200"
            />
            <div className="text-sm">
              <div className="text-blue-400">{codeforcesData.userId}</div>
              <div>Rating: <span className="text-blue-400">{codeforcesData.rating} (Max {codeforcesData.maxRating})</span></div>
              <div>Rank: <span className="text-blue-400 capitalize ">{codeforcesData.rank}</span></div>
              <div>Delta: <span className={`${codeforcesData.delta<=0? "text-red-300":"text-green-300"}`}>{codeforcesData.delta}</span></div>
              <div>Last Contest: <span className="text-blue-400">{format(new Date(codeforcesData.lastContestTime),"dd/MM/yy")}</span></div>
            </div>
          </div>
        </div>
  )
}

export default StatsBoard;
