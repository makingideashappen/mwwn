import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #3498db;
  opacity: 0.3;
  height: 30px;
  width: 100%;
  transform: translateY(30px);
  background: repeating-linear-gradient(
    -62deg,
    #3498db,
    #3498db 5px,
    transparent 5px,
    transparent 10px
  );
`;

const PageWrapper = styled.div`
  opacity: 0.3;
  height: 30px;
  background: repeating-linear-gradient(
    62deg,
    #3498db,
    #3498db 5px,
    #ecf0f1 5px,
    #ecf0f1 10px
  );
`;

const App = () => {
  return (
    <div>
      <Container />
      <PageWrapper />
    </div>
  );
};

export default App;
