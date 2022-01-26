import "./App.css";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import data from "./data";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    {
      id: 2,
      category: "weekly",
      activities: [
        {
          name: "Work",
          current: 32,
          previous: 36,
          backgroundImg: "icon-work.svg",
          backgroundColor: "hsl(15, 100%, 70%)",
        },
        {
          name: "Play",
          current: 10,
          previous: 8,
          backgroundImg: "icon-play.svg",
          backgroundColor: "hsl(195, 74%, 62%)",
        },
        {
          name: "Study",
          current: 4,
          previous: 7,
          backgroundImg: "icon-study.svg",
          backgroundColor: "hsl(348, 100%, 68%)",
        },
        {
          name: "Exercise",
          current: 4,
          previous: 5,
          backgroundImg: "icon-exercise.svg",
          backgroundColor: "hsl(145, 58%, 55%)",
        },
        {
          name: "Social",
          current: 5,
          previous: 10,
          backgroundImg: "icon-social.svg",
          backgroundColor: "hsl(264, 64%, 52%)",
        },
        {
          name: "Self Care",
          current: 2,
          previous: 2,
          backgroundImg: "icon-self-care.svg",
          backgroundColor: "hsl(43, 84%, 65%)",
        },
      ],
    },
  ]);
  const filter = (category) => {
    let filteredData = data.filter((item) => item.category === category);
    setItems(filteredData);
  };

  return (
    <Container>
      <Dashboard items={items} filter={filter} />
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: hsl(226, 43%, 10%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1540px) {
    height: 100%;
  }
`;
