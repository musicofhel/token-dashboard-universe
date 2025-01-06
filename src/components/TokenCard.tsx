import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const TokenCard = () => {
  const { toast } = useToast();
  const contractAddress = "BSc0qTgbiSmEZzlPppbpPXw77j1hA8tBwRj...";

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Address copied!",
      description: "Contract address copied to clipboard",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">$RIZZMAS</h1>
          <p className="text-sm text-gray-500">Seasonal Solana Token</p>
        </div>
        <div className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
          Pre-trending
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Price USD</p>
          <p className="text-xl font-bold">$0.000002</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Market Cap</p>
          <p className="text-xl font-bold">$1,148,995</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Liquidity</p>
          <p className="text-xl font-bold">$357,825.04</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">24h Volume</p>
          <p className="text-xl font-bold">$139,190.22</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Contract Address</p>
        <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
          <p className="text-sm font-mono truncate">{contractAddress}</p>
          <Button variant="ghost" size="icon" onClick={copyAddress}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Buy $RIZZMAS
        </Button>
        <Button variant="outline" className="w-full">
          Buy Merch
        </Button>
        <Button variant="outline" className="w-full">
          DexTools
        </Button>
      </div>
    </div>
  );
};

export default TokenCard;