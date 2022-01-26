import React from "react";
import styled from "styled-components";
import Card from "./Card";

function Cards({ items }) {
  return (
    <Container>
      {items.map((data) => data.activities.map((item) => <Card item={item} />))}
    </Container>
  );
}

export default Cards;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  flex: 0.75;
  height: 100%;
  grid-column-gap: 3%;
  @media (max-width: 1252px) {
    margin-right: 30px;
  }
`;
