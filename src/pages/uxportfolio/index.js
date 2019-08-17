import React from "react";
import CtaSection3 from "./../../components/CtaSection3";
import ContentCardsSection from "./../../components/ContentCardsSection";
import CtaSection2 from "./../../components/CtaSection2";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function UxPortfolioPage(props) {
  const router = useRouter();

  return (
    <>
      <CtaSection3
        color="dark"
        size="medium"
        title="For the love of god buy our product"
        buttonText="Okay fine"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <ContentCardsSection
        color="white"
        size="medium"
        title="Featured Content"
        subtitle=""
      />
      <CtaSection2
        color="white"
        size="medium"
        title="Ready to get started?"
        subtitle="Or please get started now even if you don't feel ready. We're just really going to need you to get started. Click it. Click the button."
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default UxPortfolioPage;
