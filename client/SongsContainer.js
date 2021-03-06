import React from 'react'
import Songs from './Songs'

export default function SongsContainer({ id, selectedAlbum, play, currentSong }){
  
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
		return (<Songs 
		key={song.id} 
		id={song.id}
		artist={selectedAlbum.artist}
		song={song}
		play={play}
		currentSong={currentSong} 
		selectedAlbum={selectedAlbum}
		/>)
        })}
      </tbody>
    </table>
  )

}