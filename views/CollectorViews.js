import React from 'react';
import wallpaper from './wallpaper2.jpg';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Collector">
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
      <div className='attach'>
        <p>Please paste the contract info to attach to:</p>
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
        <div className="input-column">
          <div className="input-form">
            <p className="input-title">Bundle Collection Registration</p>
            <p className="input-description">Collect pre-loved</p>
            <div className='input tooltip' data-tooltip="e.g: John Doe">
              <input
                type='text'
                placeholder= "Collector Name"
                onChange={(e) => this.setState({collectorName: e.currentTarget.value})}
              />
            </div>
            <div className='input tooltip' data-tooltip="e.g: Tokyo, Japan">
              <input
                type='text'
                placeholder= "Collector Location"
                onChange={(e) => this.setState({collectorLocation: e.currentTarget.value})}
              />
            </div>
            <div className='input tooltip' data-tooltip="e.g: Kuala Lumpur, Malaysia">
              <input
                type='text'
                placeholder= "Destination Location"
                onChange={(e) => this.setState({destinationLocation: e.currentTarget.value})}
              />
            </div>
            <div className='input tooltip' data-tooltip="e.g: 1">
              <input
                type='number'
                placeholder= "Collector Price (in ALGO)"
                onChange={(e) => this.setState({collectorPrice: e.currentTarget.value})}
                min='0'
              />
            </div>
            <div>
              <button
                onClick={() => parent.setBundle({collectorName:collectorName,collectorLocation: collectorLocation,destinationLocation:destinationLocation,collectorPrice: reach.parseCurrency(collectorPrice)})}
              >Set bundle</button>
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
    const {collectorName,collectorLocation,destinationLocation,collectorPrice,bundleName,ctcInfoStr,standardUnit} = this.props;
    return (
      <div className='details-card'>
        <div id="NameArea">
          <p className="bundleName">Your </p>
          <p className="bundleName-variable">{bundleName}</p>
          <p className="bundleName"> have been collected</p>
          <p className="reminder">*copy the contract number and pass to seller to prove your bundle valid</p>
        </div>
        <div id="RemainArea">
          <p className="Remain-Info">Your Name</p>
          <p className="Remain-Info-Import">{collectorName}</p>

          <p className="Remain-Info">Your location</p>
          <p className="Remain-Info-Import">{collectorLocation}</p>

          <p className="Remain-Info">Bundle Destination</p>
          <p className="Remain-Info-Import">{destinationLocation}</p>

          <p className="Remain-Info">Bundle Collect Price</p>
          <p className="Remain-Info-Import">{collectorPrice} {standardUnit}</p>

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
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {priceDispose, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div className="accept-term">
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