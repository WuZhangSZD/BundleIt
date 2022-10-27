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
          placeholder= "disposalName"
          onChange={(e) => this.setState({disposalName: e.currentTarget.value})}
        />
        <input
          type='text'
          placeholder= "disposalLocation"
          onChange={(e) => this.setState({disposalLocation: e.currentTarget.value})}
        />
        <input
          type='number'
          placeholder= "price"
          onChange={(e) => this.setState({price: e.currentTarget.value})}
        />
        <br />
        <button
          onClick={() => parent.setBundle(bundleName,disposalName,disposalLocation,price)}
        >Set wager</button>
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

exports.WaitingForCollector = class extends React.Component {
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
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Collector to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;