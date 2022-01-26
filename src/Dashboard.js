import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import InfoCard from "./InfoCard";
function Dashboard({ items, filter }) {
  return (
    <Container>
      <InfoCard filter={filter} />
      <Cards items={items} />
    </Container>
  );
}

export default Dashboard;
const Container = styled.div`
  height: 68%;
  width: 80%;
  // background-color: white;
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
