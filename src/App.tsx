import "./App.scss";
import "./bootstrap.min.css";

import Square from "./Component/Square";
import { useState } from "react";

const createNumArr = (x: number) => {
  const arr: number[] = [];
  for (let i = 0; i < x; i++) {
    arr.push(i);
  }
  return arr;
};

function App() {
  // const X = 20;
  // const Y = 20;

  const defaultArr = createNumArr(10);

  const [XArr, setX] = useState<number[]>([...defaultArr]);
  const [YArr, setY] = useState<number[]>([...defaultArr]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <label htmlFor="X">X</label>
            <input
              id="X"
              type="number"
              value={XArr.length}
              onChange={(e) => {
                const newLength = parseInt(e.target.value); //consider simplifying;
                setX(createNumArr(newLength));
              }}
            />

            <label htmlFor="Y">Y</label>
            <input
              id="Y"
              type="number"
              value={YArr.length}
              onChange={(e) => {
                const newLength = parseInt(e.target.value); //consider simplifying;
                setY(createNumArr(newLength));
              }}
            />
          </div>
          <div className="col-12">
            <>
              {YArr.map((column, h) => {
                return (
                  <div key={h} className="square-column">
                    {XArr.map((row, k) => {
                      return <Square key={`${h}-${k}`}></Square>;
                    })}
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
