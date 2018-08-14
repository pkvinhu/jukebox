import React, {Component} from 'react'
import Sidebar from './Sidebar'
import AlbumContainer from './AlbumContainer'
import PlayerContainer from './PlayerContainer'
import axios from 'axios'
import SingleAlbum from './SingleAlbum'

export default class Main extends Component {
  constructor() {
  	super();
  	this.state = {
    albums: [],
    selectedAlbum: {
	  "id": 3,
	  "name": "Chain React-ion",
	  "artworkUrl": "default-album.jpg",
	  "artistId": 1,
	  "artist": {
	    "id": 1,
	    "name": "The Crash Test Dummies",
	  },
	  "songs": [
	    {
	      "id": 13,
	      "name": "Set Some State",
	      "audioUrl": "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3",
	      "genre": "Instrumental",
	      "albumId": 2,
	      "artistId": 1
	    }
	  ]
    }
    };
    this.selectAlbum = this.selectAlbum.bind(this);
  }

  selectAlbum(id){
  	axios.get(`api/albums/${id}`)
  	.then((response)=>{
  	  this.setState({ selectedAlbum: response.data }); 
  	})
  }


  componentDidMount(){
  	axios.get('/api/albums')
  	.then(response=> {
  	  this.setState({albums: response.data})
  	});
  }

  render () {
  	let currentPage = this.state.selectedAlbum ?
  	<SingleAlbum selectedAlbum={this.state.selectedAlbum} />
  	: <AlbumContainer albums={this.state.albums}/>
    return (
     <div id='main' className='row container'>
      	<Sidebar />
      	{currentPage}
      	<PlayerContainer />
     </div>
    )
  }
}

