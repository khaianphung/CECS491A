import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom"

import EquipmentTableHeader from './components/Equipment/EquipmentTableHeader';
import EquipmentTableBody from './components/Equipment/EquipmentTableBody';
import EquipmentTable from './components/Equipment/EquipmentTable';
import Equipment from './components/Equipment/Equipment';
import EquipmentForm from './components/Equipment/EquipmentForm';

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

class Menu extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/equipment" component={EquipmentTable} />
          <Route path="/equipment/new" component={EquipmentForm} />
          <Route path="/equipment/:number/edit" component={EquipmentForm} />
          <Route path="/equipment/:number" component={Equipment} />
        </div>
      </BrowserRouter>
    );
  }  
}

ReactDOM.render(<Gems />, document.getElementById("root"));

