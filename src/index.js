import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom"

// import EquipmentTableHeader from './components/Equipment/EquipmentTableHeader';
// import EquipmentTableBody from './components/Equipment/EquipmentTableBody';
import EquipmentTable from './components/Equipment/EquipmentTable';
import Equipment from './components/Equipment/Equipment';
import EquipmentForm from './components/Equipment/EquipmentForm';
import CheckInForm from './components/Equipment/CheckInForm';
import CheckOutForm from './components/Equipment/CheckOutForm';

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
          <Route path="/equipment" component={EquipmentTable} exact />
          <Route path="/equipment/new" component={EquipmentForm} exact />
          <Route path="/equipment/check_in" component={CheckInForm} exact />
          <Route path="/equipment/check_out" component={CheckOutForm} exact />
        </div>
      </BrowserRouter>
    );
  }  
}

// class CheckOutForm extends React.Component {
//   constructor(props) {
//     this.state = {
//       productCode: '',
//     };
//   }
//   render () {
//     return (

//     )
//   }  
// }


// class CheckInForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productCode: '',
//     };
//   }  
//   render () {
//     let codeDescription = this.state.digitsLeft === this.state.maxLength ? this.state.digitsLeft+"-digits" : this.state.digitsLeft+"-digits left"

//     return (
//       <div className="check-in-form">
//         <div className="form-group">
//           <ProductCodeForm productCode={this.productCode}/>
//         </div>
//       </div>
//     )
//   }
// }

ReactDOM.render(<Gems />, document.getElementById("root"));

