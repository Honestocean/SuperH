import React, { Component } from "react";

export default class Result extends Component {
  state = {
    msg: "Let's get ready to ruuuuuuuumble!!!",
    winners: [],
    playerWins: []
  };

  storeFight = () => {};

  render() {
    return (
      <div>
        <button
          id="fightButton"
          onClick={() => {
            this.calculateWinner();
          }}
        >
          Fight!
        </button>
        <button
          onClick={() => {
            this.props.refreshNewHero();
          }}
        >
          ANOTHER ONE
        </button>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }

  calculateWinner = () => {
    const { powerstats1, powerstats2, name1, name2 } = this.props;
    let total1 = Object.values(powerstats1);
    let total2 = Object.values(powerstats2);

    total1 = total1.map(total => {
      return Number(total);
    });
    total2 = total2.map(total => {
      return Number(total);
    });

    let sum1 = total1.reduce(function(acc, cv) {
      return acc + cv;
    }, 0);
    let sum2 = total2.reduce(function(acc, cv) {
      return acc + cv;
    }, 0);

    if (sum1 > sum2) {
      this.setState((prevState, props) => ({
        msg: `${name1} is the champion!`,
        winners: [...prevState.winners, name1],
        playerWins: [...prevState.playerWins, "player1"]
      }));
    } else {
      this.setState((prevState, props) => ({
        msg: `${name2} is the champion!`,
        winners: [...this.state.winners, name2],
        playerWins: [...prevState.playerWins, "player2"]
      }));
    }
  };
}
