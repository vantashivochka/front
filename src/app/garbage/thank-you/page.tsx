import ThankYoubanner from "@/components/thank-you-banner";
import React from "react";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <>
      <ThankYoubanner type="garbage" />
    </>
  );
};

export default Page;
