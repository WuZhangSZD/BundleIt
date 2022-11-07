import React from 'react';
import wallpaper from './wallpaper3.jpg';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Seller">
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
      <div className="attach">
      <p>Please paste the contract info to attach to:</p>
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
        <div className="input-column">
          <div className="input-form">
            <p className="input-title">Bundle Seller Registration</p>
            <p className="input-description">Sell pre-loved</p>
            <div className='input tooltip' data-tooltip="e.g: John Doe">
          <input
            type='text'
            placeholder= "Seller Name"
            onChange={(e) => this.setState({sellerName: e.currentTarget.value})}
          />
        </div>
        <div className='input tooltip' data-tooltip="e.g: Perak, Malaysia"> 
          <input
            type='text'
            placeholder= "Seller Location"
            onChange={(e) => this.setState({sellerLocation: e.currentTarget.value})}
          />
        </div>
        <div className='input tooltip' data-tooltip="e.g: 23/3/2012"> 
          <input
            type='date'
            placeholder= "Collect Date"
            onChange={(e) => this.setState({collectDate: e.currentTarget.value})}
          />
        </div>
        <div className='input tooltip' data-tooltip="e.g: Good condition"> 
          <input
            type='text'
            placeholder= "Bundle Condition"
            onChange={(e) => this.setState({bundleCondition: e.currentTarget.value})}
          />
        </div>
        <div className='input tooltip' data-tooltip="e.g: 3"> 
          <input
            type='number'
            placeholder= "Selling Price (in ALGO)"
            onChange={(e) => this.setState({sellerPrice: e.currentTarget.value})}
            min='0'
          />
        </div>
            <div>
            <button
          onClick={() => parent.setBundle({sellerName:sellerName,sellerLocation: sellerLocation,collectDate:collectDate,bundleCondition:bundleCondition,sellerPrice: reach.parseCurrency(sellerPrice)})}
        >Sell bundle</button>
            </div>
          </div>
        </div>
        <div className="input-column">
          <img className='wallpaper' src={wallpaper}  alt="wallpaper1"/>
        </div>
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
    const {sellerName,sellerLocation,collectDate,bundleCondition,sellerPrice,bundleName,ctcInfoStr, standardUnit} = this.props;
    return (
      <div className='details-card'>
      <div id="NameArea">
        <p className="bundleName">Your </p>
        <p className="bundleName-variable">{bundleName}</p>
        <p className="bundleName"> have been put up for sale</p>
      </div>
      <div id="RemainArea">
        <p className="Remain-Info">Your Name</p>
        <p className="Remain-Info-Import">{sellerName}</p>

        <p className="Remain-Info">Your location</p>
        <p className="Remain-Info-Import">{sellerLocation}</p>

        <p className="Remain-Info">Collect Date</p>
        <p className="Remain-Info-Import">{collectDate}</p>

        <p className="Remain-Info">Bundle Condition</p>
        <p className="Remain-Info-Import">{bundleCondition}</p>

        <p className="Remain-Info">Sell Price</p>
        <p className="Remain-Info-Import">{sellerPrice} {standardUnit}</p>

        <p className="Remain-Info">Contract Number*</p>
        <pre className='Remain-Info-Import'>
          {ctcInfoStr}
        </pre>  
        <button onClick={(e) => this.copyToClipboard(e.currentTarget)}>Copy to clipboard</button>
      </div>
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
      <div className="accept-term">
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

exports.Waiting = class extends React.Component {
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