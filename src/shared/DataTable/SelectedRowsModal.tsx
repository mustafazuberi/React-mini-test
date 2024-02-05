import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Props<T> {
  setShowSelectedRowsModal: Dispatch<SetStateAction<boolean>>;
  selectedRows: T[];
}

function SelectedRowsModal<T extends Record<string, any>>({
  selectedRows,
  setShowSelectedRowsModal,
}: Props<T>) {
  const renderSelectedRows = () => {
    if (selectedRows.length === 0) {
      return <span>You have not selected any row.</span>;
    }

    const keys = Object.keys(selectedRows[0]) as (keyof T)[];

    return (
      <Table>
        <TableBody>
          {selectedRows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {keys.map((key) => (
                <TableCell key={key as string}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <Dialog
      open={true}
      onOpenChange={() => setShowSelectedRowsModal((prev) => !prev)}
    >
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Selected Rows</DialogTitle>
          {/* <DialogDescription className=""> */}
          {renderSelectedRows()}
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SelectedRowsModal;
