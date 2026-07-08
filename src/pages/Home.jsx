import About from "@/components/About";
import ClientFeedback from "@/components/ClientFeedback";
import FindClass from "@/components/FindClass";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import GlobalResidence from "@/components/GlobalResidence";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Memberships from "@/components/Memberships";
import MembershipTiers from "@/components/MembershipTiers";
import Navbar from "@/components/Navbar";
import SanctumDigital from "@/components/SanctumDigital";
import React from "react";

function Home() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="find-class">
        <FindClass />
      </section>
      <section id="memberships">
        <Memberships />
      </section>
      <section id="membership-tiers">
        <MembershipTiers />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="sanctum-digital">
        <SanctumDigital />
      </section>

      <section id="global-residence">
        <GlobalResidence />
      </section>
      <section id="client-feedback">
        <ClientFeedback />
      </section>

      <section id="get-started">
        <GetStarted />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;
