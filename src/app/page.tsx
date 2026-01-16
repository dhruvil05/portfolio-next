import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <IndustriesPreview />
      <CaseStudiesPreview />
      <CTA />
    </>
  );
}