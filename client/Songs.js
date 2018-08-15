import React from 'react'

export default function Songs({ id, song, artist, play, currentSong }){
  let isCurrent = id === currentSong;
  return (
  <tr className={!isCurrent ? '' : 'active'}>
	<td><i className={!isCurrent ? 'fa fa-play-circle' : 'fa' } onClick={()=>{play(song, song.audioUrl)}} /></td>
	<td>1</td>
	<td>{song.name}</td>
	<td>{artist.name}</td>
	<td>{song.genre}</td>
  </tr>
  )
}