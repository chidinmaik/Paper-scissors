import React from 'react';

const ResultArena = ({ playerChoice, computerChoice, result, isLoading }) => {
  if (!playerChoice) return null;

  return (
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 w-full max-w-lg">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="w-20 h-20 border-4 border-white/30 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="flex justify-between mb-6">
            <div className="text-center">
              <span className="text-3xl animate-bounce">🧑</span>
              <p className="text-sm opacity-80">You</p>
              <span className="font-bold text-2xl animate-shake inline-block">
                {playerChoice} {playerChoice === "Rock" ? "✊" : playerChoice === "Paper" ? "✋" : "✌️"}
              </span>
            </div>
            <div className="text-center">
              <span className="text-3xl animate-bounce">🤖</span>
              <p className="text-sm opacity-80">Computer</p>
              <span className="font-bold text-2xl animate-shake inline-block">
                {computerChoice} {computerChoice === "Rock" ? "✊" : computerChoice === "Paper" ? "✋" : "✌️"}
              </span>
            </div>
          </div>
          <p
            className={`text-3xl font-bold text-center tracking-wide ${
              result === "You win!" ? "text-green-400" :
              result === "Computer wins!" ? "text-red-400" :
              "text-yellow-400"
            }`}
          >
            {result}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultArena;