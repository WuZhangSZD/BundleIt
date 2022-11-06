import React from 'react';
import Bundles from '../db.json';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Viewer">
        <h2>Viewer (Viewer)</h2>
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
        <div className='bundle-container'>
          <div className='bundleList'>
          {Bundles && Bundles.map(bundle=>{
              return(
                <div className='bundle' key={bundle.id}>
                <p className="bundle-header">{bundle.name}</p>
                <p className="bundle-description">Bundle status: {bundle.status}</p>
                <pre className='Remain-Info-Import'>
                    {JSON.stringify(bundle.contract)}            
                </pre>  
                <button className={bundle.status=="SOLD" ? "disabled" : ""} disabled={bundle.status=="SOLD"}
                onClick={() => parent.view(JSON.stringify(bundle.contract))}
                >View</button>
              </div>
              )
            })}
          </div>
        </div>
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
          onClick={() => parent.view(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.ViewDone = class extends React.Component {

  render() {
    const {priceCollect, standardUnit, parent,bundleName,collectorName,sellerName,bundleCondition,sellerPrice,ctcInfoStr} = this.props;
    return (
      <div className='details-card'>
        <div id="NameArea">
          <p className="bundleName">The information for bundle </p>
          <p className="bundleName-variable">{bundleName}</p>
          <p className="bundleName"> is shown here.</p>
        </div>
        <div id="RemainArea">
          <p className="Remain-Info">Bundle Name</p>
          <p className="Remain-Info-Import">{bundleName}</p>

          <p className="Remain-Info">Collector Name</p>
          <p className="Remain-Info-Import">{collectorName}</p>

          <p className="Remain-Info">Bundle Condition</p>
          <p className="Remain-Info-Import">{bundleCondition}</p>

          <p className="Remain-Info">Seller Price</p>
          <p className="Remain-Info-Import">{sellerPrice} {standardUnit}</p>
          <button
          onClick={() => {
            this.setState({disabled: false});
            parent.termsAccepted();
          }}
        >Buy the bundle</button>
        </div>
      </div>
    )
  }
}

exports.BuyingDone = class extends React.Component {

  render() {
    const {standardUnit,bundleName,collectorName,sellerName,bundleCondition,sellerPrice} = this.props;
    return (
      <div className='details-card'>
      <div id="NameArea">
        <p className="bundleName">The information for bundle bought </p>
        <p className="bundleName-variable">{bundleName}</p>
        <p className="bundleName"> is shown here.</p>
      </div>
      <div id="RemainArea">
        <p className="Remain-Info">Bundle Name</p>
        <p className="Remain-Info-Import">{bundleName}</p>

        <p className="Remain-Info">Collector Name</p>
        <p className="Remain-Info-Import">{collectorName}</p>

        <p className="Remain-Info">Bundle Condition</p>
        <p className="Remain-Info-Import">{bundleCondition}</p>

        <p className="Remain-Info">Amount Paid</p>
        <p className="Remain-Info-Import">{sellerPrice} {standardUnit}</p>
        Thank you for buying from {sellerName}. Please come again!
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
    const {priceCollect, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The price for this bundle:
        <br /> Price: {priceCollect} {standardUnit}
        <br />
        <button
          // disabled={disabled}
          onClick={() => {
            this.setState({disabled: false});
            parent.termsAccepted();
          }}
        >Accept terms and pay for the bundle</button>
      </div>
    );
  }
}

exports.Waiting = class extends React.Component {
  render() {
    return (
      <div>
        Processing bundle purchase...
        <br />Please wait for a moment.
      </div>
    );
  }
}

export default exports;