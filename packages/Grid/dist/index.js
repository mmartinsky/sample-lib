import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make",
        field: "make"
      }, {
        headerName: "Model",
        field: "model"
      }, {
        headerName: "Price",
        field: "price"
      }],
      rowData: [{
        make: "Toyota",
        model: "Celica",
        price: 35000
      }, {
        make: "Ford",
        model: "Mondeo",
        price: 32000
      }, {
        make: "Porsche",
        model: "Boxter",
        price: 72000
      }]
    };
  }

  render() {
    return React.createElement("div", {
      className: "ag-theme-balham",
      style: {
        height: '500px',
        width: '600px'
      }
    }, React.createElement(AgGridReact, {
      columnDefs: this.state.columnDefs,
      rowData: this.state.rowData
    }));
  }

}

export default Grid;