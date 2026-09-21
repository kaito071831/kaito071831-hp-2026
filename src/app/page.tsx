import BackgroundDecor from "@/components/BackgroundDecor";
import ProfileCard from "@/components/ProfileCard";
import SkillsPanel from "@/components/SkillsPanel";
import CareerPanel from "@/components/CareerPanel";
import AwardsPanel from "@/components/AwardsPanel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site-wrap">
      <BackgroundDecor />
      <main className="site-main">
        <ProfileCard />
        <div className="main-col">
          <SkillsPanel />
          <CareerPanel />
          <AwardsPanel />
        </div>
      </main>
      <Footer />
    </div>
  );
}
