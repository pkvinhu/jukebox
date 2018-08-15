import React, {Component} from 'react'

export default function Album({ id, name, artist, artwork, selectAlbum }){
  return (
    <div className='album' onClick={()=>{selectAlbum(id)}}>
      <a>
        <img src={ artwork } />
        <p>{name}</p>
        <small>{ artist }</small>
      </a>
    </div>
  )
}