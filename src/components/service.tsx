import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import Image from "next/image";
import borderText from "../../public/customTextBorder1.png";

const Service: React.FC = () => {
  return (
    <section id="service" className="py-5 sm:py-10">
      <h2 className="font-bold text-2xl text-center">Послуги які ми надаємо</h2>
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        <div className="flex flex-col w-full">
          <div className="relative">
            <h5 className="pt-8 pb-4 px-4 relative text-center font-semibold text-lg">
              Послуги вантажівників
              <Image fill src={borderText} alt="border-text" aria-hidden />
            </h5>
          </div>
          <p className="text-sm text-muted-foreground mt-5 text-center">
            Комплекс послуг, який може включати підйом, вивезення габаритних
            предметів, розбирання та пакування меблів, демонтажні роботи тощо.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="relative">
            <h5 className="pt-8 pb-4 px-4 relative text-center font-semibold text-lg">
              Офісний переїзд
              <Image fill src={borderText} alt="border-text" aria-hidden />
            </h5>
          </div>
          <p className="text-sm text-muted-foreground mt-5 text-center">
            Комплексна послуга з переміщення офісних меблів, оргтехніки та
            документації з одного приміщення до іншого з вантажниками або без
            них
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="relative">
            <h5 className="pt-8 pb-4 px-4 relative text-center font-semibold text-lg">
              Квартирний переїзд
              <Image fill src={borderText} alt="border-text" aria-hidden />
            </h5>
          </div>
          <p className="text-sm text-muted-foreground mt-5 text-center">
            Організація перевезення майна з вантажниками в нову квартиру або
            будинок, розпакування, збирання, розміщення меблів, техніки,
            особистих речей
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Service;
