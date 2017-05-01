const React = require('react');
const ReactDOM = require('react-dom');

class MainInterface extends React.Component {
    constructor(props) {
    super(props);
    // if anything changes with 'state' React will
    // 'react' to the changes and re-render that part
    this.state = {
      title:"Appointments",
      show: true
    };
  }

  render() {
    // this is what we do when a state change happens
    var showTitle;
    if (this.state.show) {
      showTitle = "New";
    }

    var displayList = {
      display: this.state.show ? 'block' : 'none',
      color: 'red'
    };

    return (
      <div className="interface">
        <h1>{ showTitle } { this.state.title }</h1>
        <ul style={displayList}>
          <li>kitty 3:30 PM</li>
          <li>puppy 4:00 PM</li>
          <li>fishy 4:30 PM</li>
        </ul>
    </div>
      );
  }
}

ReactDOM.render(
  <MainInterface/>,
  document.getElementById('app')
);
