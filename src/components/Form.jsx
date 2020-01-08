import React from 'react'

export default function Form(props) {
  const { turn } = props
  const { statChooser } = props
  if (turn) {
    return (
      <div>
        <form onChange={(event) => { statChooser(event) }}>
          <select name="powerStats" id="power">
            <option value="intelligence">Intelligence</option>
            <option value="strength">Strength</option>
            <option value="speed">Speed</option>
            <option value="durability">Durability</option>
            <option value="power">Power</option>
            <option value="combat">Combat</option>
          </select>
        </form>
      </div>
    )
  } else {
    return (<div></div>)
  }
}