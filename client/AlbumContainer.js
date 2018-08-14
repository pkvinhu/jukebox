import React, {Component} from 'react'
import Albums from './Albums'

const AlbumContainer = ({selectAlbum, albums})=> {
  	return (
  	  <div className='container'>
  	  <Albums selectAlbum ={selectAlbum} albums={albums}/>
  	  </div>
  	)
}

export default AlbumContainer