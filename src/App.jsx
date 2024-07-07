import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import CharacterIntroduction from "./components/CharacterIntroduction"; // Import new component
import Feedback from "./components/Feedback";
import ModelSection from "./components/ModelSection";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <CharacterIntroduction />
        <Benefits />
        <Collaboration />
        <Services />
        <ModelSection />
        <Roadmap />
        <Feedback />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
