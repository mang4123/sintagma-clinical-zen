import { Header } from "@/components/sintagma/Header";
import { HeroSection } from "@/components/sintagma/HeroSection";
import { ProblemSection } from "@/components/sintagma/ProblemSection";
import { SolutionSection } from "@/components/sintagma/SolutionSection";
import { HowItWorksSection } from "@/components/sintagma/HowItWorksSection";
import { BenefitsSection } from "@/components/sintagma/BenefitsSection";
import { ComparisonSection } from "@/components/sintagma/ComparisonSection";
import { SecuritySection } from "@/components/sintagma/SecuritySection";
import { TestimonialsSection } from "@/components/sintagma/TestimonialsSection";
import { ForWhomSection } from "@/components/sintagma/ForWhomSection";
import { PricingSection } from "@/components/sintagma/PricingSection";
import { FAQSection } from "@/components/sintagma/FAQSection";
import { FinalCTASection } from "@/components/sintagma/FinalCTASection";
import { Footer } from "@/components/sintagma/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ComparisonSection />
        <SecuritySection />
        <TestimonialsSection />
        <ForWhomSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
