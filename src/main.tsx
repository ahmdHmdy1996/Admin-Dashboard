import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard.jsx";
import Team from "./page/team/Team.jsx";
import Contacts from './page/contacts/Contacts';
import BarChart from './page/barChart/BarChart';
import Calendar from './page/calendar/Calendar';
import Faq from './page/faq/Faq';
import Form from './page/form/Form';
import Geography from './page/geography/Geography';
import Invoices from './page/invoices/Invoices';
import LineChart from './page/lineChart/LineChart';
import PieChart from './page/pieChart/PieChart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route path="path" element={<element name />} /> */}
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
