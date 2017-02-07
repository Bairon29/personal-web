import React, { Component } from 'react';
import Porfolio from './Porfolio';
import './HomeComponent.css'
class HomeComponent extends Component{


  render(){
    return(
      <div className="landpage-container">
        <div className="title-container">
          <h1 className="title">Full-Stack Web Developer</h1>
        </div>
        <div className="img-container">
          <img className="image" src="/favicon.ico" />
        </div>
        <div className="me-container">
          <h2 className="hello">Hello!</h2>
          <p className="me">
            I'm Bairon J. Vasquez, a Freelance Full-Stack Web Developer
            <br />and a 3D Molleder using Blender, currently living in New
            York.<br />I am pursuing a Computer Science degree at Hunter College.<br />
            My backgroung in Computer Science have make me a better programmer
            as well as to write more efficient and clen code.
            <br />Take a look around at the work I have done. Thank you.
          </p>
        </div>
        <div className="Portfolio-container">
          <h2 className="Portfolio" onClick={() =>{this.props.updateState(Porfolio)}}>Take a Look</h2>
        </div>
      </div>
      )
  }
}

export default HomeComponent;
