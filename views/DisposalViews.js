import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Disposal">
        <h2>Disposer</h2>
        {content}
      </div>
    );
  }
}

exports.SetBundleInfo = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const bundleName = (this.state || {}).bundleName || "Unknown";
    const boughtDate = (this.state || {}).boughtDate || "Unknown";
    const boughtPrice= (this.state || {}).boughtPrice || 1;
    const disposePrice = (this.state || {}).disposePrice || 1;
    const price = (this.state || {}).price || 0;
    return (
      <div className='input-holder'>
        <h4>Bundle Disposal Registration</h4>
        <div className='input'>     
          <input
            type='text'
            placeholder= "Bundle Name"
            onChange={(e) => this.setState({bundleName: e.currentTarget.value})}
            />
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder= "Bought Date"
            onChange={(e) => this.setState({boughtDate: e.currentTarget.value})}
            />
        </div>
        <div className='input'>
          <input
            type='number'
            placeholder= "Bought Price (in ALGO)"
            onChange={(e) => this.setState({boughtPrice: e.currentTarget.value})}
            />
        </div>
        <div className='input'>
          <input
            type='number'
            placeholder= "Dispose Price (in ALGO)"
            onChange={(e) => this.setState({disposePrice: e.currentTarget.value})}
          />
        </div>
        <div>
        <button
          onClick={() => parent.setBundle({bundleName:bundleName,boughtDate: boughtDate,boughtPrice: boughtPrice,disposePrice: reach.parseCurrency(disposePrice)})}
        >Set bundle</button>
        </div>
      </div>
    );
  }
}


exports.Disposing = class extends React.Component {
  render() {
    return (
      <div>Disposing... please wait.
        <br />
        <br />
      </div>
      
    );
  }
}
exports.StartDispose = class extends React.Component {
  render() {
    const {parent, bundleName, bundleLocation, standardUnit} = this.props;
    return (
      <div>
        <button
          onClick={() => parent.dispose()}
        >Start dispose</button>
      </div>
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
    const {bundleName,boughtDate,boughtPrice,disposePrice,ctcInfoStr, standardUnit} = this.props;
    // const {boughtDate} = (this.state || {}).boughtDate || "Nothing";
    // const {boughtPrice} = this.props.boughtPrice;
    // const {disposePrice} = this.props.disposePrice;
    return (
      <div className='details-card'>
        Your bundle have been registered
        <h2>
          Bundle Name 
        </h2>
          {bundleName}
        <h2>
          Bundle Bought Date 
        </h2>
          {boughtDate}
        <h2>
          Bundle Bought Price 
        </h2>
          {boughtPrice} {standardUnit}
        <h2>
          Bundle Bought Price 
        </h2>
          {disposePrice} {standardUnit}
        <h2>
          Contract Number (Please record)
        </h2>
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