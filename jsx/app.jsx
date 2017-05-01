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
    var filteredApts = this.state.data;
    filteredApts = filteredApts.map( (item, index) => {
      // React needs a unique index for each item
      // NOTE the key parameter on the li
      return (
        <li className="pet-item media" key={index}>
            <div className="pet-info media-body">
              <div className="pet-head">
                <span className="pet-name">{this.state.data[index].petname}</span>
                <span className="apt-date pull-right">{this.state.data[index].aptDate}</span>
              </div>
              <div className="owner-name">
                <span className="label-item">Owner: </span>
                {this.state.data[index].ownerName}
              </div>
              <div className="apt-notes">{this.state.data[index].aptNotes}</div>
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