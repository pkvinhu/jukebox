import React, {Component} from 'react'
import PlayerControls from './PlayerControls'

export default function PlayerContainer({ play }) {

  	return (
  	  <div id='player-container'>
        <PlayerControls />
      </div>
  	)

}