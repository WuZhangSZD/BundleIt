//this is code from the rock paper scissors, currently I am trying can I use react to display the thing
//For emma maybe can create a page using html and css only, and then integrated within react
//For brandon maybe start from rsh and mjs, try to define the input by user and we will look how to pass variable into rsh from react

import React from 'react';
//Below are the page that we are really going to implement
import MainPageViews from './views/MainPageViews';
import ProductViews from './views/ProductViews';
import DetailViews from './views/DetailViews';

//Below are the testing page that nich showed
import AppViews from './views/AppViews';
import DisposalViews from './views/DisposalViews';
import CollectorViews from './views/CollectorViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

//This is variable defining session
const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];

const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
    constructor(props) {
      super(props);
      //set default display to simple connecting account state
      this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
      //not sure what is the definition of canFundFromFaucent
      if (await reach.canFundFromFaucet()) {
        //this is the code to fund the user account
        this.setState({view: 'FundAccount'});
      } else {
        //this is the code to choose the user stype
        //this is the code that we going to use
        // this.setState({view: 'DisposalOrCollector'});

        this.setState({view: 'DeployerOrAttacher'});
      }
    }
    //refered by appView in FundAccount
    async fundAccount(fundAmount) {
      await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        //this is the code to choose the user stype
        //this is the code that we going to use
        // this.setState({view: 'DisposalOrCollectorOrSeller'});
      this.setState({view: 'DeployerOrAttacher'});
    }
    //refered by appView in FundAccount
    async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
    selectDiposal() { this.setState({view: 'Wrapper', ContentView: Disposal}); }
    selectCollector() { this.setState({view: 'Wrapper', ContentView: Collector}); }
    selectSeller() { this.setState({view: 'Wrapper', ContentView: Seller}); }
    selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
    selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
    render() { return renderView(this, MainPageViews); }
}
  
class BundleFunction extends React.Component {
  async registerBundle() { //Fun([UInt,Bytes(256),Bytes(256),Bytes(256)],Null)
    const FirstPara = await new Promise(resolveHandP => {
      this.setState({view: 'GetBundle', playable:true, resolveHandP});
    });
    this.setState({view: 'WaitingForResults', FirstPara});
    return "what to return";
  
  }
  informTimeout() {this.setState({view: 'Timeout'});}
  // random() { return reach.hasRandom.random(); }
  // async getHand() { // Fun([], UInt)
  //   const hand = await new Promise(resolveHandP => {
  //     this.setState({view: 'GetHand', playable: true, resolveHandP});
  //   });
  //   this.setState({view: 'WaitingForResults', hand});
  //   return handToInt[hand];
  // }

  // seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  // informTimeout() { this.setState({view: 'Timeout'}); }
  // playHand(hand) { this.state.resolveHandP(hand); }
}
class Disposal extends BundleFunction {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }
  setWager(wager) { this.setState({view: 'Disposal', wager}); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Disposal(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForCollector', ctcInfoStr});
  }
  render() { return renderView(this, DisposalViews); }
}
class Collecor extends BundleFunction {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Bob(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, CollectorViews); }
}







class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getHand() { // Fun([], UInt)
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetHand', playable: true, resolveHandP});
    });
    this.setState({view: 'WaitingForResults', hand});
    return handToInt[hand];
  }
  seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  playHand(hand) { this.state.resolveHandP(hand); }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }
  setWager(wager) { this.setState({view: 'Deploy', wager}); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  render() { return renderView(this, DeployerViews); }
}
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Bob(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);

//Previous version jz for refering
// //this is code from the rock paper scissors, currently I am trying can I use react to display the thing
// //For emma maybe can create a page using html and css only, and then integrated within react
// //For brandon maybe start from rsh and mjs, try to define the input by user and we will look how to pass variable into rsh from react

// import React from 'react';
// //Below are the page that we are really going to implement
// import MainPageViews from './views/MainPageViews';
// import ProductViews from './views/ProductViews';
// import DetailViews from './views/DetailViews';

// //Below are the testing page that nich showed
// import AppViews from './views/AppViews';
// import DeployerViews from './views/DeployerViews';
// import AttacherViews from './views/AttacherViews';
// import {renderDOM, renderView} from './views/render';
// import './index.css';
// import * as backend from './build/index.main.mjs';
// import { loadStdlib } from '@reach-sh/stdlib';
// const reach = loadStdlib(process.env);

// //This is variable defining session
// const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
// const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
// const {standardUnit} = reach;
// const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {view: 'ConnectAccount', ...defaults};
//     }
//     async componentDidMount() {
//       const acc = await reach.getDefaultAccount();
//       const balAtomic = await reach.balanceOf(acc);
//       const bal = reach.formatCurrency(balAtomic, 4);
//       this.setState({acc, bal});
//       if (await reach.canFundFromFaucet()) {
//         this.setState({view: 'FundAccount'});
//       } else {
//         this.setState({view: 'DeployerOrAttacher'});
//       }
//     }
//     async fundAccount(fundAmount) {
//       await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
//       this.setState({view: 'DeployerOrAttacher'});
//     }
//     async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
//     selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
//     selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
//     render() { return renderView(this, MainPageViews); }
// }
  
// class Player extends React.Component {
//   random() { return reach.hasRandom.random(); }
//   async getHand() { // Fun([], UInt)
//     const hand = await new Promise(resolveHandP => {
//       this.setState({view: 'GetHand', playable: true, resolveHandP});
//     });
//     this.setState({view: 'WaitingForResults', hand});
//     return handToInt[hand];
//   }
//   seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
//   informTimeout() { this.setState({view: 'Timeout'}); }
//   playHand(hand) { this.state.resolveHandP(hand); }
// }

// class Deployer extends Player {
//   constructor(props) {
//     super(props);
//     this.state = {view: 'SetWager'};
//   }
//   setWager(wager) { this.setState({view: 'Deploy', wager}); }
//   async deploy() {
//     const ctc = this.props.acc.contract(backend);
//     this.setState({view: 'Deploying', ctc});
//     this.wager = reach.parseCurrency(this.state.wager); // UInt
//     this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
//     backend.Alice(ctc, this);
//     const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
//     this.setState({view: 'WaitingForAttacher', ctcInfoStr});
//   }
//   render() { return renderView(this, DeployerViews); }
// }
// class Attacher extends Player {
//   constructor(props) {
//     super(props);
//     this.state = {view: 'Attach'};
//   }
//   attach(ctcInfoStr) {
//     const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
//     this.setState({view: 'Attaching'});
//     backend.Bob(ctc, this);
//   }
//   async acceptWager(wagerAtomic) { // Fun([UInt], Null)
//     const wager = reach.formatCurrency(wagerAtomic, 4);
//     return await new Promise(resolveAcceptedP => {
//       this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
//     });
//   }
//   termsAccepted() {
//     this.state.resolveAcceptedP();
//     this.setState({view: 'WaitingForTurn'});
//   }
//   render() { return renderView(this, AttacherViews); }
// }

// renderDOM(<App />);