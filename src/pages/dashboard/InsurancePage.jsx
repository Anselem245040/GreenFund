import React from "react";
import { Insurance } from "../../components/dashboard/Insurance";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const InsurancePage = () => {
  const { name } = useContext(UserContext);
  return (
    <div>
      <Insurance name={name} />
    </div>
  );
};
