import React, {Component} from 'react'
import Albums from './Albums'

const AlbumContainer = ({albums})=> {
  	return (
  	  <div className='container'>
  	  <Albums albums={albums}/>
  	  </div>
  	)
}

export default AlbumContainer