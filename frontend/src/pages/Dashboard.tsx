import MainContent from "@/components/pages/dashboard/MainContent";
import SideBar from "@/components/pages/dashboard/SideBar";
import { useState } from "react";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <div className="flex">
      <SideBar setActivePage={setActivePage} activePage={activePage} />
      <MainContent activePage={activePage} />
    </div>
  );
};

export default Dashboard;
