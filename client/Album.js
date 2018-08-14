import React, {Component} from 'react'

export default function Album({ id, name, artist, artwork }){
  return (
    <div className='album'>
      <a onClick={()=>{selectAlbum(id)}}>
        <img src={ artwork } />
        <p>{name}</p>
        <small>{ artist }</small>
      </a>
    </div>
  )
}