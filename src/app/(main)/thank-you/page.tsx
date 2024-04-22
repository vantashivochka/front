import ThankYoubanner from "@/components/thank-you-banner";
import React from "react";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className="flex-1">
      <ThankYoubanner type="main" />
    </div>
  );
};

export default Page;
