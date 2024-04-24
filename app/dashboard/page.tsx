import React from "react";
import UserContainer from "../components/UserContainer/UserContainer";
import DashboardMid from "./DashboardComponents/DashboardMid";

const page = () => {
  return (
    <UserContainer active="dashboard">
      <DashboardMid />
    </UserContainer>
  );
};

export default page;
