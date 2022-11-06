import React from 'react';
import wallpaper from './wallpaper1.jpg';
const exports = {};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Disposal">
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
        <div className="input-column">
          <div className="input-form">
            <p className="input-title">Bundle Disposal Registration</p>
            <p className="input-description">Let your pre-loved be loved again!</p>
            <div className='input'>     
              <input
                type='text'
                placeholder= "Bundle Name"
                onChange={(e) => this.setState({bundleName: e.currentTarget.value})}
                />
            </div>
            <div className='input'>
              <input
                type='date'
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
        </div>
        <div className="input-column">
          <img className='wallpaper' src={wallpaper}  alt="wallpaper1"/>
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
      <div className="attach">
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
        <div id="NameArea">
          <p className="bundleName">Your </p>
          <p className="bundleName-variable">{bundleName}</p>
          <p className="bundleName"> have been registered</p>
          <p className="reminder">*copy the contract number and pass to collector to prove your bundle valid</p>
        </div>
        <div id="RemainArea">
          <p className="Remain-Info">Bundle Bought Date</p>
          <p className="Remain-Info-Import">{boughtDate}</p>

          <p className="Remain-Info">Bundle Bought Price</p>
          <p className="Remain-Info-Import">{boughtPrice} {standardUnit}</p>

          <p className="Remain-Info">Bundle Dispose Price</p>
          <p className="Remain-Info-Import">{disposePrice} {standardUnit}</p>

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

export default exports;