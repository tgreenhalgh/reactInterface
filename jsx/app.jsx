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
      return (
        <AptList key = { index }
          singleItem = { item } />
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

class AptList extends React.Component {
  // using props ... sent singleItem from filteredApts.map
  render() {
    return (
      <li className="pet-item media">
          <div className="pet-info media-body">
            <div className="pet-head">
              <span className="pet-name">{this.props.singleItem.petname}</span>
              <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
            </div>
            <div className="owner-name">
              <span className="label-item">Owner: </span>
              {this.props.singleItem.ownerName}
            </div>
            <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
          </div>
        </li>
      );
  };
}

ReactDOM.render( < MainInterface / > ,
  document.getElementById('app')
);