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
    const boughtDate = (this.state || {}).boughtDate || "Unknown";
    const boughtPrice= (this.state || {}).boughtPrice || 1;
    const disposePrice = (this.state || {}).disposePrice || 1;
    const price = (this.state || {}).price || 0;
    return (
      <div className='input-holder'>
        <div className='input'>
          <label>Bundle Name:
            <br/>
        <input
          type='text'
          placeholder= "BundleName"
          onChange={(e) => this.setState({bundleName: e.currentTarget.value})}
          />
          </label>
        </div>
        <div className='input'>
          <label>Bought Date:
            <br/>
        <input
          type='text'
          placeholder= "boughtDate"
          onChange={(e) => this.setState({boughtDate: e.currentTarget.value})}
          />
          </label>
        </div>
        <div className='input'>
          <label>Bought Price: 
            <br/>
        <input
          type='number'
          placeholder= "boughtPrice"
          onChange={(e) => this.setState({boughtPrice: e.currentTarget.value})}
          />
        </label>
        </div>
        <div className='input'>
          <label>Disposal Price:
            <br/>
        <input
          type='number'
          placeholder= "disposePrice"
          onChange={(e) => this.setState({disposePrice: e.currentTarget.value})}
        />
        </label>
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
      <div>Disposing... please wait.</div>
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
    const {bundleName,boughtDate,boughtPrice,disposePrice,ctcInfoStr} = this.props;
    // const {boughtDate} = (this.state || {}).boughtDate || "Nothing";
    // const {boughtPrice} = this.props.boughtPrice;
    // const {disposePrice} = this.props.disposePrice;
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
          {boughtDate}
        </h2>
        <h2>
          Pre-loved bought price 
        </h2>
        <br/>
        <h2>
          {boughtPrice}
        </h2>
        <h2>
          Pre-loved dispose price 
        </h2>
        <br/>
        <h2>
          {disposePrice}
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

export default exports;