import React from "react";
import MaxWidthWrapper from "../ui/max-width-wrapper";
import { GarbageDataTable } from "../tables/garbage/data-table";
import {
  GARBAGE_PRICE_LIST,
  CARGO_PRICE_LIST,
  PriceListItem,
} from "@/config/price-list";
import { garbageColumns } from "../tables/garbage/columns";
import { CargoDataTable } from "../tables/cargo/data-table";
import { cargoColumns } from "../tables/cargo/columns";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import ErrorBanner from "../ui/error-banner";

const Prices: React.FC = async () => {
  async function getList(category: "cargo" | "garbage") {
    try {
      const { data } = await axios.get(`/prices?category=${category}`);

      if (data instanceof AxiosError) {
        throw new Error();
      }

      return data as PriceListItem[];
    } catch (error) {
      console.log(error);
    }
  }

  const cargoList = await getList("cargo");
  const garbageList = await getList("garbage");

  return (
    <section className="border-t py-10 border-gray-200 mt-10" id="price">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-semibold text-xl">Грузоперевезення</h3>
              {cargoList && !!cargoList.length && (
                <CargoDataTable columns={cargoColumns} data={cargoList} />
              )}
              {!cargoList && <ErrorBanner />}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-semibold text-xl">Вивезення сміття</h3>
              {garbageList && !!garbageList.length && (
                <GarbageDataTable columns={garbageColumns} data={garbageList} />
              )}
              {!garbageList && <ErrorBanner />}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Prices;
