import HeroSection from "./components/sections/HeroSection";
import ConceptSection from "./components/sections/ConceptSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import ActivitiesSection from "./components/sections/ActivitiesSection";
import TargetSection from "./components/sections/TargetSection";
import CTASection from "./components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <FeaturesSection />
      <BenefitsSection />
      <ActivitiesSection />
      <TargetSection />
      <CTASection />
    </>
  );
}
