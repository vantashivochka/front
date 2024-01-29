import Cities from "@/components/cities";
import ContactForm from "@/components/contact-form";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Prices from "@/components/prices/prices";
import Reviews from "@/components/reviews/reviews";
import Service from "@/components/service";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense>
        <ContactForm />
      </Suspense>
      <Prices />
      <div
        style={{
          background:
            "url(https://sieben-umzuege-images.fra1.cdn.digitaloceanspaces.com/sieben-umzuege/images/BG/lightBlueShape.svg) 100% no-repeat",
        }}
      >
        <Cities />
        <Reviews />
        <Service />
      </div>
      <Faq />
      <Suspense>
        <ContactForm className="mt-10 max-w-xl" />
      </Suspense>
    </>
  );
}
