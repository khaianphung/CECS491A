import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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
import VenueList from './components/Venue/VenueList';

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
<div class="form-group">
  <input type="text" id="inputMDEx" className="form-control" />
  <label htmlFor="inputMDEx">Medium input</label>
  <input type="text" id="blah" className="form-control" />
  <label htmlFor="blah">Medium input</label> 
</div>
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

