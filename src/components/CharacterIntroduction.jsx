import React, { useState, useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import cenoImage from "../assets/ceyo.png";
import cenoAudio from "../assets/ceyo.MP3"; // Assuming the audio file path

const CharacterIntroduction = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayerRef = useRef(null);

  const toggleAudio = () => {
    const audioPlayer = audioPlayerRef.current;

    if (!audioPlayer) {
      return;
    }

    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Section id="character-introduction" className="py-16 lg:py-20 bg-n-8">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <Heading
            title="Hey, I am Cyno"
            className="text-4xl lg:text-5xl font-bold text-n-1 mb-4"
          />
          <p className="text-lg text-n-3">
            If you dare to take on challenges, then we can form the perfect team. Come on!
          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center relative">
          <img
            src={cenoImage}
            alt="Floating character"
            className="max-w-full h-auto rounded-lg shadow-lg floating-image"
            onClick={toggleAudio}
            style={{ cursor: "pointer" }}
          />
          {/* Hidden audio element for playback */}
          <audio ref={audioPlayerRef} src={cenoAudio} />
        </div>
      </div>
    </Section>
  );
};

export default CharacterIntroduction;
