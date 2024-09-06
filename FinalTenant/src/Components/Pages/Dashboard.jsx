import React, { lazy } from "react";
import FinancialProperty from "../Dashboard/FinancialProperty";
const HelpDeskComponent = lazy(() => import("../Dashboard/HelpDeskComponent"));

function Dashboard({ setAsideToggleActive }) {
  return (
    <section className="px-5 lg:px-10">
      <HelpDeskComponent />
      <FinancialProperty />
    </section>
  );
}

export default Dashboard;
