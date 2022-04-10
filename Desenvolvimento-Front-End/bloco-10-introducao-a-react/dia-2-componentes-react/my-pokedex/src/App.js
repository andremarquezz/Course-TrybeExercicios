import Pokemon from './Components/Pokemon';
import './App.css';
import data from './data';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        {data.map((pokemon) => {
          return <Pokemon pokemon={pokemon} key={pokemon.id} />;
        })}
      </>
    );
  }
}

export default App;
