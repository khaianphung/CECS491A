import React from 'react';
import VenueListItem from './VenueListItem';
import axios from 'axios';

export default class VenueList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
    };
  }

  componentDidMount() {
    this.getVenues();
  }  

  renderVenueList() {
    return (
      this.state.venues.map(
        ( _venue, _index ) => (
          <VenueListItem key={ _index }
          venue={ _venue} 
          />
      ) )
    )
  }

  async getVenues() {
    try {
      const response = await axios.get('api/events');
      this.setState({venues: await response.data});
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    return (
      <div className="venue-list">
        <div className="card-columns">
          {this.renderVenueList()}
        </div>
      </div>
    );
  }
}
