import React from 'react';
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';

import AppViews from './views/AppViews';
import DisposalViews from './views/DisposalViews';
import CollectorViews from './views/CollectorViews';
import SellerViews from './views/SellerViews';
import ViewerViews from './views/ViewerView';
import {renderDOM, renderView} from './views/render';
import './css/index.css';
import './css/input.css';
import './css/attach.css';
import './css/result.css';
import './css/viewer.css';
import './css/role.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect}));

//This is variable defining session
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
    constructor(props) {
      super(props);
      //set default display to simple connecting account state
    this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
      this.setState({view: 'DisposalOrCollectorOrSeller'});
    }
    selectDisposal() { this.setState({view: 'Wrapper', ContentView: Disposal}); }
    selectCollector() { this.setState({view: 'Wrapper', ContentView: Collector}); }
    selectSeller() { this.setState({view: 'Wrapper', ContentView: Seller}); }
    selectViewer() { this.setState({view: 'Wrapper', ContentView: Viewer}); }
    render() { return renderView(this, AppViews); }
}
  
class Disposal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'StartDispose'};
  }
  async dispose() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Disposing', ctc});
    backend.Disposal(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'Disposing', ctcInfoStr});
  }
  setBundle(bundle) { this.state.resolveBundleDisposal(bundle); }
  async registerBundle() { //Fun([UInt,Bytes(256),Bytes(256),Bytes(256)],Null)
    const bundleInfo = await new Promise(resolveBundleDisposal => {
      this.setState({view: 'SetBundleInfo', playable:true, resolveBundleDisposal});
    });
    return bundleInfo;
  }
  showDisposal(bundleName,boughtDate,boughtPrice,disposePrice) {
    this.setState({view: 'DisposeDone', bundleName: bundleName.replace(/\0/g, ''),boughtDate:boughtDate.replace(/\0/g, ''),boughtPrice:JSON.parse(boughtPrice),disposePrice:reach.formatCurrency(JSON.parse(disposePrice))});
  }
  render() { return renderView(this, DisposalViews); }
}
class Collector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  collect(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching',ctcInfoStr});
    backend.Collector(ctc, this);
  }
  
  async acceptPrice(priceAtomic) { // Fun([UInt], Null)
    const priceDispose= reach.formatCurrency(priceAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', priceDispose, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'Waiting'});
  }
  setBundle(bundle) { this.state.resolveBundleCollector(bundle); }
  async collectBundle() { //Fun([UInt,Bytes(256),Bytes(256),Bytes(256)],Null)
    const bundleInfo = await new Promise(resolveBundleCollector => {
      this.setState({view: 'CollectBundleInfo', playable:true, resolveBundleCollector});
    });
    return bundleInfo;
  }
  showCollector(collectorName,collectorLocation,destinationLocation,collectorPrice,bundleName) {
    this.setState({view: 'CollectDone', collectorName: collectorName.replace(/\0/g, ''),collectorLocation:collectorLocation.replace(/\0/g, ''),destinationLocation:destinationLocation.replace(/\0/g, ''),collectorPrice:reach.formatCurrency(JSON.parse(collectorPrice)),bundleName: bundleName.replace(/\0/g, '')});
  }
  render() { return renderView(this, CollectorViews); }
}

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  sell(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching',ctcInfoStr});
    backend.Seller(ctc, this);
  }
  
  async acceptPrice(priceAtomic) { // Fun([UInt], Null)
    const priceCollect= reach.formatCurrency(priceAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', priceCollect, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'Waiting'});
  }
  setBundle(bundle) { this.state.resolveBundleSeller(bundle); }
  async sellBundle() { //Fun([UInt,Bytes(256),Bytes(256),Bytes(256)],Null)
    const bundleInfo = await new Promise(resolveBundleSeller => {
      this.setState({view: 'SellBundleInfo', playable:true, resolveBundleSeller});
    });
    return bundleInfo;
  }
  showSeller(sellerName,sellerLocation,collectDate,bundleCondition,sellerPrice,bundleName) {
    this.setState({view: 'SellDone', sellerName: sellerName.replace(/\0/g, ''),sellerLocation:sellerLocation.replace(/\0/g, ''),collectDate:collectDate.replace(/\0/g, ''),bundleCondition:bundleCondition.replace(/\0/g, ''),sellerPrice:reach.formatCurrency(JSON.parse(sellerPrice)),bundleName: bundleName.replace(/\0/g, '')});
  }
  render() { return renderView(this, SellerViews); }
}

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  view(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching',ctcInfoStr});
    backend.Viewer(ctc, this);
  }
  
  async acceptPrice(bundleName,collectorName,sellerName,bundleCondition,priceAtomic) { // Fun([UInt], Null)
    const priceSeller= reach.formatCurrency(priceAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'ViewDone', bundleName: bundleName.replace(/\0/g, ''),collectorName:collectorName.replace(/\0/g, ''),sellerName:sellerName.replace(/\0/g, ''),bundleCondition:bundleCondition.replace(/\0/g, ''),sellerPrice:priceSeller, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'Waiting'});
  }
  async buyingDone(bundleName,collectorName,sellerName,bundleCondition,priceAtomic) { // Fun([UInt], Null)
    const priceSeller= reach.formatCurrency(priceAtomic, 4);
    this.setState({view: 'BuyingDone', bundleName: bundleName.replace(/\0/g, ''),collectorName:collectorName.replace(/\0/g, ''),sellerName:sellerName.replace(/\0/g, ''),bundleCondition:bundleCondition.replace(/\0/g, ''),sellerPrice:priceSeller});
  }
  render() { return renderView(this, ViewerViews); }
}

renderDOM(<App />);