import React from "react";
import { LoaderContainer } from "./styled";
import Loader from "../../assets/loader.gif";

export const Loading = () => {
  return (
    <LoaderContainer>
      <img src={Loader} alt="Loader" />
    </LoaderContainer>
  );
};
