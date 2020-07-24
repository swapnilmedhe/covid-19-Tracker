import React, { Component } from 'react';
import '../App.css';

 class Countries extends Component {
     

    render() {
         const{countries} =this.props;
        return (
         <tr className="con-row">
              <td >{countries.Country}</td>
              <td>{countries.TotalConfirmed}</td>
              <td>{countries.TotalDeaths}</td>
              <td>{countries.TotalRecovered}</td>
          
         </tr>
        )
    }
}
export default Countries;
