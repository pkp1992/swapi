import React, { Component} from "react";
import "./ItemDetails.css";
import SwapiRequest from "../../services";
import Spinner from "../Spinner";
import ErrorIndicater from "../ErrorIndicater";

const Record = ({ item, field, lable }) => {
  return (
    <li>
      <span>{lable}: </span>
      <span> {item[field]}</span>
    </li>
  );
};
export { Record };

export default class ItemDetails extends Component {
  swapi = new SwapiRequest();
  state = {
    item: null,
    loading: false,
    errorIndicator: false,
    image: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.updateItem();
  }
  onError = err => {
    this.setState({ errorIndicator: true, loading: false });
  };

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    this.setState({ loading: true });
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then(item =>
        this.setState({
          item,
          loading: false,
          errorIndicator: false,
          image: getImageUrl(item)
        })
      )
      .catch(this.onError);
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  render() {
    const { loading, errorIndicator, image, item } = this.state;
    if (!item) {
      return (
        <div className="main">
          <div className="single">
            {errorIndicator ? (
              <ErrorIndicater className="errorImg" />
            ) : (
              // <span>Select a peroson from a list</span>
              <Spinner />
            )}
          </div>
        </div>
      );
    }
    const hasData = !(loading || errorIndicator);
    const hasError = !loading && errorIndicator;
    const loader = loading ? <Spinner /> : null;
    const { name } = item;
    const data = hasData ? (
      <div className="single">
        <img src={image} alt={name} />
        <div className="single_discription">
          <h2>{name}</h2>
          <ul>
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    ) : null;
    const error = hasError ? <ErrorIndicater /> : null;

    return (
      <div className="main">
        {loader}
        {data}
        {error}
      </div>
    );
  }
}
