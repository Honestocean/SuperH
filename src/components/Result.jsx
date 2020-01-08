import React, { Component } from "react";

export default class Result extends Component {
  state = {
    msg: "Let's get ready to ruuuuuuuumble!!!",
    winners: [],
    playerWins: []
  };

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
    console.log(this.props)
    const { powerstats1, powerstats2, name1, name2, chosenStat } = this.props;

    let sum1 = powerstats1[chosenStat];
    let sum2 = powerstats2[chosenStat];

    console.log(sum1, 'sum1')
    console.log(sum2, 'sum2')

    if (Number(sum1) > Number(sum2)) {
      this.setState((prevState, props) => ({
        msg: `${name1} is the champion!`,
        winners: [...prevState.winners, name1],
        playerWins: [...prevState.playerWins, "player1"]
      }));
    } else if (sum1 === sum2) {
      this.setState((prevState, props) => ({
        msg: "It's a draw!",
        winners: [...prevState.winners],
        playerwins: [...prevState.playerWins]
      }))
    } else {
      this.setState((prevState, props) => ({
        msg: `${name2} is the champion!`,
        winners: [...this.state.winners, name2],
        playerWins: [...prevState.playerWins, "player2"]
      }));
    }
  };
}
