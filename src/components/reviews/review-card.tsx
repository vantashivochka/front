import React from "react";
import { Card, CardContent } from "../ui/card";
import { ReviewItem } from "@/config/reviews";

interface ReviewCardProps extends ReviewItem {}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, text }) => {
  return (
    <Card className="shadow-md">
      <CardContent className="flex flex-col gap-2 p-6">
        <div className="inline-flex justify-between items-center">
          <span className="text-lg font-bold text-slate-900">{name}</span>
          <p className="font-semibold text-sm">
            Оцінка: <span className="text-orange-500">{rating}</span>
          </p>
        </div>
        <p className="text-md text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
