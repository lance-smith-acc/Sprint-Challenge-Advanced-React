import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './PlayerCard';
import DarkButton from './DarkButton';

class App extends Component {
  
  state = {
    players: []    
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          players:res.data
          });
      })
  }

  render(){
    return (
      <div className="App">
          <DarkButton />
            {this.state.players.map(e => (
            <PlayerCard name={e.name} country={e.country} searches={e.searches} id={e.id} key={e.id} /> 
          ))}
          
      </div>
    );
  }
}

export default App;
