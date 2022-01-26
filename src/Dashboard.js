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
  margin-left: 20px;
  height:500px;
  width: 1440px;
  // background-color: white;
  display: flex;
  @media (max-width: 1252px) {
    flex-direction: column;
  }
`;
