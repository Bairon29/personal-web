import React, { Component, StyleSheet} from 'react';
// import ReactDOM from 'react-dom';
import HomeComponent from './HomeComponent';
import './NavigatorComponent.css';
import Porfolio from './Porfolio';
class NavigatorComponent extends Component {
  constructor(){
    super();
    this.state = {
      component: HomeComponent,
      isMenuOpen: false
    }
    // this.getHomeComponent = this.getHomeComponent.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

 // getHomeComponent(Component){
 //    console.log("hi")
 //      ReactDOM.render(
 //    <Component  />,
 //    document.getElementById('cpm')
 //  );
 //    this.updateState(Component)
 //  };

  updateState(component){
    this.setState({
      component: component,
      isMenuOpen: false
    })
  }

  handleMenu(){
    if(this.state.isMenuOpen === false){
      this.setState({
        isMenuOpen: true
      })
    }
    else{
      this.setState({
        isMenuOpen: false
      })
    }
  }



render(){
  return(
    <div className="manu-container">
    {<this.state.component updateState={this.updateState}/>}
      <img src="/images/menu-icon-15.png" className={this.state.isMenuOpen === false ?"menu-button" :"menu-button-active"} onClick={() => this.handleMenu()} />

        <div className={this.state.isMenuOpen === false ? "App" : "Menu"}>
      <div className="ap"></div>
        <header className="App-header">
          <span onClick={() =>{this.updateState(Porfolio)}}>My Porfolio</span>
          <span>Contact Me</span>
          <span>About</span>
        </header>

        <nav className="links">
          <h4>Visit</h4><a href="https://github.com/Bairon29">My GitHub Repo</a><br/>
          <h4>Visit</h4><a href="https://www.linkedin.com/in/bairon-jvasquez">My LinkedIn</a><br/>
        </nav>
        </div>
        </div>
    )
}

}


export default NavigatorComponent;
