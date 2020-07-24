import React, { Component } from 'react';
import axios from  'axios';
import '../App.css';

 class Summary extends Component {
     
    
    render() {
        const{global,date}=this.props
        return (
            <div className="container">
            <div className="row ">
               <div className="newConfirmed">
                   <h3>New Confirmed</h3>
                    {global.NewConfirmed} 
                <h4>{date}</h4> 
               </div>

               <div className="newDeaths">
               <h3>New Deaths</h3>
                    {global.NewDeaths} 
                    <h4>{date}</h4> 
               </div>

                 <div className="newRecovered">
                 <h3>New Recovered</h3>
                    {global.NewRecovered} 
                    <h4>{date}</h4> 
               </div>

               <div className="totalConfirmed">
               <h3>Total Confirmed</h3>
                    {global.TotalConfirmed}
                    <h4>{date}</h4> 
               </div>

               <div className="totalRecovered">
               <h3>Total Recovered</h3>
                    {global.TotalRecovered}
                    <h4>{date}</h4> 
               </div>
               
               <div className="totalDeaths">
               <h3>Total Deaths</h3>
                    {global.TotalDeaths}
                    <h4>{date}</h4> 
               </div>
               
            </div>
            </div>
        )
    }
}
export default Summary;
