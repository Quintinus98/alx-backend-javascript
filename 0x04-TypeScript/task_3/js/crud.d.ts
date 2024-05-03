import { RowID, RowElement } from "../interface";

// interface insertRowFunc {
//     (row: RowElement): number;
// }
// interface deleteRowFunc {
//     (row: RowID): void;
// }
// interface updateRowFunc {
//     (rowId: RowID, row: RowElement): RowID;
// }


export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;