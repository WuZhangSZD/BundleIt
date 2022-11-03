import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Seller">
        <h2>Seller</h2>
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
      <div>
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
          onClick={() => parent.sell(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.SellBundleInfo = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const sellerName = (this.state || {}).sellerName || "Unknown";
    const sellerLocation = (this.state || {}).sellerLocation || "Unknown";
    const collectDate= (this.state || {}).collectDate || "Unknown";
    const bundleCondition= (this.state || {}).bundleCondition || "Unknown";
    const sellerPrice = (this.state || {}).sellerPrice || 1;
    return (
      <div className='input-holder'>
        <h4>Bundle Seller Registration</h4>
        <div className='input'>
          <input
            type='text'
            placeholder= "Seller Name"
            onChange={(e) => this.setState({sellerName: e.currentTarget.value})}
          />
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder= "Seller Location"
            onChange={(e) => this.setState({sellerLocation: e.currentTarget.value})}
          />
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder= "Collect Date"
            onChange={(e) => this.setState({collectDate: e.currentTarget.value})}
          />
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder= "Bundle Condition"
            onChange={(e) => this.setState({bundleCondition: e.currentTarget.value})}
          />
        </div>
        <div className='input'>
          <input
            type='number'
            placeholder= "Selling Price (in ALGO)"
            onChange={(e) => this.setState({sellerPrice: e.currentTarget.value})}
          />
        </div>
        
        <br />
        <button
          onClick={() => parent.setBundle({sellerName:sellerName,sellerLocation: sellerLocation,collectDate:collectDate,bundleCondition:bundleCondition,sellerPrice: reach.parseCurrency(sellerPrice)})}
        >Sell bundle</button>
      </div>
    );
  }
}

exports.StartSell = class extends React.Component {
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
exports.SellDone = class extends React.Component {
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
    const {sellerName,sellerLocation,collectDate,bundleCondition,sellerPrice,ctcInfoStr} = this.props;
    return (
      <div className='details-card'>
        Your bundle have been registerd for selling
        <h2>
          Seller Name
        </h2>
          {sellerName}
        <h2>
          Seller Location 
        </h2>
          {sellerLocation}
        <h2>
          Collect Date 
        </h2>
          {collectDate}
        <h2>
          Bundle Condition 
        </h2>
          {bundleCondition}
        <h2>
          Seller Price 
        </h2>
        <br/>
        <h2>
          {sellerPrice}
        </h2>
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
        <br />
        <br />
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {priceCollect, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The collection price:
        <br /> {priceCollect} {standardUnit}
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