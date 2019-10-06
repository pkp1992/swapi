import React, {Component} from 'react';
import './App.css';
// import SwapiRequest from '../../services'
import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ItemList from '../ItemList'
import PlanetDetails from '../PlanetDetails'



export default class App extends Component {
 
  render() {
    return(
      <div className="container">
        <Header/>
        <RandomPlanet />
        <div className="main">
        <ItemList />
        <PlanetDetails />
        </div>
      </div>
    )
  }
}



