import React, { Component } from "react";
import "./PersonDetails.css";
import SwapiRequest from "../../services";
import Spinner from '../Spinner/'

export default class PersonDetails extends Component {
  swapi = new SwapiRequest();
  state = {
    person: null,
    loading: true,
    errorIndicator: false,
  };

  componentDidMount() {
    this.updatePerson();
  }
  

  updatePerson = () => {
    const {personId} = this.props
    if (!personId) {
      return;
    }
    this.swapi.getPeople(personId).then(person => this.setState({ person }));
  }
  

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
     if(!this.state.person) {
       return <span>Select a peroson from a list</span>
     }
     const {id, name, gender, birthYear, eyeColor} = this.state.person
      console.log(this.props);
      
    return (
      <div className="single">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
        />
        <div className="single_discription">
          <h2>{name}</h2>
          <ul>
            <li>
              <span>Gender: </span>
              <span>{gender}</span>
            </li>
            <li>
              <span>Birt hYear:</span>
              <span>{birthYear}</span>
            </li>
            <li>
              <span>Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
