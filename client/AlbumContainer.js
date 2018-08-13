import React, {Component} from 'react'
import Albums from './Albums'

export default function AlbumContainer({albums}) {
  	return (
  	  <div className='container'>
  	  <Albums albums={albums}/>
  	  </div>
  	)
}