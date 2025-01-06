import TokenCard from "@/components/TokenCard";
import SocialLinks from "@/components/SocialLinks";
import CommunitySection from "@/components/CommunitySection";
import Roadmap from "@/components/Roadmap";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <TokenCard />
        <SocialLinks />
        <CommunitySection />
        <Roadmap />
      </div>
    </div>
  );
};

export default Index;