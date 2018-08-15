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
    selectedAlbum: {},
    currentSong: null
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
  }

  play(song, link){
  	const audio = document.createElement('audio');
	audio.src = link;
	audio.load();
	audio.play();
	this.setState({currentSong:song.id})
  }

  reset(){
  	this.setState({ selectedAlbum:{} });
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

  render() {
  	let currentPage = !this.state.selectedAlbum.id ?
  	<AlbumContainer 
  	selectAlbum = {this.selectAlbum}
  	albums={this.state.albums}/> :
  	<SingleAlbum selectedAlbum={this.state.selectedAlbum} 
  	play={this.play}
  	currentSong={this.state.currentSong} />

    return (
     <div id='main' className='row container'>
      	<Sidebar reset={this.reset}/>
      	{currentPage}
      	<PlayerContainer />
     </div>
    )
  }
}

