// components/AppShell.jsx
import HeroPanel from "./HeroPanel";
import NextStepsPanel from "./NextStepsPanel";

function AppShell() {
  return (
    <>
      <HeroPanel />
      <div className="ticks"></div>
      <NextStepsPanel />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default AppShell;
