export default class SwapiRequest {
  state = { allPeople: null };

  _baseUrl = "https://swapi.co/api/";
  _imageUrl = "https://starwars-visualguide.com/assets/img";
  getResponse = async url => {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`No internet connection, code: ${res.status}`);
    }
    const body = res.json();
    return body;
  };

  getAllPeople = async () => {
    let res = await this.getResponse("people");
    return res.results.map(this._transformPeople);
  };

  getPeople = async id => {
    let people = await this.getResponse(`people/${id}`);
    return this._transformPeople(people);
  };

  getAllPlanet = async () => {
    let res = await this.getResponse("planets");
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResponse(`planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    let res = await this.getResponse("starships");
    return res.results.map(this._transformStarhip);
  };

  getStarships = async id => {
    let starship = await this.getResponse(`starships/${id}`);
    return this._transformStarhip(starship);
  };

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = item.url.match(idRegExp)[1];
    return id;
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };
  _transformStarhip = starships => {
    return {
      id: this._extractId(starships),
      name: starships.name,
      model: starships.model,
      manufacturer: starships.manufacturer,
      costInCredits: starships.cost_in_credits,
      passengers: starships.passengers,
      cargoCapacity: starships.cargo_capacity
    };
  };
  _transformPeople = people => {
    return {
      id: this._extractId(people),
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color
    };
  };
  getPeopleImage = ({ id }) => {
    return `${this._imageUrl}/characters/${id}.jpg`;
  };
  getStarshipImage = ({ id }) => {
    return `${this._imageUrl}/starships/${id}.jpg`;
  };
  getPlanetImage = ({ id }) => {
    return `${this._imageUrl}/planets/${id}.jpg`;
  };
}
