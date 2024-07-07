import React, { useState } from "react";
import emailjs from "emailjs-com";
import piuImage from "../assets/ceno.png";
import feedbackAudio from "../assets/feedback.MP3"; // Assuming the audio file path

const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

const Feedback = () => {
  const [showAudioOption, setShowAudioOption] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target,
        userId
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAudioOption(true); // Show the audio playback option
          setPlayAudio(false); // Reset playAudio state
          e.target.reset(); // Clear the form
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  const handleAudioPlayback = () => {
    setPlayAudio(true); // Set to true to play the audio
    setShowAudioOption(false); // Hide the audio playback option after starting playback
  };

  const handleNoThanks = () => {
    setShowAudioOption(false); // Hide the audio playback option
    setPlayAudio(false); // Reset playAudio state
  };

  return (
    <section id="feedback" className="container mx-auto py-16 px-6 lg:flex lg:items-center">
      <div className="lg:w-1/2 relative">
        <img
          src={piuImage}
          alt="Feedback"
          className="w-full h-full object-cover rounded-lg animate-float"
        />
      </div>
      <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
        <h2 className="h2">We Value Your Feedback</h2>
        <p className="body-1 mt-4 mb-8">
          Please let us know your thoughts and suggestions.
        </p>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-n-1 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 bg-n-8 border border-n-3 rounded focus:outline-none focus:ring-2 focus:ring-color-1 hover:glow-effect"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-n-1 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-n-8 border border-n-3 rounded focus:outline-none focus:ring-2 focus:ring-color-1 hover:glow-effect"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-n-1 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 bg-n-8 border border-n-3 rounded focus:outline-none focus:ring-2 focus:ring-color-1 hover:glow-effect"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Feedback"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-color-1 text-n-1 rounded hover:bg-color-2 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal or Confirmation Dialog for Audio Playback */}
      {showAudioOption && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <p className="mb-4 text-gray-500">Thank you for your feedback!</p>
            <p className="mb-4 text-gray-500">Would you like to listen to an audio message?</p>
            <div className="flex justify-center">
              <button
                className="px-4 py-2 bg-color-1 text-n-1 rounded mr-4 hover:bg-color-2 transition duration-200"
                onClick={handleAudioPlayback}
              >
                Yes, please
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
                onClick={handleNoThanks}
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Audio Player */}
      {playAudio && (
        <audio src={feedbackAudio} autoPlay controls className="hidden">
          Your browser does not support the audio element.
        </audio>
      )}
    </section>
  );
};

export default Feedback;
