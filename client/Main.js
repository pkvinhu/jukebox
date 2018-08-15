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
    selectedAlbum: {}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.reset = this.reset.bind(this);
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
  	<SingleAlbum selectedAlbum={this.state.selectedAlbum} />

    return (
     <div id='main' className='row container'>
      	<Sidebar reset={this.reset}/>
      	{currentPage}
      	<PlayerContainer />
     </div>
    )
  }
}

