const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');

const AptList = require('./AptList.jsx');
const AddAppointment = require('./AddAppointment.jsx');

class MainInterface extends React.Component {
  constructor(props) {
    super(props);
    // if anything changes with 'state' React will
    // 'react' to the changes and re-render that part
    this.state = {
      myAppointments: [ ],
      aptBodyVisible: false,
      url: "http://localhost:3000/jsx/data.json"
    };

    this.deleteMessage = this.deleteMessage.bind(this);
    this.toggleAddForm = this.toggleAddForm.bind(this);
    this.addItem = this.addItem.bind(this);
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

  deleteMessage(item) {
    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    // when state is changed, React automatically re-renders
    this.setState( { myAppointments: newApts });
  }

  toggleAddForm() {
    var toggle = !(this.state.aptBodyVisible);
    this.setState( { aptBodyVisible: toggle });
  }

  addItem(tempItem) {
    var tempApts = this.state.myAppointments;
    tempApts.push(tempItem);
    this.setState({ myAppointments: tempApts });
  }

  render() {
    // this is what we do when a state change happens
    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map( (item, index) => {
      // sending props
      return (
        <AptList
          key = { index }
          singleItem = { item }
          whichItem = { item }
          onDelete = { this.deleteMessage }
        />
      );
    });

    return (
      <div className="interface" >
        <AddAppointment
          bodyVisible = { this.state.aptBodyVisible }
          handleToggle = { this.toggleAddForm }
          addApt = { this.addItem }
        />
        <ul className="item-list media-list"> { filteredApts } </ul>
      </div>
    );
  }
}

ReactDOM.render( < MainInterface / > ,
  document.getElementById('app')
);
