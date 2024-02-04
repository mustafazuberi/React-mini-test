import { ColumnDef } from "@tanstack/react-table";

export const generateColumns = <T>(dataObj: T): ColumnDef<T>[] => {
  if (!dataObj) return [];

  const generatedKeys = Object.keys(dataObj).map((key) => ({
    header: key.toUpperCase(),
    accessorKey: key,
  }));

  return generatedKeys;
};

// dummy change