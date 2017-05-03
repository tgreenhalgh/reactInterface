var React = require('react');

class AptList extends React.Component {
  constructor(props) {
    super(props);
    // React auto creates a blank state in each component
    // this.state = { };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    // Goes to onDelete in the main component, passing the item
    // clicked on
    this.props.onDelete(this.props.whichItem);
  }

  // using props ... sent singleItem from filteredApts.map
  render() {
    return (
      <li className="pet-item media">
        <div className="media-left">
          <button className="pet-delete btn btn-xs btn-danger" onClick={ this.handleDelete }>
          <span className="glyphicon glyphicon-remove"></span></button>
        </div>
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{ this.props.singleItem.petName }</span>
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
