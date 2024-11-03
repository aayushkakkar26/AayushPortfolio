// src/components/LoadingScreen.js

import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [percentage, setPercentage] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const originalQuotes = [
    "Just brewing some chai... I mean, loading data!",
    "Hang tight! Just teaching the servers a new dance move...",
    "Please wait... Recharging caffeine levels.",
    "Almost there! Just convincing electrons to move faster.",
    "Waiting for chai to brew is easier than waiting for this to load!",
    "Hold on, we're building something amazing! Or breaking something… one of those."
  ];

  // Shuffle quotes function
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const [quotes, setQuotes] = useState([]);

  // Shuffle quotes on component mount
  useEffect(() => {
    setQuotes(shuffleArray([...originalQuotes]));
  }, []);

  // Update loading percentage
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Cycle through quotes every 4 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); 

    return () => clearInterval(quoteInterval);
  }, [quotes.length]); // Add quotes.length dependency to ensure it works after shuffling

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="text-center">
        <p className="text-sm transform transition-all duration-300 font-bold text-[#D4A03E] animate-pulse mb-4">
          {quotes[quoteIndex]}
        </p>
        <p className="text-4xl font-bold text-[#D4A03E] animate-pulse">
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
