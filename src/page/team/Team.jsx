import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Typography, createTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  Palette,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const theme = createTheme();
const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 33,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  { field: "age", headerName: "Age", headerAlign: "center", align: "center" },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "access",
    headerName: "Access",
    headerAlign: "center",
    align: "center",
    renderCell: ({ row: { access } }) => {
      return (
        <Box
          sx={{
            p: "5px",
            width: "95px",
            textAlign: "center",
            borderRadius: "2px",
            color: "#FFF",
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "Manager"
                ? "#7b1fa2"
                : "#009688",
          }}
        >
          {access === "Admin" && (
            <AdminPanelSettingsOutlined fontSize="small" />
          )}
          {access === "Manager" && <SecurityOutlined fontSize="small" />}
          {access === "User" && <LockOpenOutlined fontSize="small" />}
          <Typography fontSize={"13px"}>{access}</Typography>
        </Box>
      );
    },
  },
];

export default function Team() {
  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
}
