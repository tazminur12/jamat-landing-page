import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CandidateProfile from "@/components/CandidateProfile";
import PeoplesManifesto from "@/components/PeoplesManifesto";
import UpcomingEvents from "@/components/UpcomingEvents";
import RecentNews from "@/components/RecentNews";
import PhotoGallery from "@/components/PhotoGallery";
import ProfileFrameCampaign from "@/components/ProfileFrameCampaign";
import DonationSection from "@/components/DonationSection";
import CallToAction from "@/components/CallToAction";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CandidateProfile />
      <PeoplesManifesto />
      <UpcomingEvents />
      <RecentNews />
      <PhotoGallery />
      <ProfileFrameCampaign />
      <DonationSection />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}
