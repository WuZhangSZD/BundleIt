import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

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
            <div className='bundle'>
              <p class="bundle-header">Bundle1</p>
              <p class="bundle-description">This bundle have the best view in the world</p>
              <pre class='Remain-Info-Import'>
                  "type": "BigNumber",
                  "hex": "0x07343afb"
              </pre>  
              <button
                onClick={() => parent.view(contractInfo)}
              >View</button>
            </div>
            <div className='bundle'>
              <p class="bundle-header">Bundle2</p>
              <p class="bundle-description">This bundle have the best view in the world</p>
              <pre class='Remain-Info-Import'>
                  "type": "BigNumber",
                  "hex": "0x07343afb"
              </pre>  
              <button
                onClick={() => parent.view(contractInfo)}
              >View</button>
            </div>
            <div className='bundle'>
              <p class="bundle-header">Bundle3</p>
              <p class="bundle-description">This bundle have the best view in the world</p>
              <pre class='Remain-Info-Import'>
                    "type": "BigNumber",
                    "hex": "0x07343afb"
              </pre>  
              <button
                onClick={() => parent.view(contractInfo)}
              >View</button>
            </div>
            <div className='bundle'>
              <p class="bundle-header">Bundle4</p>
              <p class="bundle-description">This bundle have the best view in the world</p>
              <pre class='Remain-Info-Import'>
                    "type": "BigNumber",
                    "hex": "0x07343afb"
              </pre>  
              <button
                onClick={() => parent.view(contractInfo)}
              >View</button>
            </div>
            <div className='bundle'>
              <p class="bundle-header">Bundle5</p>
              <p class="bundle-description">This bundle have the best view in the world</p>
              <pre class='Remain-Info-Import'>
                    "type": "BigNumber",
                    "hex": "0x07343afb"
              </pre>  
              <button
                onClick={() => parent.view(contractInfo)}
              >View</button>
            </div>
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
      <div>
        This is the information of bundle
        <h2>
          Bundle Name
        </h2>
          {bundleName}
        <h2>
          CollectorName 
        </h2>
          {collectorName}
        <h2>
          SellerName
        </h2>
          {sellerName}
        <h2>
          Bundle Condition 
        </h2>
          {bundleCondition}

        <h2>
          Seller Price 
        </h2>
          {sellerPrice} {standardUnit}
          <br/>
        <button
          onClick={() => {
            this.setState({disabled: false});
            parent.termsAccepted();
          }}
        >Buy the bundle</button>
      </div>
    )
  }
}

exports.BuyingDone = class extends React.Component {

  render() {
    const {standardUnit,bundleName,collectorName,sellerName,bundleCondition,sellerPrice} = this.props;
    return (
      <div>
        This is the information of the bundle bought
        <h2>
          Bundle Name
        </h2>
          {bundleName}
        <h2>
          CollectorName 
        </h2>
          {collectorName}
        <h2>
          SellerName
        </h2>
          {sellerName}
        <h2>
          Bundle Condition 
        </h2>
          {bundleCondition}
        <h2>
          Amount Paid
        </h2>
          {sellerPrice} {standardUnit}
          <br/>
          Thank you for buying from {sellerName}. Please come again
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

exports.WaitingForTurn = class extends React.Component {
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