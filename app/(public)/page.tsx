import { PublicHero } from "@/components/public-hero";
import { Page01BusinessContext } from "@/components/page01-business-context";
import { Page01CoreSections } from "@/components/page01-core-sections";

export default function HomePage() {
  return (
    <>
      <PublicHero />
      <Page01BusinessContext />
      <Page01CoreSections />
    </>
  );
}
