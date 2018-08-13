import React, {Component} from 'react'
import Sidebar from './Sidebar'
import AlbumContainer from './AlbumContainer'
import PlayerContainer from './PlayerContainer'

export default class Main extends Component {
  constructor() {
  	super();
  	this.state = {
    albums: [
      {
	    "id": 1,
	    "name": "No Dummy",
	    "artworkUrl": "default-album.jpg",
	    "artistId": 1,
	    "artist": {
	      "id": 1,
	      "name": "The Crash Test Dummies"
	    }
	  },
	  {
	    "id": 2,
	    "name": "I React to State",
	    "artworkUrl": "default-album.jpg",
	    "artistId": 1,
	    "artist": {
	      "id": 1,
	      "name": "The Crash Test Dummies"
	    }
	  }
    ]
    }
  }
  render () {
    return (
     <div id='main' className='row container'>

      	<Sidebar />
      	<AlbumContainer albums={this.state.albums}/>
      	<PlayerContainer />
     </div>
    )
  }
}

