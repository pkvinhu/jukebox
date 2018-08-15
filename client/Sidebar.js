import React, {Component} from 'react'

export default function Sidebar({ reset }) {
  	return (
  	   <div id='sidebar'>
          <img src='juke.svg' id='logo' />
          <section>
            <h4 >
              <a onClick={()=>reset()}>ALBUMS</a>
            </h4>
          </section>
       </div>
  	)
}