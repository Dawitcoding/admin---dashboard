import React from "react";
import StatusGrid from "./StatusGrid";
import ChartSection from "./ChartSection";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* status Grid */}
      <StatusGrid />
      <ChartSection />
    </div>
  );
};

export default Dashboard;
