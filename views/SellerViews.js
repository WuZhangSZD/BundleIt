import React from 'react';
import PlayerViews from './PlayerViews';
import wallpaper from './wallpaper3.jpg';

const exports = {...PlayerViews};

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
      <div class="attach">
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
        <div class="input-column">
          <div class="input-form">
            <p class="input-title">Bundle Seller Registration</p>
            <p class="input-description">Sell pre-loved</p>
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
            type='date'
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
            <div>
            <button
          onClick={() => parent.setBundle({sellerName:sellerName,sellerLocation: sellerLocation,collectDate:collectDate,bundleCondition:bundleCondition,sellerPrice: reach.parseCurrency(sellerPrice)})}
        >Sell bundle</button>
            </div>
          </div>
        </div>
        <div class="input-column">
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
        <p class="bundleName">Your </p>
        <p class="bundleName-variable">{bundleName}</p>
        <p class="bundleName"> have been collected</p>
        <p class="reminder">*copy the contract number and pass to seller to prove your bundle valid</p>
      </div>
      <div id="RemainArea">
        <p class="Remain-Info">Your Name</p>
        <p class="Remain-Info-Import">{sellerName}</p>

        <p class="Remain-Info">Your location</p>
        <p class="Remain-Info-Import">{sellerLocation}</p>

        <p class="Remain-Info">Collect Date</p>
        <p class="Remain-Info-Import">{collectDate}</p>

        <p class="Remain-Info">Bundle Condition</p>
        <p class="Remain-Info-Import">{bundleCondition}</p>

        <p class="Remain-Info">Sell Price</p>
        <p class="Remain-Info-Import">{sellerPrice} {standardUnit}</p>

        <p class="Remain-Info">Contract Number*</p>
        <pre class='Remain-Info-Import'>
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
      <div class="accept-term">
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