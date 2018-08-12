import React, {Component} from 'react'
import Album from './Album'

export default function Albums({ albums }) {
  	return (
  	  <div id='albums' className='row wrap'>
        {albums.map((album) => {
        	return
        <Album 
          key={album.id}
          id={album.id}
          name={album.name}
          artwork={album.artWorkUrl}
          artist={album.artist.name}
        />
        })}
      </div>
  	)
}