import React from 'react';

const ChoiceButtons = ({ choices, playGame, isLoading }) => {
  return (
    <div className="flex gap-8 mb-10">
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => playGame(choice)}
          disabled={isLoading}
          className={`w-24 h-24 mt-8 rounded-full bg-gradient-to-br ${
            choice === "Rock" ? "from-gray-500 to-gray-700" :
            choice === "Paper" ? "from-blue-500 to-blue-700" :
            "from-green-500 to-green-700"
          } text-white text-4xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.2)]"
          }`}
        >
          {choice === "Rock" ? "✊" : choice === "Paper" ? "✋" : "✌️"}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;