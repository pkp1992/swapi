export default class SwapiRequest {
  state = { allPeople: null };

  _baseUrl = "https://swapi.co/api/";
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
    return res.results;
  };

  getPeople = async id => {
    return await this.getResponse(`people/${id}`);
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
    return res.results;
  };

  getStarships = async id => {
    return await this.getResponse(`starships/${id}`);
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
}
