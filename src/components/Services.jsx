import React, { useRef, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
  VideoBar2,
} from "./design/Services";
import Generating from "./Generating";
import lumiAudio from "../assets/lumi.MP3";
import lilyAudio from "../assets/lily.MP3";

const Services = () => {
  const lumiRef = useRef(new Audio(lumiAudio));
  const lilyRef = useRef(new Audio(lilyAudio));
  const [isLumiPlaying, setIsLumiPlaying] = useState(false);
  const [isLilyPlaying, setIsLilyPlaying] = useState(false);

  const handleToggleLumiAudio = () => {
    if (isLumiPlaying) {
      lumiRef.current.pause();
      setIsLumiPlaying(false);
    } else {
      lumiRef.current.play();
      setIsLumiPlaying(true);
    }
  };

  const handleToggleLilyAudio = () => {
    if (isLilyPlaying) {
      lilyRef.current.pause();
      setIsLilyPlaying(false);
    } else {
      lilyRef.current.play();
      setIsLilyPlaying(true);
    }
  };

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Your Personal Assistant"
          text="Virtual Persona revolutionise the way humans and AI interact"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Get a personal assistant with a unique personality"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Not the Smartest AI, but very friendly one.</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Get a personal assistant with a unique personality
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              
            </div>
            <div onClick={handleToggleLumiAudio}>
              <VideoBar />
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Strengthen the bond</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                The more you interact, the stronger your bond grows. Strengthen your understanding, create lasting memories, unlock new capabilities, level up, and earn rewards along the way. Will be available soon!
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Respect their existence.</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                No longer treat AI models as mere computer programs. Recognize their identity. Celebrate their birthdays and treat them with the respect they deserve as entities in their own right.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <div onClick={handleToggleLilyAudio}>
                  <VideoBar2 />
                </div>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
