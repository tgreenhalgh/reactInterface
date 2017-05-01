const React = require('react');
const ReactDOM = require('react-dom');

class MainInterface extends React.Component {
  constructor(props) {
    super(props);
    // if anything changes with 'state' React will
    // 'react' to the changes and re-render that part
    this.state = {
      data: [{
        petName: "Buffy",
        ownerName: "Hassum Harrod",
        aptDate: "2016-06-20 15:30",
        aptNotes: "This Chihuahua has not eaten for three days and is lethargic"
      }, {
        petName: "Spot",
        ownerName: "Constance Smith",
        aptDate: "2016-06-24 08:30",
        aptNotes: "This German Shepherd is having some back pain"
      }, {
        petName: "Goldie",
        ownerName: "Barot Bellingham",
        aptDate: "2016-06-22 15:50",
        aptNotes: "This Goldfish has some weird spots in the belly"
      }, {
        petName: "Mitten",
        ownerName: "Hillary Goldwyn",
        aptDate: "2016-06-21 9:15",
        aptNotes: "Cat has excessive hairballs"
      }]
    };
  }

  render() {
    // this is what we do when a state change happens

    return (
      <div className="interface" >
        <ul className="item-list media-list">
          <li className="pet-item media">
            <div className="pet-info media-body">
              <div className="pet-head">
                <span className="pet-name">{this.state.data[0].petname}</span>
                <span className="apt-date pull-right">{this.state.data[0].aptDate}</span>
              </div>
              <div className="owner-name">
                <span className="label-item">Owner: </span>
                {this.state.data[0].ownerName}
              </div>
              <div className="apt-notes">{this.state.data[0].aptNotes}</div>
            </div>
            </li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render( < MainInterface / > ,
  document.getElementById('app')
);