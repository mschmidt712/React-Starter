import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

/**
 * The App component for the project.
 */
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>{this.props.children}</div>);
  }
}

App.propTypes = {
  /**
   * The child elements of the app.
   */
  children: PropTypes.element,
};

export default App;
