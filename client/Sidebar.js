import React, {Component} from 'react'

export default class Sidebar extends Component {
  render() {
  	return (
  	   <div id='sidebar'>
          <img src='juke.svg' id='logo' />
          <section>
            <h4>
              <a>ALBUMS</a>
            </h4>
          </section>
       </div>
  	)
  }
}