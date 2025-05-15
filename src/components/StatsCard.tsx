
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  count: string;
  label: string;
  icon: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ count, label, icon }) => {
  return (
    <Card className="transition-all hover:shadow-lg duration-300 h-full bg-white">
      <CardContent className="pt-6 pb-4 text-center">
        <div className="bg-school-light-green mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <img src={icon} alt={label} className="w-8 h-8" />
        </div>
        <h3 className="text-4xl font-bold text-school-blue mb-2">{count}</h3>
        <p className="text-gray-600">{label}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
