
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
}) => {
  return (
    <Card className="transition-all hover:shadow-lg duration-300 h-full bg-white">
      <CardContent className="pt-6 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-school-green">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-3xl text-gray-400 mb-4">"</div>
          <p className="text-gray-600 mb-6 italic">{quote}</p>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
