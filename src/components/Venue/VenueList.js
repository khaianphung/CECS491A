import React from 'react';
import Venue from './Venue';

export default class VenueList extends React.Component {
  renderVenueList() {
    return (
      VenueItemList.map(
        ( _venue, _index ) => (
          <Venue key={ _index }
          venue={ _venue} 
          />
      ) )
    )
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

var VenueItemList = [
  {
    id: 1,
    name: 'Venue 1',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Vancouver',
      country: 'Canada',
    },
    time: '5:00pm',
    date: '02/14/19',
    picture_url: 'pexels-photo-92646.jpg',
    price: 0,
    description: 'This is a description',
  },
  {
    id: 2,
    name: 'Venue 2',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Sydney',
      country: 'Austrailia',
    },
    time: '5:00pm',
    date: '02/14/19',
    picture_url: 'people-show-chairs-gym.jpg',
    price: 50,
    description: 'This is a description',
  },
  {
    id: 3,
    name: 'Venue 3',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Taipei',
      country: 'Taiwan',
    },
    time: '5:00pm',
    date: '02/14/2019',
    picture_url: 'pexels-photo-159524.jpg',
    price: 50,
    description: 'This is a description',
  },
  {
    id: 4,
    name: 'Venue 4',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Ashville',
      country: 'North Carolina',
    },
    time: '5:00pm',
    date: '02/14/2019',
    picture_url: 'pexels-photo-270085.jpg',
    price: 0,
    description: 'This is a description',
  },
  {
    id: 5,
    name: 'Venue 5',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Miami',
      country: 'Florida',
    },
    time: '5:00pm',
    date: '02/14/2019',
    picture_url: 'pexels-photo-722562.jpg',
    price: 50,
    description: 'This is a description',
  },
  {
    id: 6,
    name: 'Venue 6',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Austin',
      country: 'Texas',
    },
    time: '5:00pm',
    date: '02/14/2019',
    picture_url: 'pexels-photo-1035665.jpg',
    price: 50,
    description: 'This is a description',
  },
  {
    id: 7,
    name: 'Venue 7',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Portland',
      country: 'Oregon',
    },
    time: '5:00pm',
    date: '02/14/2019',
    picture_url: 'pexels-photo-1578317.jpg',
    price: 50,
    description: 'This is a description',
  },
  {
    id: 8,
    name: 'Venue 8',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'New York',
      country: 'California',
    },
    time: '5:00pm',
    date: '02/14/2019',
    picture_url: 'pexels-photo-1683292.jpg',
    price: 50,
    description: 'This is a description',
  },
  {
    id: 9,
    name: 'Venue 9',
    location: {
      address: '',
      name: 'Globe Theatre',
      city: 'Los Angeles',
      country: 'United States',
    },
    time: '5:00pm',
    date: '02/14/2019',
    picture_url: 'pexels-photo-1713080.jpg',
    price: 0,
    description: 'This is a description',
  }
];