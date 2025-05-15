
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  image,
  date,
  category,
}) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg duration-300 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-4 left-4 bg-school-blue text-white px-3 py-1 rounded-full text-xs">
          {category}
        </div>
      </div>
      <CardHeader className="pb-2 pt-4">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full hover:bg-school-light-blue hover:text-school-blue">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
