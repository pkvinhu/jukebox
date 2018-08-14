import React, Component from 'react'
import Songs from './Songs'

export default function SongsContainer({ key, selectedAlbum }){
  
  return (
    <table id='songs'>
      <tbody>
        <tr className='gray'>
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        {selectedAlbum.songs.map((song)=> {
		return (<Song 
		key={song.id} 
		artist={selectedAlbum.artist}
		song={song} 
		/>)
        })}
      </tbody>
    </table>
  )

}