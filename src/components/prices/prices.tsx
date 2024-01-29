import React from "react";
import MaxWidthWrapper from "../ui/max-width-wrapper";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GarbageDataTable } from "../tables/garbage/data-table";
import { GARBAGE_PRICE_LIST, CARGO_PRICE_LIST } from "@/config/price-list";
import { garbageColumns } from "../tables/garbage/columns";
import { CargoDataTable } from "../tables/cargo/data-table";
import { cargoColumns } from "../tables/cargo/columns";

const Prices: React.FC = () => {
  return (
    <section className="border-t py-10 border-gray-200 mt-10" id="price">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-semibold text-xl">Грузоперевезення</h3>
              <CargoDataTable columns={cargoColumns} data={CARGO_PRICE_LIST} />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-semibold text-xl">Вивезення сміття</h3>
              <GarbageDataTable
                columns={garbageColumns}
                data={GARBAGE_PRICE_LIST}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Prices;
