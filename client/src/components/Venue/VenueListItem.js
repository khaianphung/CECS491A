import React from 'react';
import CardNews from './CardNews';
import axios from 'axios';

export default class VenueListItem extends React.Component {
  componentDidMount() {
    this.getVenue();
  }

  async getVenue() {
    console.log("blah")
    try {
      const response = await axios.get('api/events/1');
      this.props.venue = response.data;
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    let venue = this.props.venue;

    return (
      <div className="venue-list-item card">
        <CardNews showNews={venue.price == 0} />
        <div className="view card-img">
          <img src={venue.pictureUrl} />
        </div>
        <div className="card-block">
          <div className="d-flex">
            <div className="description">
              <p className="card-text title">{venue.name}</p>
              <p className="card-text location">{venue.locationName}, {venue.city}, {venue.country}</p>
              <p className="card-text date">{venue.date}</p>
            </div>
            <div className="actions">
              <i className="far fa-share-square"></i>
              <i className="far fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
