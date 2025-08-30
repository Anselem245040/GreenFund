import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Dashboard } from "../../components/dashboard/Dashboard";
export const DashboardPage = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      <Dashboard name={name} />
    </div>
  );
};
