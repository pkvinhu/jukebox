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
    currentSong: null,
    currentAudio: {url:'', play: false}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
    // this.isPlaying = this.isPlaying.bind(this);
  }

  // isPlaying() {
  // 	console.log(this.state.currentSong);
  // 	return this.state.currentSong;
  // }

  async play(song, link){
  	const audio = await document.createElement('audio');
  	// let music = this.state.currentAudio;
  	audio.src = link;
  	// if(music.url === null && music.play === false){
	  audio.load();
	  audio.play();
	  this.setState({
		currentSong:song.id,
		currentAudio:{ url:link, play:true }
	  })
  	// else if(music.url && music.play===false) {
  	//   audio.load();
  	//   audio.play();
  	//   this.setState({ currentAudio: { url: link, play: true } })
  	// }
  	// else if(music.play===true) {
  	//   audio.pause();
  	// }
  	
	
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
      	{!this.state.currentSong ? <PlayerContainer /> : ''}
     </div>
    )
  }
}

