import React from "react";
import MaxWidthWrapper from "../ui/max-width-wrapper";
import { CargoDataTable } from "../tables/cargo/data-table";
import { cargoColumns } from "../tables/cargo/columns";

const Prices: React.FC = async () => {

  return (
    <section
      className="border-t py-10 border-gray-200 dark:border-gray-500 mt-10"
      id="price"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-semibold text-xl">Грузоперевезення</h3>

              <CargoDataTable
                columns={cargoColumns}
                data={[
                  {
                    id: "65ba273d821695fbd3ca3317",
                    createdAt: "2024-01-31T10:55:56.815Z",
                    updatedAt: "2024-01-31T10:55:56.815Z",
                    title: "Міні Бус",
                    description: "",
                    price: 600,
                  },
                  {
                    id: "65ba2730821695fbd3ca3313",
                    createdAt: "2024-01-31T10:55:43.913Z",
                    updatedAt: "2024-01-31T10:55:43.913Z",
                    title: "Середній Бус",
                    description: null,
                    price: 700,
                  },
                  {
                    id: "65ba2713821695fbd3ca330f",
                    createdAt: "2024-01-31T10:55:14.649Z",
                    updatedAt: "2024-01-31T10:55:14.649Z",
                    title: "Великий Бус",
                    description: null,
                    price: 800,
                  },
                  {
                    id: "65ba26e4821695fbd3ca3304",
                    createdAt: "2024-01-31T10:54:28.217Z",
                    updatedAt: "2024-01-31T10:54:28.217Z",
                    title: "Газель",
                    description: null,
                    price: 900,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Prices;
