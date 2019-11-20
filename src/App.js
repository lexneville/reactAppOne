import React from 'react';
import './App.css';
import Card from './components/Card'
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    counter: 0,
    names: ["Rob", "Ned", "John"],
    showCard: true
  }

  changeNames = () => {
    console.log("Names changed");
    this.setState({
      names: ["Vivian", "Rick", "Neil"]
    });
  }

  buttonFunction = () => {
    console.log("Button was clicked");
    this.setState({
      counter: this.state.counter + 1
    });
  }

  hideCard = () => {
    this.setState({
      showCard: false
    })
  }

  render() {
    return (
      <div>
        <div>
          <NavBar
            link1="Home" link2="About" link3="Contact" pages={3} />
          <Card city="King's Landing" name={this.state.names[0]} avatar="madKing" visible={this.state.showCard} /> 
          {/* when passing values to a component we must add them as props to the comoponent*/}
          <Card city="Salford" name={this.state.names[1]} avatar="marley" visible={this.state.showCard} />
          <Card city="New York" name={this.state.names[2]} avatar="diamond" visible={this.state.showCard} />
        </div>
        <h1>My current counter is {this.state.counter}</h1>
        <div class="buttons">
          <div>
            <a onClick={this.buttonFunction} className="myButton" href="#">Click Me</a>
          </div>
          <div>
            <a onClick={this.changeNames} className="myButton" href="#">Change Names</a>
          </div>
          <div>
            <a onClick={this.hideCard} className="myButton" href="#">Hide Cards</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


