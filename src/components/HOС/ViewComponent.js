import React, { Component } from 'react'
import Spinner from "../Spinner";
import ErrorIndicater from "../ErrorIndicater";
import ErrorBoundry from '../ErrorBoundry'

const ViewComponent = (View) => {
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
      this.props.getData()
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
        <ErrorBoundry>
          {error}
          {load}
          {content}
        </ErrorBoundry>
      );
    }
  };
};

export default ViewComponent;