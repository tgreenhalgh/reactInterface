const React = require('react');
const ReactDOM = require('react-dom');
var AptList = require('./AptList.jsx');

class MainInterface extends React.Component {
  constructor(props) {
    super(props);
    // if anything changes with 'state' React will
    // 'react' to the changes and re-render that part
    this.state = {
      myAppointments: [],
      url: "http://localhost:3000/jsx/data.json"
    };
  }

  loadDataFromServer() {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      success: (data) => {
        this.setState({ myAppointments: data });
      },
      error: (xhr, status, err) => {
        console.error(this.state.url, status, err.toString());
      }
    });
  }

    // componentDidMount : invoked after the component exists and before rendering
    // good place for loading data, ajax, etc (be careful of 'this')
    componentDidMount() {
      this.loadDataFromServer();
    }

    // componentWillUnmount : used to cancel outstanding requests, etc
    componentWillUnmount() {
      this.serverRequest.abort();
    }

  render() {
    // this is what we do when a state change happens
    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map( (item, index) => {
      // sending props
      return (
        <AptList key = { index }
          singleItem = { item } />
        );
    });

    return (
      <div className="interface" >
        <ul className="item-list media-list"> { filteredApts } </ul>
      </div>
    );
  }
}

ReactDOM.render( < MainInterface / > ,
  document.getElementById('app')
);