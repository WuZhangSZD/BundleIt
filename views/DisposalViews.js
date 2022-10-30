import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Disposal">
        <h2>Disposal (Disposal)</h2>
        {content}
      </div>
    );
  }
}

exports.SetBundleInfo = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const bundleName = (this.state || {}).bundleName || "Unknown";
    const disposalName = (this.state || {}).disposalName || "Unknown";
    const disposalLocation = (this.state || {}).disposalLocation || "Unknown";
    const price = (this.state || {}).price || 0;
    return (
      <div>
        <input
          type='text'
          placeholder= "BundleName"
          onChange={(e) => this.setState({bundleName: e.currentTarget.value})}
        />
        <input
          type='text'
          placeholder= "boughtDate"
          onChange={(e) => this.setState({boughtDate: e.currentTarget.value})}
        />
        <input
          type='number'
          placeholder= "boughtPrice"
          onChange={(e) => this.setState({boughtPrice: e.currentTarget.value})}
        />
        <input
          type='number'
          placeholder= "disposePrice"
          onChange={(e) => this.setState({disposePrice: e.currentTarget.value})}
        />
        <br />
        <button
          onClick={() => parent.setBundle({bundleName:bundleName,boughtDate: boughtDate,boughtPrice: boughtPrice,disposePrice: disposePrice})}
        >Set bundle</button>
      </div>
    );
  }
}

exports.Dispose = class extends React.Component {
  render() {
    const {parent, bundleName, bundleLocation, standardUnit} = this.props;
    return (
      <div>
        bundleName: {bundleName}
        <br />
        bundleLocation: {bundleLocation}
        <br />
        <button
          onClick={() => parent.dispose()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Disposing = class extends React.Component {
  render() {
    return (
      <div>Disposing... please wait.</div>
    );
  }
}

exports.DisposeDone = class extends React.Component {
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
    const {bundleName} = this.props.bundleName;
    const {bundleLocation} = this.props.bundleLocation;
    const {disposalName} = this.props.dispsoalName;
    const {disposePrice} = this.props.disposePrice;
    const {price} = this.props;
    return (
      <div>
        Your pre-loved have been registered
        <h2>
          Pre-loved Name 
        </h2>
        <br/>
        <h2>
          {bundleName}
        </h2>
        <h2>
          Pre-loved Bought-day 
        </h2>
        <br/>
        <h2>
          {bundleLocation}
        </h2>
        <h2>
          Pre-loved Description 
        </h2>
        <br/>
        <h2>
          {price}
        </h2>
        <h2>
          ContractNumber (please record) 
        </h2>
        <br/>
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        {/* <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button> */}
      </div>
    )
  }
}

export default exports;