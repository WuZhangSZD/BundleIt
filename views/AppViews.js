import React from 'react';
import logo from './logo.png';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content,parent} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <div id='header'>
            <p className="logo" id="logo">BundleIt</p>
            <img className='header logo' src={logo} alt="logo" />
          </div> 
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div id="loading">
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
          <div className='member'>
            <p className="member-header">Disposal</p>
            <p className="member-description">If you have a pre-loved and would like to find a new master for it, this role is perfect for you!</p>
            <button
              onClick={() => parent.selectDisposal()}
            >Join</button>
          </div>
          <div className='member'>
            <p className="member-header">Collector</p>
            <p className="member-description">If you are a collector that would like collect pre-loved from disposal, this role is perfect for you!</p>
            <button
              onClick={() => parent.selectCollector()}
            >Join</button>
          </div>
          <div className='member'>
            <p className="member-header">Seller</p>
            <p className="member-description">If you are planning to sell your pre-loved stock directly to customer, this role is perfect for you!</p>
            <button
              onClick={() => parent.selectSeller()}
            >Join</button>
          </div>
          <div className='member'>
            <p className="member-header">Viewer</p>
            <p className="member-description">If you are planning to buy and love another's pre-loved, this role is perfect for you!</p>
            <button
              onClick={() => parent.selectViewer()}
            >Join</button>
          </div>
        </div>
      </div>
    );
  }
}
export default exports;