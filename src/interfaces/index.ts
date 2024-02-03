import { ColumnDef } from "@tanstack/react-table";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface DataTableColumns {
  header: string;
  accessorKey: string;
}
[];
