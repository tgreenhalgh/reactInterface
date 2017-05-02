var React = require('react');

class AptList extends React.Component {
  // using props ... sent singleItem from filteredApts.map
  render() {
    return (
      <li className="pet-item media">
          <div className="pet-info media-body">
            <div className="pet-head">
              <span className="pet-name">{ this.props.singleItem.petname }</span>
              <span className="apt-date pull-right">{ this.props.singleItem.aptDate }</span>
            </div>
            <div className="owner-name">
              <span className="label-item">Owner: </span>
              { this.props.singleItem.ownerName }
            </div>
            <div className="apt-notes">{ this.props.singleItem.aptNotes }</div>
          </div>
        </li>
      );
  };
}

module.exports = AptList;
