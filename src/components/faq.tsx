"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import { FAQ } from "@/config/faq";

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-10">
      <h2 className="font-bold text-2xl text-center">Відповіді на питання</h2>
      <MaxWidthWrapper>
        <Accordion type="multiple">
          {FAQ.map((faq) => (
            <AccordionItem value={faq.id + "item"} key={faq.id}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
