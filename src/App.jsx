import React, { useState, useEffect } from "react";
import Navbar from './components/NavBar';
import ChoiceButtons from './components/ChoiceButtons';
import ResultArena from './components/ResultArena';
import StatsPanel from './components/StatsPanel';
import Footer from './components/Footer';

function App() {
  const choices = ["Rock", "Paper", "Scissors"];
  
  // Audio objects
  const sounds = {
    rock: new Audio("/sounds/rock.mp3"),
    paper: new Audio("/sounds/paper.mp3"),
    scissors: new Audio("/sounds/scissors.mp3"),
    win: new Audio("/sounds/win.mp3"),
    lose: new Audio("/sounds/lose.mp3"),
    tie: new Audio("/sounds/tie.mp3"),
    reset: new Audio("/sounds/reset.mp3"),
    bgm: new Audio("/sounds/bgm.mp3"),
  };

  // State
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  // Play sound helper
  const playSound = (sound) => {
    if (!isMuted) {
      sound.currentTime = 0;
      sound.play().catch((err) => console.log("Audio play failed:", err));
    }
  };

  // Background music control
  useEffect(() => {
    sounds.bgm.loop = true;
    if (!isMuted) {
      sounds.bgm.play().catch((err) => console.log("BGM failed:", err));
    }
    return () => sounds.bgm.pause();
  }, [isMuted]);

  // Game logic with preload
  const playGame = (choice) => {
    playSound(sounds[choice.toLowerCase()]);
    setPlayerChoice(choice);
    setIsLoading(true);

    setTimeout(() => {
      const compChoice = choices[Math.floor(Math.random() * 3)];
      setComputerChoice(compChoice);
      setIsLoading(false);
      setRoundsPlayed(roundsPlayed + 1);

      if (choice === compChoice) {
        setResult("It's a tie!");
        playSound(sounds.tie);
      } else if (
        (choice === "Rock" && compChoice === "Scissors") ||
        (choice === "Paper" && compChoice === "Rock") ||
        (choice === "Scissors" && compChoice === "Paper")
      ) {
        setResult("You win!");
        setPlayerScore(playerScore + 1);
        playSound(sounds.win);
      } else {
        setResult("Computer wins!");
        setComputerScore(computerScore + 1);
        playSound(sounds.lose);
      }
    }, 1500);
  };

  // Reset game
  const resetGame = () => {
    playSound(sounds.reset);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
    setIsLoading(false);
    setRoundsPlayed(0);
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) sounds.bgm.play();
    else sounds.bgm.pause();
  };

  // Calculate win percentage
  const winPercentage = roundsPlayed > 0 ? ((playerScore / roundsPlayed) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white flex flex-col">
      <Navbar 
        playerScore={playerScore} 
        computerScore={computerScore} 
        isMuted={isMuted} 
        toggleMute={toggleMute} 
        resetGame={resetGame} 
      />
      
      <div className="flex flex-col items-center p-6 flex-1">
        
        <ResultArena 
          playerChoice={playerChoice} 
          computerChoice={computerChoice} 
          result={result} 
          isLoading={isLoading} 
        />
        <ChoiceButtons 
          choices={choices} 
          playGame={playGame} 
          isLoading={isLoading} 
        />
        
        
        <StatsPanel 
          roundsPlayed={roundsPlayed} 
          playerScore={playerScore} 
          computerScore={computerScore} 
          winPercentage={winPercentage} 
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;