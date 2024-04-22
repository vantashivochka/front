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
  createdAt: string;
  updatedAt: string;
  name: string;
  text: string;
  rating: number;
}

const Reviews: React.FC = () => {
  return (
    <section
      className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-20 py-10 flex flex-col gap-6"
      id="reviews"
    >
      <h2 className="font-bold text-2xl text-center">Що люди кажуть про нас</h2>
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
          {[
            {
              id: "65bb5750efa97454cf03aa1e",
              createdAt: "2024-02-01T08:33:20.154Z",
              updatedAt: "2024-02-01T08:33:20.154Z",
              name: "Іван",
              text: "Швидко загрузили, швидко відвезли, питань не маю",
              rating: 5,
            },
            {
              id: "65bb583cefa97454cf03aa1f",
              createdAt: "2024-02-01T08:37:16.112Z",
              updatedAt: "2024-02-01T08:37:16.112Z",
              name: "Олександр",
              text: "Домовились вивезти побутовий хлам з приватного дому в Ірпіні. Хлопці швидко все зробили в одну ходку. Рекомендую.",
              rating: 4,
            },
            {
              id: "65bb5873efa97454cf03aa20",
              createdAt: "2024-02-01T08:38:11.453Z",
              updatedAt: "2024-02-01T08:38:11.453Z",
              name: "Наталія",
              text: "Допомогли вивезти сміття з офісного комплексу. Думав, що треба буде возити декілька разів, але все вийшло в одну. Можу радити",
              rating: 5,
            },
            {
              id: "65bb5909efa97454cf03aa21",
              createdAt: "2024-02-01T08:40:41.343Z",
              updatedAt: "2024-02-01T08:40:41.343Z",
              name: "Роман",
              text: "Живу в Гостомелі. Треба було швидко перевезти речі в нову квартиру. Зробили швидко.",
              rating: 5,
            },
            {
              id: "65bb5917efa97454cf03aa22",
              createdAt: "2024-02-01T08:40:55.397Z",
              updatedAt: "2024-02-01T08:40:55.397Z",
              name: "Іванна",
              text: "Треба було вивезти ціле подвір'я забите побутового хламу. Зробили все в 2 ходки, возили швидко, грузили по максимуму. Контакт зберігла, дякую.",
              rating: 4,
            },
            {
              id: "65bb5928efa97454cf03aa23",
              createdAt: "2024-02-01T08:41:12.020Z",
              updatedAt: "2024-02-01T08:41:12.020Z",
              name: "Станіслав",
              text: "Гарний сервіс",
              rating: 5,
            },
            {
              id: "65bb5936efa97454cf03aa24",
              createdAt: "2024-02-01T08:41:26.800Z",
              updatedAt: "2024-02-01T08:41:26.800Z",
              name: "Юрій",
              text: "Все круто, замовляю Газель на 1 тону другий раз, все швидко і без тянучки",
              rating: 5,
            },
            {
              id: "65bb5940efa97454cf03aa25",
              createdAt: "2024-02-01T08:41:36.953Z",
              updatedAt: "2024-02-01T08:41:36.953Z",
              name: "Валерій",
              text: "Замовив переїзд офісу, все довезли цілим як і було.",
              rating: 5,
            },
          ].map((review, index) => (
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
    </section>
  );
};

export default Reviews;
