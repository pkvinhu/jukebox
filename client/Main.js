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
  	let currentPage = this.state.selectedAlbum ?
  	<SingleAlbum selectedAlbum={this.state.selectedAlbum} />
  	: <AlbumContainer 
  	selectAlbum = {this.selectAlbum}
  	albums={this.state.albums
  	}/>;
  	
    return (
     <div id='main' className='row container'>
      	<Sidebar />
      	{currentPage}
      	<PlayerContainer />
     </div>
    )
  }
}

