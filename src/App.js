import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Display = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Button = styled.button`
  border: 0;
  padding: 10px;
  margin: 10px;
  width: 150px;
`;

const Attributes = styled.div`
  display: flex;
  justify-content: space-evenly;

  color: red;
  font-size: 24px;

`;

const Attributes2 = styled(Attributes)`
color: blue;
`

function App() {

  
  const [play, setPlay] = useState(0);
  const [draw, setDraw] = useState(0);

  var p = Number(play / (play + draw)).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2
  });
  var s = Number(draw / (play + draw)).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2
  });

  useEffect(() => {
    setPlay(parseInt(window.localStorage.getItem("play")));
    setDraw(parseInt(window.localStorage.getItem("draw")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("play", play);
    window.localStorage.setItem("draw", draw);
  }, [play, draw]);

  return (
    <div className="App">
      <Display>
        <Attributes>
          <p>Play: {play}</p>
          <p>Draw: {draw}</p>
        </Attributes>

        <Attributes2>
          <p>On Play: {p}</p>
          <p>On Draw: {s}</p>
        </Attributes2>

        <Attributes>
          <Button
            onClick={() => {
              setPlay(play + 1);
            }}
          >
            Play
          </Button>

          <Button
            onClick={() => {
              setDraw(draw => draw + 1);
            }}
          >
            Draw
          </Button>
        </Attributes>

      </Display>
    </div>
  );
}

export default App;
