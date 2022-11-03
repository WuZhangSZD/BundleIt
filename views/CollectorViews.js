import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Collector">
        <h2>Collector</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div class="container contract_margin">
        <div class="backgroundColor1 row m-5 no-gutters shadow-lg">
          Please paste the contract info to attach to:
          <br />
          <textarea spellCheck="false"
            className='ContractInfo'
            onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
            placeholder='{}'
          />
          <br />
          <button
            disabled={!ctcInfoStr}
            onClick={() => parent.collect(ctcInfoStr)}
          >Attach</button>
        </div>
      </div>
    );
  }
}

exports.CollectBundleInfo = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const collectorName = (this.state || {}).collectorName || "Unknown";
    const collectorLocation = (this.state || {}).collectorLocation || "Unknown";
    const destinationLocation= (this.state || {}).destinationLocation || "Unknown";
    const collectorPrice = (this.state || {}).collectorPrice || 1;
    return (
      <div className='input-holder'>
        <h4>Bundle Collection Registration</h4>
        <div className='input'>
          <input
            type='text'
            placeholder= "Collector Name"
            onChange={(e) => this.setState({collectorName: e.currentTarget.value})}
          />
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder= "Collector Location"
            onChange={(e) => this.setState({collectorLocation: e.currentTarget.value})}
          />
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder= "Destination Location"
            onChange={(e) => this.setState({destinationLocation: e.currentTarget.value})}
          />
        </div>
        <div className='input'>
          <input
            type='number'
            placeholder= "Collector Price (in ALGO)"
            onChange={(e) => this.setState({collectorPrice: e.currentTarget.value})}
          />
        </div>
          <br />
          <button
            onClick={() => parent.setBundle({collectorName:collectorName,collectorLocation: collectorLocation,destinationLocation:destinationLocation,collectorPrice: reach.parseCurrency(collectorPrice)})}
          >Set bundle</button>
      </div>
    );
  }
}

exports.StartCollect = class extends React.Component {
  render() {
    const {parent, bundleName, bundleLocation, standardUnit} = this.props;
    return (
      <div>
        <button
          onClick={() => parent.collect()}
        >Start collect</button>
      </div>
    );
  }
}
exports.CollectDone = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {collectorName,collectorLocation,destinationLocation,collectorPrice,ctcInfoStr} = this.props;
    return (
      <div className='details-card'>
        Your bundle have been collected
        <h2>
          Collector Name 
        </h2>
          {collectorName}
        <h2>
          Collector Location
        </h2>
          {collectorLocation}
        <h2>
          Destination Location
        </h2>
          {destinationLocation}
        <h2>
          Collector Price
        </h2>
          {collectorPrice}{standardUnit}
        <h2>
          Contract Number (Please record) 
        </h2>
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
      </div>
      
    )
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {priceDispose, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The disposal price:
        <br />{priceDispose} {standardUnit}
        <br />
        <button
          // disabled={disabled}
          onClick={() => {
            this.setState({disabled: false});
            parent.termsAccepted();
          }}
        >Accept and Pay</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Loading, please wait...
        <br />
        <br />
      </div>
    );
  }
}

export default exports;