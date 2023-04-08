import React, { PropsWithChildren } from "react";

interface IContainerProps extends PropsWithChildren {}

const Container: React.FunctionComponent<IContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
