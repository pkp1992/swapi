import React, { Component, Fragment } from 'react'
import Spinner from "../Spinner";
import ErrorIndicater from "../ErrorIndicater";

const ViewComponent = (View, getData) => {
  return class extends Component {
    state = {
      data: [],
      loading: true,
      id: null,
      errorIndicator: false
    };

    onError = () => {
      this.setState({ errorIndicator: true, loading: false });
    };

    componentDidMount() {
      getData()
        .then(data => this.onloadItem(data))
        .catch(this.onError);
    }
    onloadItem = data => {
      this.setState({ data, loading: false });
    };
    render() {
      const { loading, errorIndicator, data } = this.state;
      let hasData = !(loading || errorIndicator);
      let error = errorIndicator ? <ErrorIndicater /> : null;
      let load = loading ? <Spinner /> : null;
      let content = hasData ? <View {...this.props} data={data} /> : null;

      return (
        <Fragment>
          {error}
          {load}
          {content}
        </Fragment>
      );
    }
  };
};

export default ViewComponent;