import AgenticAIShowcase from "@/components/widget/AgenticAIShowcase";
import DemoBanner from "@/components/widget/DemoBanner";
import Features from "@/components/widget/Features";
import FeaturesShowcase from "@/components/widget/FeaturesShowcase";
import FrequentlyAskedQuestions from "@/components/widget/FrequentlyAskedQuestions";
import Hero from "@/components/widget/Hero";
import KeyBenefits from "@/components/widget/KeyBenefits";
import Testimonials from "@/components/widget/Testimonials";

export default function Home() {
  return (
    <main className="">
      {/* <MainHome /> */}
      <Hero />
      <div className="bg-[#141219] w-full space-y-5">
        <Features />
        <div className='h-1 w-[78.9vw] bg-[#F5F5F533]/20 mx-auto mt-10' />
        <KeyBenefits />
      </div>
      {/* <AgenticAIShowcase /> */}
      <FeaturesShowcase />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <DemoBanner />
    </main>
  );
}
