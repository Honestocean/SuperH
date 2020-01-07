import React from "react";

export default function Hero1(props) {
  return (
    <div className="Hero">
      <h2>{props.super.name}</h2>
      <img alt="A Bomb" src={props.super.image.url}></img>
      <h3>{props.super.work.occupation}</h3>
      <button
        onClick={() => {
          props.prevSuperHero(1);
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          props.nextSuperHero(1);
        }}
      >
        next
      </button>
    </div>
  );
}
