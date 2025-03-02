
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

const challenges = [
  "Build an AI that can predict startup failures!",
  "Create a decentralized voting platform for community decisions!",
  "Design a smart assistant for sustainable urban farming!",
  "Develop a blockchain solution for transparent charity donations!",
  "Build a mental health chatbot for college students!",
  "Create a gamified learning platform for coding skills!",
  "Design an AR navigation system for indoor spaces!",
  "Develop a marketplace for carbon credits trading!",
  "Build a smart traffic management system for congested cities!",
  "Create a platform to connect local artisans with global markets!",
  "Design a food waste reduction system for restaurants!",
  "Develop a secure digital identity solution for undocumented people!",
  "Build a peer-to-peer skill exchange platform!",
  "Create a disaster response coordination tool for NGOs!",
  "Design a circular economy marketplace for electronic waste!"
];

const ChallengeGenerator = () => {
  const [challenge, setChallenge] = useState("");
  const [animating, setAnimating] = useState(false);

  const generateChallenge = () => {
    setAnimating(true);
    setTimeout(() => {
      const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
      setChallenge(randomChallenge);
      setAnimating(false);
    }, 800);
  };

  return (
    <section id="challenge-generator" className="bg-grid cyber-border">
      <div className="cyber-border-content max-w-6xl mx-auto py-16 px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-hackathon-green text-glow">
            Challenge Ideas Generator
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Need inspiration for your hackathon project? Generate random challenge ideas with our Hack Idea Generator!
          </p>
        </div>

        <div className="bg-hackathon-dark-gray rounded-lg p-6 md:p-8 max-w-3xl mx-auto shadow-neon-green">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-sm ml-2">hackidea.sh</span>
          </div>

          <div className="font-mono bg-hackathon-black p-6 rounded min-h-32 flex items-center justify-center">
            {challenge ? (
              <p className={`text-hackathon-green text-lg md:text-xl ${animating ? 'animate-pulse' : ''}`}>
                <Terminal className="inline mr-2 mb-1" size={20} /> {challenge}
              </p>
            ) : (
              <p className="text-gray-500 text-lg">Click the button to generate a challenge idea...</p>
            )}
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={generateChallenge}
              disabled={animating}
              className="bg-hackathon-green text-black hover:bg-hackathon-green/80 shadow-neon-green font-bold text-lg px-8 py-4 transition-all duration-300"
            >
              {animating ? "Generating..." : "Generate Challenge Idea"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeGenerator;
