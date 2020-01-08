import React from "react";
import Form from "./Form";
import Charts from './Charts'


export default function Hero2(props) {
  const { turn, statChooser } = props;

  const { powerstats } = props.super
  const arr = Object.values(powerstats);
  console.log("hero2", arr)
  if (arr.filter(powerstat => {
    return powerstat === "null"
  }).length > 0) {
    props.nextSuperHero(2);
  }

  return (
    <div className="Hero">
      <h2>{props.super.name}</h2>
      <img alt="" src={props.super.image.url}></img>
      <h3>{props.super.work.occupation}</h3>
      <Form turn={!turn} statChooser={statChooser} />
      <button
        onClick={() => {
          props.prevSuperHero(2);
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          props.nextSuperHero(2);
        }}
      >
        next
      </button>
      <Charts powerstats={props.super.powerstats} />
    </div>
  );
}
