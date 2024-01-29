"use client";

import { CargoPriceListItem } from "@/config/price-list";
import { ColumnDef } from "@tanstack/react-table";

export const cargoColumns: ColumnDef<CargoPriceListItem>[] = [
  {
    accessorKey: "title",
    header: "Машина",
  },
  {
    accessorKey: "price",
    header: "Ціна",
    cell: ({ row }) => {
      return <span className="font-medium">{`${row.getValue("price")}₴ + 200₴ вантажівник`}</span>
    },
  },
];
