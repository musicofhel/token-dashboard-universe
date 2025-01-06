import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Community Gives Back
      </h2>
      <p className="text-gray-600 mb-6">This Season, We Spread Joy Together</p>

      <div className="space-y-6">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            Community Holiday Challenge
          </h3>
          <p className="text-gray-600 text-sm">
            Share videos of yourself doing nice deeds this holiday season with
            #RIZZMAS!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-lg mb-2">
              <h4 className="font-semibold">Homeless Shelter</h4>
              <p className="text-sm text-gray-600">Hand out meals</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-lg mb-2">
              <h4 className="font-semibold">Toy Drives</h4>
              <p className="text-sm text-gray-600">Donate toys</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-lg mb-2">
              <h4 className="font-semibold">Donations</h4>
              <p className="text-sm text-gray-600">Support charities</p>
            </div>
          </div>
        </div>

        <Button className="w-full">Share Your Good Deed</Button>
      </div>
    </div>
  );
};

export default CommunitySection;