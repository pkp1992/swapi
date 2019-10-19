import React, { Component } from 'react'
import ErrorIndicater from '../ErrorIndicater'
export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorIndicater />;
    }
    return this.props.children;
  }
}
