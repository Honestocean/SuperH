import React from "react";

export default function Hero1(props) {
  return (
    <div className="Hero">
      <h2>{props.super.name}</h2>
      <img alt="A Bomb" src={props.super.image.url}></img>
      <h3>{props.super.work.occupation}</h3>
      <form>
        <select name="powerStats" id="power">
          <option value="intelligence">Intelligence</option>
          <option value="strength">Strength</option>
          <option value="speed">Speed</option>
          <option value="durability">Durability</option>
          <option value="power">Power</option>
          <option value="combat">Combat</option>
        </select>
      </form>
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
