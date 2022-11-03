import React from 'react';
import logo from './logo.png';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <div id='header'><img className='header logo' src={logo} alt="logo" /></div> 
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        <h3>BundleIt! Best Choice for Vintage</h3>
        <h5>
          Please wait while we connect to your account.
          If this takes more than a few seconds, there may be something wrong.
        </h5>
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
    //Above funaAccount and skipFundAccount will call function in index.js
  }
}

exports.DisposalOrCollectorOrSeller = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div className='container'>
        <div className='joinUs'>
        <h3 className='role-title'>
          Please select a role:
        </h3>
          <div className='member'>
            <button
              onClick={() => parent.selectDisposal()}
            >Disposal</button>
            <p> Set the item details and deploy the contract</p>
          </div>
          <div className='member'>
            <button
              onClick={() => parent.selectCollector()}
            >Collector</button>
            <p> Attach to the Disposal's contract</p>
            
          </div>
          <div className='member'>
            <button
              onClick={() => parent.selectSeller()}
            >Seller</button>
            <p> Attach to the Collector's contract</p>
            
          </div>
          <div className='member'>
            <button
              onClick={() => parent.selectViewer()}
            >Viewer</button>
            <p> View the bundle information.</p>
          </div>
        </div>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectDeployer()}
          >Deployer</button>
          <br /> Set the wager, deploy the contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectAttacher()}
          >Attacher</button>
          <br /> Attach to the Deployer's contract.
        </p>
      </div>
    );
  }
}

export default exports;