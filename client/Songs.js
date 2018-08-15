import React from 'react'

export default function Songs({ song, artist }){
  return (
  <tr>
	<td><i className='fa fa-play-circle' /></td>
	<td>1</td>
	<td>{song.name}</td>
	<td>{artist.name}</td>
	<td>{song.genre}</td>
  </tr>
  )
}