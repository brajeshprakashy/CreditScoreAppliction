
import React, { Component } from "react";
import {checkCreditScore} from '../util/APIUtils';
import "./creditScore.css"

class creditScore extends Component {
    constructor(props) {
        debugger;
      super(props);
      this.cardList =['SBI Platinum Card','SBI Travel Card',
      'HDFC Platinum Card','HDFC Platinum Card'];
    this.card_900 = ['HDFC Platinum Card','HDFC Fuel Card','ICICI Platinum Card'
         ,'Axis Bank Platinum Card'];
        this.loanOffer_900= ['SBI Personal Loan','SBI Home Loan','SBI Car Loan'];
         this.loanOffer = ['HDFC Personal Loan','ICICI Personal Loan'];
       this.username = props.location.state.username;
      this.state = {
          score:""
      };
    
 }

 componentDidMount(){
     console.log("component method called");
     const email = this.username;
     checkCreditScore(email).then(response =>{
          console.log("response is "+response);
          this.setState({
            score: response,
            });
     }
);
}
    
    cardDetails(){
        var card=this.state.score>900?this.card_900:this.cardList
        return card.map(c =>
          <li>{c}</li>
      )}
      loanDetails(){
        var card=this.state.score>900?this.loanOffer_900:this.loanOffer
        return card.map(c =>
          <li>{c}</li>
      )}
    render() {
        console.log("UserName "+this.state.username)
        const creditScore= this.state.score;
        console.log(" "+this.state.username)
        return (
            
        <div className="score-container">
            <h1>Your Crdedit Score is:- {creditScore}</h1>
            <h4>You are eligibale for below CreditCard and Loans</h4>
           <div style={{marginTop:'10px'}}>Credit Card Offer 
           <ul>
           {this.cardDetails()}
           </ul>  
           </div>
           <div style={{marginTop:'10px'}}>Loans Offer
           <ul>
           {this.loanDetails()}
           </ul>  
           </div>
        </div>
        );
      }
    }
    export default creditScore;
