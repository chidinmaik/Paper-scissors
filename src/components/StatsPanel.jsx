import React from 'react';

const StatsPanel = ({ roundsPlayed, playerScore, computerScore, winPercentage }) => {
  return (
    <div className="mt-8 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20 w-full max-w-lg">

<div className="flex ml-10 mb-5 gap-4 text-lg font-semibold">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 rounded-full shadow-inner">
            You: {playerScore}
          </span>
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 rounded-full shadow-inner">
            CPU: {computerScore}
          </span>
        </div>
      <h2 className="text-xl font-bold mb-4 tracking-wide">Game Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-sm">Rounds Played: <span className="font-semibold">{roundsPlayed}</span></p>
        <p className="text-sm">Win Percentage: <span className="font-semibold">{winPercentage}%</span></p>
        <p className="text-sm">Wins: <span className="font-semibold">{playerScore}</span></p>
        <p className="text-sm">Losses: <span className="font-semibold">{computerScore}</span></p>
      </div>
    </div>
  );
};

export default StatsPanel;