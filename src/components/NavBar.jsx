import React from 'react';

const Navbar = ({ playerScore, computerScore, isMuted, toggleMute, resetGame }) => {
  return (
    <nav className="bg-white/10 backdrop-blur-md p-4 flex justify-between items-center shadow-lg border-b border-white/20">
      <div className="flex items-center gap-2">
        <span className="text-3xl animate-spin-slow">⚡</span>
        <h1 className="text-2xl font-extrabold tracking-wide">
          RPS
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-4 text-lg font-semibold">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full shadow-inner">
            You: {playerScore}
          </span>
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full shadow-inner">
            CPU: {computerScore}
          </span>
        </div>
        <button
          onClick={toggleMute}
          className="bg-white/20 hover:bg-white/30 text-white py-1 px-4 rounded-full transition-all shadow-md backdrop-blur-sm border border-white/30"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
        <button
          onClick={resetGame}
          className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white py-1 px-4 rounded-full transition-all shadow-md"
        >
          Reset
        </button>
      </div>
    </nav>
  );
};

export default Navbar;