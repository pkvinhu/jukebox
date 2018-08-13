import React, {Component} from 'react'
import Sidebar from './Sidebar'
import AlbumContainer from './AlbumContainer'
import PlayerContainer from './PlayerContainer'
import axios from 'axios'

export default class Main extends Component {
  constructor() {
  	super();
  	this.state = {
    albums: []
    }
  }

  hi (){

  }

  componentDidMount(){
  	axios.get('/api/albums')
  	.then(response=> {
  	  console.log(response)
  	  this.setState({albums: response.data})
  	});
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

