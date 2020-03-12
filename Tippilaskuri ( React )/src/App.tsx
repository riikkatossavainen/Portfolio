import React from 'react';
import './App.css';

interface State {
                   nayta? : boolean,
                   summa? : any,
                   tip? : any;

                }


export default class App extends React.Component { 

  state : State = {
                  nayta : false,
                  summa : 0,
                  tip: 0

                }

  paivita = (event : any) : void => {
    
    this.setState({
                  [event.target.name] : event.target.value,
                  nayta : false,
                  tip: 0

     });


  }

  tippiPihi = () : void => {

    this.setState({
                    nayta : true,
                    tip: 10
                   });


  }

  tippiNormal = () : void => {

    this.setState({
                    nayta : true,
                    tip: 15
                   });


  }

  tippiReilu = () : void => {

    this.setState({
                    nayta : true,
                    tip: 20
                   });


  }
  render() {

    let tippi;
    let totaltip;
    let tipamount;
    let totaltipround;


    if (this.state.nayta === true ) {

      tipamount = this.state.tip;

      totaltip = (this.state.summa / 100) * tipamount;
      totaltipround = totaltip.toFixed(2);

      if ( totaltip >= 20) {
        tippi = <div className="alert alert-success">Tippaa: 20.00 €</div>;
      } else if (totaltip <= 1){
        tippi = <div className="alert alert-success">Tippaa: 1.00 €</div>; 
      }  else {
      tippi = <div className="alert alert-success">Tippaa: { totaltipround } €</div>; 

      }


    }
  return (
    <div className="container">
      <h1>Tippilaskuri</h1>

      <input className="form-ontrol mt-2" type="number" name="summa" onChange={this.paivita} /> <br></br><br></br>

      <button className="btn btn-danger" onClick={() => { this.tippiPihi() }}>Pihi (10%)</button> &nbsp;
      <button className="btn btn-primary" onClick={() => { this.tippiNormal() }}>Normaali (15%)</button>&nbsp;
      <button className="btn btn-success" onClick={() => { this.tippiReilu() }}>Reilu (20%)</button>


      { tippi }

    </div>
  )
}
}


