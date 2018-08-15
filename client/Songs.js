import React from 'react'

export default function Songs({ song, artist, play }){
  return (
  <tr>
	<td><i className='fa fa-play-circle' onClick={()=>{play(song, song.audioUrl)}} /></td>
	<td>1</td>
	<td>{song.name}</td>
	<td>{artist.name}</td>
	<td>{song.genre}</td>
  </tr>
  )
}