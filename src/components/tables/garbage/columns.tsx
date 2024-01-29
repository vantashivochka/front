"use client";

import { GarbagePriceListItem } from "@/config/price-list";
import { ColumnDef } from "@tanstack/react-table";

export const garbageColumns: ColumnDef<GarbagePriceListItem>[] = [
  {
    accessorKey: "title",
    header: "Машина",
  },
  {
    accessorKey: "price",
    header: "Ціна",
    cell: ({ row }) => {
      return <span className="font-medium">{`${row.getValue("price")}₴ + 100₴ вантажівник`}</span>;
    },
  },
];
