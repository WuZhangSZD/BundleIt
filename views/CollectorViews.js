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
      <div>
        <input
          type='text'
          placeholder= "Collector Name"
          onChange={(e) => this.setState({collectorName: e.currentTarget.value})}
        />
        <input
          type='text'
          placeholder= "Collector Location"
          onChange={(e) => this.setState({collectorLocation: e.currentTarget.value})}
        />
        <input
          type='text'
          placeholder= "destinationLocation"
          onChange={(e) => this.setState({destinationLocation: e.currentTarget.value})}
        />
        <input
          type='number'
          placeholder= "collecor price"
          onChange={(e) => this.setState({collectorPrice: e.currentTarget.value})}
        />
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
        Your pre-loved have been collected
        <h2>
          Pre-loved Name 
        </h2>
        <br/>
        <h2>
          {collectorName}
        </h2>
        <h2>
          Pre-loved Bought-day 
        </h2>
        <br/>
        <h2>
          {collectorLocation}
        </h2>
        <h2>
          Pre-loved bought price 
        </h2>
        <br/>
        <h2>
          {destinationLocation}
        </h2>
        <h2>
          Pre-loved dispose price 
        </h2>
        <br/>
        <h2>
          {collectorPrice}
        </h2>
        <h2>
          ContractNumber (please record) 
        </h2>
        <br/>
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
        The disposal price is:
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
      </div>
    );
  }
}

export default exports;