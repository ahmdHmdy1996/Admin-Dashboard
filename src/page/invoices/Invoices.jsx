import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";


export default function Invoices() {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
