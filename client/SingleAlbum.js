import React from 'react'
import SongsContainer from './SongsContainer'

export default function SingleAlbum({selectedAlbum, play, currentSong }){
  return (
  	<div className='container'>
  	<div id='single-album' className='column'>
	  <div className='album'>
	    <a>
	      <img src={selectedAlbum.artworkUrl} />
	      <p>{selectedAlbum.name}</p>
	      <small>{selectedAlbum.artist.name}</small>
        </a>
      </div>
      <SongsContainer key={selectedAlbum.id} 
      selectedAlbum={selectedAlbum} 
      play={play}
      currentSong={currentSong}/>
    </div>
    </div>
  )
}