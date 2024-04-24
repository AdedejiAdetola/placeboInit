import React from "react";
import UserContainer from "../components/UserContainer/UserContainer";
import SearchMid from "./SearchComponent/SearchMid";

const page = () => {
  return (
    <UserContainer active="">
      <SearchMid />
    </UserContainer>
  );
};

export default page;
