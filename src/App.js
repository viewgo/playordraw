import React, { useState, useEffect } from "react";
import "./App.css";

import { Display, Button, Attributes, Attributes2 } from "./styles";

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
          <h1>PLAY</h1>
          <h2>{play}</h2>
          <p>{p}</p>
          <Button
            onClick={() => {
              setPlay(play + 1);
            }}
          >
            Play
          </Button>
        </Attributes>

        <Attributes2>
          <h1>DRAW</h1>
          <h2>{draw}</h2>
          <p>{s}</p>
          <Button
            onClick={() => {
              setDraw(draw => draw + 1);
            }}
          >
            Draw
          </Button>
        </Attributes2>
      </Display>
    </div>
  );
}

export default App;
