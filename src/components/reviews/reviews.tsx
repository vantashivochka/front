"use client";

import React from "react";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ReviewCard from "./review-card";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export interface ReviewItem {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  text: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const { data: reviews, isLoading: isReviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axios.get("/review");

      if (data instanceof AxiosError) {
        throw new Error();
      }

      return data as ReviewItem[];
    },
    refetchOnWindowFocus: false,
  });

  return (
    <section
      className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-20 py-10 flex flex-col gap-6"
      id="reviews"
    >
      <h2 className="font-bold text-2xl text-center">Що люди кажуть про нас</h2>
      {reviews && !!reviews.length && (
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="items-center">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ReviewCard key={review.id} {...review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex md:block justify-center gap-6 mt-8 md:mt-0">
            <CarouselPrevious className="static md:absolute" />
            <CarouselNext className="static md:absolute" />
          </div>
        </Carousel>
      )}
      {isReviewsLoading && (
        <div className="flex justify-center mt-5">
          <Loader2 className="animate-spin h-8 w-8 text-muted-foreground" />
        </div>
      )}
    </section>
  );
};

export default Reviews;
