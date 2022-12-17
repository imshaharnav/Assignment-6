import React from "react";
import web3 from "./web3";
import TicketSale from "./TicketSale";




class App extends React.Component {
state={
    manager: '',
    players: [],
    balance: '',
    address: '',
    value: '',
  };
  onSubmit= async (event)=> {
    event.preventDefault();

    const accounts=await web3.eth.getAccounts();

    this.setState({message: 'Wait on transaction success ... '})

    await TicketSale.methods.buyTicket(this.state.value).send({
      from: accounts[0],
      value: 10
    });
    this.setState({message: 'you have been entered!'});
  };

  render(){
   return (
    <div className="App">
      …
      …
     <form onSubmit={this.onSubmit}>
        <h4> Number ticketid number</h4>
        <div>
        <label>Enter the ticketid number you want to buy </label>
        <input
          value={this.state.value}
          onChange={event=> this.setState({value: event.target.value})}
        />
        </div>
        <button>Buy ticket</button>
      </form>
     <hr />
      <h4>Checking your tickets</h4>
      <button onClick={this.onClick}>check your ticket</button>
      <hr />
      <h1>{this.state.message}</h1>
     </div>
  );
}

onClick = async () => {
      const accounts = await web3.eth.getAccounts();

      this.setState({ message: "Waiting on transaction success..." });

const TicketSaleID = await TicketSale.methods.getTicketOf(accounts[0]).call({
        from: accounts[0],
      });
  
    this.setState({ message: TicketSaleID });
  };



}


export default App;
