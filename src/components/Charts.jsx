import Chart from 'react-apexcharts'

import React, { Component } from 'react'

export default class Charts extends Component {
  state = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: ['Intelligence', 'Strength', "Speed", 'Durability', 'Power', 'Combat']
      }
    },
    series: [{
      name: 'series-1',
      data: [0, 0, 0, 0, 0, 0]
    }]
  }

  componentDidUpdate(prevProps, prevState) {
    const arr1 = Object.values(prevProps.powerstats);
    const arr2 = Object.values(this.props.powerstats);

    let result;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result = true // props hasn't changed
      } else {
        result = false // props has changed
      }
    }

    if (result === false) {
      this.setState(currentState => {
        return { options: { ...currentState.options }, series: [{ name: 'series-1', data: arr2 }] }
      })
    }
  }

  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
    )
  }
}

