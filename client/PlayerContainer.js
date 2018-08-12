import React, {Component} from 'react'
import PlayerControls from './PlayerControls'

export default class PlayerContainer extends Component {
  render() {
  	return (
  	  <div id='player-container'>
        <PlayerControls />
      </div>
  	)
  }
}