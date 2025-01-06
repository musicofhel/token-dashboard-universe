import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Roadmap = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary mb-4">$WindowButt Roadmap</h2>
      <p className="text-gray-600 mb-6">
        A Year-Long Celebration of Culture and Community
      </p>

      <div className="relative">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-center">
            <h3 className="font-semibold">January 1st - 14th</h3>
            <p className="text-sm text-gray-600">Dry January</p>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-primary" />
              Event Focus
            </h4>
            <p className="text-sm text-gray-600">
              Promote wellness and community goals
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Upcoming Utilities</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Merch drop: shirts/athletic wear</li>
              <li>• Community burns</li>
              <li>• Community meme contest</li>
              <li>• Animated episode 1</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          Swipe or click arrows to explore upcoming events
        </p>
      </div>
    </div>
  );
};

export default Roadmap;