const React = require('react');
const ReactDOM = require('react-dom');

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
      // React needs a unique index for each item
      // NOTE the key parameter on the li
      return (
        <li className="pet-item media" key={index}>
            <div className="pet-info media-body">
              <div className="pet-head">
                <span className="pet-name">{this.state.myAppointments[index].petname}</span>
                <span className="apt-date pull-right">{this.state.myAppointments[index].aptDate}</span>
              </div>
              <div className="owner-name">
                <span className="label-item">Owner: </span>
                {this.state.myAppointments[index].ownerName}
              </div>
              <div className="apt-notes">{this.state.myAppointments[index].aptNotes}</div>
            </div>
            </li>
        );
    }); // if using function(item, index), need to bind 'this' here
         // }.bind(this));

    return (
      <div className="interface" >
        <ul className="item-list media-list"> {filteredApts} </ul>
      </div>
    );
  }
}

ReactDOM.render( < MainInterface / > ,
  document.getElementById('app')
);