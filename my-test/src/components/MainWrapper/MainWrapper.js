import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 3% 20px;
`;

const MainWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainWrapper;
