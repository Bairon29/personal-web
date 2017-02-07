import React, { Component } from 'react';
import './Porfolio.css'
class Porfolio extends Component{


  render(){
    return(
      <div className="Porfolio-component">
        <div className="project-container">
          <img className="project-image" src="/images/shooting-game.png" />
          <p className="description">A simple fun shooter game
          compose of multiple sprites and Dom manipulation
          using JavaScript and the Jquery libary. </p>
          <a className="check-it" href="https://bairon29.github.io/Project-1/">Take a Look</a>
        </div>
         <div className="project-container">
          <img className="project-image" src="/images/modelling-project.png" />
          <p className="description">This project show case the 3D modelling
          work I have done using the open source software Blender. The
          website is build entirely in Ruby on Rails. PostgSQL is used for the
          database which contains all the information about the 3D models.
          they can also be download for commercial use.</p>
          <a className="check-it" href="https://modellingproject.herokuapp.com">Take a Look</a>
        </div>
      </div>
      )
  }
}

export default Porfolio;
