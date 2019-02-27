// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom"

import EquipmentTableHeader from './components/Equipment/EquipmentTableHeader';
import EquipmentTableBody from './components/Equipment/EquipmentTableBody';
import EquipmentTable from './components/Equipment/EquipmentTable';
import EquipmentItem from './components/Equipment/EquipmentItem';
import EquipmentItemType from './components/Equipment/EquipmentItemType';
import EquipmentForm from './components/Equipment/EquipmentForm';
import CheckInForm from './components/Equipment/CheckInForm';
import CheckOutForm from './components/Equipment/CheckOutForm';
import EquipmentTransferForm from './components/Equipment/EquipmentTransferForm';

class Gems extends React.Component {
  render () {
    return (
      <div>
        <Menu
        />
      </div>
      
    );
  }
}

const Home = () => {
  return (
    <div>Home</div>
  );
}

const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}

class Menu extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} exact />
          <Route path='/venue' component={VenueList} exact />
          <Route path="/user/:username" component={User}/>
          <Route path='/equipment' component={EquipmentTable} exact />
          <Route path='/equipment/:id' component={EquipmentItem} exact />
          <Route path='/equipment/:name' component={EquipmentItemType} exact />
          <Route path='/equipment/:id/edit' component={EquipmentForm} exact />
          <Route path='/equipment/new' component={EquipmentForm} exact />
          <Route path='/equipment/check_in' component={CheckInForm} exact />
          <Route path='/equipment/check_out' component={CheckOutForm} exact />
          <Route path='/equipment/transfer' component={EquipmentTransferForm} exact />          
        </div>
      </BrowserRouter>
    );
  }  
}

class VenueList extends React.Component {
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
    // return (
    //   <div className="venue card">
    //     <div className="card-img">
    //       <img src={'images/' + this.props.venue.picture_url} />
    //     </div>
    //     <div className="card-img-overlay d-flex flex-column justify-content-end">
    //       <div className="d-flex">
    //         <div className="description flex-grow-1">
    //           <p className="card-text title">{this.props.venue.name}</p>
    //           <p className="card-text location">{this.props.venue.location.name}, {this.props.venue.location.city}, {this.props.venue.location.country}</p>
    //           <p className="card-text date">{this.props.venue.date}</p>
    //         </div>
    //         <div className="actions">
    //           <i className="far fa-share-square"></i>
    //           <i className="far fa-heart"></i>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )

class Venue extends React.Component {
  render () {
    return (
      <div className="venue card">
        <div className="card-img">
          <img src={'images/' + this.props.venue.picture_url} />
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-end">
          <div className="d-flex">
            <div className="description flex-grow-1">
              <p className="card-text title">{this.props.venue.name}</p>
              <p className="card-text location">{this.props.venue.location.name}, {this.props.venue.location.city}, {this.props.venue.location.country}</p>
              <p className="card-text date">{this.props.venue.date}</p>
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
    price: 50,
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
    price: 50,
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
    price: 50,
    description: 'This is a description',
  }
];
          
          
//   render () {
//     return (
//       <BrowserRouter>
//         <div>
//           <Route path='/' component={Home} exact />
//           <Route path="/user/:username" component={User}/>
//           <Route path='/equipment/:id' component={EquipmentItem} exact />
//           <Route path='/equipment' component={EquipmentTable} exact />
//           <Route path='/equipment/new' component={EquipmentForm} exact />
//           <Route path='/equipment/check_in' component={CheckInForm} exact />
//           <Route path='/equipment/check_out' component={CheckOutForm} exact />
//           <Route path='/equipment/transfer' component={EquipmentTransferForm} exact />
//         </div>
//       </BrowserRouter>
//     );
//   }  
// }

ReactDOM.render(<Gems />, document.getElementById("root"));

