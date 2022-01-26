import React from "react";
import styled from "styled-components";

function Card({ item }) {
  return (
    <Container>
      <CardBackground
        bgImg={item.backgroundImg}
        bgColor={item.backgroundColor}
      ></CardBackground>
      <CardInfo>
        <CardInfoHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardDots>
            <img src="/images/icon-ellipsis.svg" alt="" />
          </CardDots>
        </CardInfoHeader>

        <CartCurrentHours>{item.current}hrs</CartCurrentHours>
        <CartPerviousHours>
          last {item.previousTime  ? item.previousTime: "week"} - {item.previous}hrs
        </CartPerviousHours>
      </CardInfo>
    </Container>
  );
}

export default Card;
const Container = styled.div`
  flex: 0.23;
  height: 255px;
  background-color: white;
  margin-bottom: 25px;
  border-radius: 15px;
 
  border-radius: 15px;
 
`;
const CardBackground = styled.div`
  height: 60px;
  background-repeat: no-repeat;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  background-position: top -10px right 20px;
`;
const CardInfo = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 15px;
  margin-top: -12px;
  background-color: hsl(235, 46%, 20%);
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`;
const CardInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardTitle = styled.h3`
  padding-top: 30px;
  font-size: 18px;
  color: white;
  font-family: Rubik;
  font-weight: 400;
`;
const CardDots = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
  padding-top: 25px;
  img {
    object-fit: contain;
  }
`;

const CartCurrentHours = styled.h1`
  padding-top: 30px;
  font-size: 60px;
  color: white;
  font-family: Rubik;
  font-weight: 300;
`;
const CartPerviousHours = styled.h4`
  font-size: 18px;
  color: hsl(236, 100%, 87%);
  font-family: Rubik;
  padding-top: 10px;
  font-weight: 300;
`;
