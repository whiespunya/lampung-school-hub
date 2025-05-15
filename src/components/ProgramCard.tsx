
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1 duration-300 h-full bg-white flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <div className="bg-school-light-blue p-3 rounded-lg">
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full hover:bg-school-blue hover:text-white">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
