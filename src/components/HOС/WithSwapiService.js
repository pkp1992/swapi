import React from "react";
import { SwapiserviceConsumer } from "../SwapiServiceContext";

const WithSwapiService = (mapMethodToProps) => (Wrapped) => props => {
  return (
    <SwapiserviceConsumer>
      {swapiService => {
        const servisProps = mapMethodToProps(swapiService);
        return <Wrapped {...props} {...servisProps}></Wrapped>;
      }}
    </SwapiserviceConsumer>
  );
};

export default WithSwapiService;
