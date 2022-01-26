import React from "react";
import styled from "styled-components";
function InfoCard({ filter }) {
  return (
    <Container>
      <InfoCardTop>
        <ImgContainer>
          <img src="/images/image-jeremy.png" alt="" />
          <UserName>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </UserName>
        </ImgContainer>
      </InfoCardTop>
      <InfoCardBottom>
        <button onClick={() => filter("dialy")}>Daily</button>
        <button type="button" autofocus onClick={() => filter("weekly")}>
          Weekly
        </button>
        <button onClick={() => filter("monthly")}>Monthly</button>
      </InfoCardBottom>
    </Container>
  );
}

export default InfoCard;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.23;
  background-color: hsl(235, 46%, 20%);
  border-radius: 15px;
  margin-right: 20px;
  height: 100%;
  @media (max-width: 1252px) {
    margin-right: 30px;
    margin-top: -100px;
    margin-bottom: 20px;
  }
`;
const InfoCardTop = styled.div`
  flex: 0.68;
  background-color: hsl(246, 80%, 60%);
  border-radius: 15px;
  padding: 30px;
`;
const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    border: 2px solid white;
  }
`;
const UserName = styled.div`
  margin-top: 40px;
  p {
    color: hsl(236, 100%, 87%);
    font-family: Rubik;
    font-weight: 300;
  }

  h1 {
    color: white;
    font-family: Rubik;
    font-weight: 300;
    font-size: 50px;
  }
  @media (max-width: 1252px) {
    margin-top: -80px;
    margin-left: 120px;
    width: 400px;
  }
  @media (max-width: 1000px) {
    margin-top: -70px;
    h1 {
      font-size: 35px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 30px;
    }
  }
`;
const InfoCardBottom = styled.div`
  flex: 0.32;
  padding-left: 30px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1252px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  button {
    all: unset;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 18px;
    color: hsl(235, 45%, 61%);
    font-family: Rubik;
    font-weight: 400;
    cursor: pointer;
    :hover {
      color: white;
    }
    :focus {
      color: white;
    }

    padding-top: 20px;
  }
`;
