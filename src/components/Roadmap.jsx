import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1, roadmap1, master } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = React.useRef(new Audio(master)); // Create a reference to the audio file

  const toggleAudio = () => {
    if (audioPlaying) {
      audioRef.current.pause(); // Pause the audio
      setAudioPlaying(false); // Update state
    } else {
      audioRef.current.play(); // Play the audio
      setAudioPlaying(true); // Update state
    }
  };

  const handleRoadmapClick = () => {
    if (audioPlaying) {
      audioRef.current.pause(); // Pause the audio if it's playing
      setAudioPlaying(false); // Update state
    } else {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play(); // Play the audio
      setAudioPlaying(true); // Update state
    }
  };

  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we’re working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={
                            item.status === "done" ? check2 : loading1
                          }
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                        onClick={item.imageUrl === roadmap1 ? handleRoadmapClick : undefined}
                        style={{ cursor: item.imageUrl === roadmap1 ? "pointer" : "auto" }}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          {/* Button for the whole roadmap */}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
