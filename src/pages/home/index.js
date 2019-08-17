import React from "react";
import HeroSection from "./../../components/HeroSection";
import ContentSection from "./../../components/ContentSection";
import FaqSection from "./../../components/FaqSection";
import FeaturesSection from "./../../components/FeaturesSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Start Free Trial"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <ContentSection
        color="white"
        size="medium"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <FaqSection
        color="white"
        size="medium"
        title="Frequently Asked Questions"
        subtitle="Here are some answers to the questions we hear from people the most."
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <FaqSection
        color="white"
        size="medium"
        title="Frequently Asked Questions"
        subtitle="Here are some answers to the questions we hear from people the most."
      />
      <FaqSection
        color="white"
        size="medium"
        title="Frequently Asked Questions"
        subtitle="Here are some answers to the questions we hear from people the most."
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default HomePage;
