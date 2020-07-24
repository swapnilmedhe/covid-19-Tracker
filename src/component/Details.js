import React, { Component } from 'react';
import axios from  'axios';
import Summary from './Summary';
import Countries from './Countries';
import '../App.css';

 class Details extends Component {
     
     constructor(){
         super();
         this.state={
          countries:[],
          date: '',
          global:[],
          loading:true
         }
     }

      
    async componentDidMount(){
        const result = await axios.get("https://api.covid19api.com/summary");
        console.log(result);
        this.setState({
        countries: result.data.Countries,
        global:result.data.Global,
        date: new Date(result.data.Date).toDateString(),
        loading: false
        });
    }
  
    render() {
       if(this.state.loading){
           return <div class="continer">
               <div className="loader"></div>
           </div>
       }
        return (
            <div>
                <Summary global={this.state.global} date={this.state.date} />
                 <hr/>
                 <table>
                     <thead>
                     <tr>
                         <th>Country</th>
                         <th>Total Confirmed</th>
                         <th>Total Deaths</th>
                         <th>Total Recovered</th>
                     </tr>
                     </thead>
                     <tbody>
                         {this.state.countries.map( ctr => <Countries countries={ctr } date ={this.state.date}/> )}
                         {/* <Countries countries={this.state.countries } date ={this.state.date}/> */}
                     </tbody>
                 </table>
            </div>
        )
    }
}
export default Details;
