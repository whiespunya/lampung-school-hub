
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12",
        center ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "h-1 w-24 bg-school-green mt-4",
          center ? "mx-auto" : ""
        )}
      ></div>
    </div>
  );
};

export default SectionTitle;
