
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AchievementCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  year: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  image,
  level,
  year,
}) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="default" className="bg-school-blue">
            {level}
          </Badge>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
