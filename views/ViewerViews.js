import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Seller">
        <h2>Seller (Seller)</h2>
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
      <div>
        Your pre-loved have been registerd for selling
        <h2>
          Seller Name
        </h2>
        <br/>
        <h2>
          {sellerName}
        </h2>
        <h2>
          Seller Location 
        </h2>
        <br/>
        <h2>
          {sellerLocation}
        </h2>
        <h2>
          Collect Date 
        </h2>
        <br/>
        <h2>
          {collectDate}
        </h2>
        <h2>
          Bundle Condition 
        </h2>
        <br/>
        <h2>
          {bundleCondition}
        </h2>
        <h2>
          Seller Price 
        </h2>
        <br/>
        <h2>
          {sellerPrice}
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
    const {priceCollect, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The terms of the game are:
        <br /> Wager: {priceCollect} {standardUnit}
        <br />
        <button
          // disabled={disabled}
          onClick={() => {
            this.setState({disabled: false});
            parent.termsAccepted();
          }}
        >Accept terms and pay wager</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the other player...
        <br />Think about which move you want to play.
      </div>
    );
  }
}

export default exports;