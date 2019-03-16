import React from 'react';
import CardNews from './CardNews';

export default class VenueItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Venue 1',
      address: '',
      locationName: 'Globe Theatre',
      city: 'Vancouver',
      country: 'Canada',
      time: '05:00',
      date: '2011-08-19',
      pictureUrl: 'people-show-chairs-gym.jpg',
      price: 0,
      description: 'This is a description'
    };
  }  
  render () {
    return (
      <div className="venue card">
        <CardNews showNews={this.state.price == 0} />
        <div className="view card-img">
          <img src={'images/' + this.state.pictureUrl} />
        </div>
        <div className="card-block">
          <div className="d-flex">
            <div className="description">
              <p className="card-text title">{this.state.name}</p>
              <p className="card-text location">{this.state.locationName}, {this.state.city}, {this.state.country}</p>
              <p className="card-text date">{this.state.date}</p>
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