import React from "react";

function StatsBoard() {
  return (
    <div className="bg-black/50 border border-indigo-900 backdrop-blur-sm flex rounded-lg h-42">

      {/* Codeforces */}

      <div className="w-1/2 border-r-1 border-indigo-900 px-3">
        <h4 className="text-center text-blue-300">Coderforces</h4>
        <div className="flex gap-2 p-2">
          <img
            src="https://userpic.codeforces.org/4311986/title/86444a0145e931a2.jpg"
            alt=""
            className="h-28 rounded-lg border border-blue-200"
          />
          <div className="text-sm">
            <div className="text-blue-400">Devblitz</div>
            <div>Rating: <span className="text-blue-400">1200 (Max 1432)</span></div>
            <div>Rank: <span className="text-blue-400">Newbie</span></div>
            <div>Delta: <span className="text-red-300">-105</span></div>
            <div>Last Contest: 12/2/25</div>
          </div>
        </div>
      </div>

      {/* Github */}

      <div className="w-1/2 px-3 bg-indigo-900/20 rounded-r-lg">
        <h4 className="text-center text-violet-300">Github</h4>
        <div className="flex gap-2 p-2">
          <img
            src="https://avatars.githubusercontent.com/u/184936933?v=4"
            alt=""
            className="h-28 rounded-lg border border-purple-200"
          />
          <div className="text-sm">
            <div>devanshu0x</div>
            <div>Public Repos: 15</div>
            <div>Today's push count: 2</div>
            <div>Last Commit: 3:45 PM 12/2/25</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsBoard;
