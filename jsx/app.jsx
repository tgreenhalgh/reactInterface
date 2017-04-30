const React = require('react');
const ReactDOM = require('react-dom');

class MainInterface extends React.Component {
    constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <h1>Pet Appointments</h1>
      );
  }
}

ReactDOM.render(
  <MainInterface/>,
  document.getElementById('app')
);
