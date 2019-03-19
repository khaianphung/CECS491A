import React from 'react';
import CardNews from './CardNews';
import axios from 'axios';

export default class VenueItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {}
    };
  }  

  componentDidMount() {
    this.getVenue();
  }

  async getVenue() {
    try {
      const id = this.props.match.params.id 
      const response = await axios.get('/api/events/' + id);
      this.setState({venue: await response.data});
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    let venue = this.state.venue;

    return (
      <div className="venue card">
        <CardNews showNews={venue.price == 0} />
        <div className="view card-img">
          <img src={'/images/' + venue.pictureUrl} />
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
