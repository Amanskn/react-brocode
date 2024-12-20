import React from "react";
import y from "./Card.module.css";
function Card({ name, age, ...p }) {
  console.log("Card component rendered");
  console.log("p is ", p);

  // const fruits = ["Apple", "Banana", "Orange"];
  // const [a, ...b] = fruits;
  // console.log("a is ", a);
  // console.log("b is ", b);

  return (
    <div className={y.card123}>
      <img
        src="https://imgs.search.brave.com/Gekd3UhEa2J1WUQq0XK5nZKG4xUGGjcH0YwDGK-uwEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pZXNt/YXJ0c3lzdGVtcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvbGFwdG9w/LWltYWdpbmctMTAy/NHg2ODMuanBn"
        alt=""
        style={{ width: "200px" }}
      />
      <h2
        style={{
          border: "2px solid black",
        }}
      >
        {name}
        {age}
      </h2>

      <p
        style={{
          border: "2px solid black",
        }}
      >
        I am a software developer {p.booleanValue ? "Yes" : "No"}
      </p>
      {/* {a} */}
      <div
        style={{
          border: "2px solid red",
          // textAlign: "left",
        }}
      >
        inner div
      </div>
    </div>
  );
}
export { Card };
