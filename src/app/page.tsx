import Hero from "@/components/home/Hero";
import LogoWall from "@/components/home/LogoWall";
import Differentiators from "@/components/home/Differentiators";
import Process from "@/components/home/Process";
import ServicesPreview from "@/components/home/ServicesPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoWall />
      <Differentiators />
      <Process />
      <ServicesPreview />
      <IndustriesPreview />
      <CaseStudiesPreview />
      <FAQ />
      <CTA />
    </>
  );
}