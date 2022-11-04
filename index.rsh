'reach 0.1';

const BundleDisposal = Object({//Immutable attributes under object
  bundleName: Bytes(256), // String storage for the name of the bundle
  boughtDate: Bytes(100), // String storage for the bought day of bundle
  boughtPrice: UInt,
  disposePrice: UInt
});

const BundleCollector = Object({//Immutable attributes under object
  collectorName: Bytes(100),
  collectorLocation: Bytes(256),
  destinationLocation: Bytes(256),
  collectorPrice: UInt,
});

const BundleSeller = Object({//Immutable attributes under object
  sellerName: Bytes(100), // String storage for the name of the bundle
  sellerLocation: Bytes(256), // String storage for the name of the bundle
  collectDate: Bytes(100), // String storage for the name of the bundle
  bundleCondition: Bytes(256), // String storage for the name of the bundle
  sellerPrice: UInt,
});

//const functions = {
//  bundleInfo: Fun([UInt,Bytes(256),Bytes(256),Bytes(256)],Null),
//  informTimeout: Fun([],Null)
//}
export const main = Reach.App(() => {//This is one contract
  const Disposal = Participant('Disposal', {
    registerBundle: Fun([],BundleDisposal),
    showDisposal: Fun([Bytes(256),Bytes(100),UInt,UInt],Null),
    deadline : UInt,
  });
  const Collector = Participant('Collector', {
    collectBundle: Fun([],BundleCollector),
    showCollector: Fun([Bytes(100),Bytes(256),Bytes(256),UInt,Bytes(256)],Null),
    acceptPrice: Fun([UInt], Null),
  });
  const Seller = Participant('Seller', {
    sellBundle: Fun([],BundleSeller),
    showSeller: Fun([Bytes(100),Bytes(256),Bytes(100),Bytes(256),UInt,Bytes(256)],Null),
    acceptPrice: Fun([UInt], Null),
  });
  const Viewer = Participant('Viewer', {
    acceptPrice: Fun([Bytes(256),Bytes(100),Bytes(100),Bytes(256),UInt], Null),
    buyingDone: Fun([Bytes(256),Bytes(100),Bytes(100),Bytes(256),UInt],Null)
  });
  
  init();

  const informTimeout = () =>{
    each ([Disposal,Collector,Seller,Viewer],() => {
      interact.informTimeout();
    })
  }

  Disposal.only(() => {
    const bundleDisposal=declassify(interact.registerBundle())
    const deadline = declassify(interact.deadline);
  });
  Disposal.publish(bundleDisposal,deadline);

  commit();
  each([Disposal],()=>{
    interact.showDisposal(bundleDisposal.bundleName,bundleDisposal.boughtDate,bundleDisposal.boughtPrice,bundleDisposal.disposePrice )
  })
  
  Collector.only(() => {
    interact.acceptPrice(bundleDisposal.disposePrice);
  });
  
  Collector.pay(bundleDisposal.disposePrice);  
  transfer(bundleDisposal.disposePrice).to(Disposal);
  commit();
  Collector.only(()=> {
    const bundleCollector = declassify(interact.collectBundle())
  })
  Collector.publish(bundleCollector)
  commit();
  each([Collector],()=>{
    interact.showCollector(bundleCollector.collectorName,bundleCollector.collectorLocation,bundleCollector.destinationLocation,bundleCollector.collectorPrice,bundleDisposal.bundleName)
  })

  Seller.only(() => {
    interact.acceptPrice(bundleCollector.collectorPrice);
  });
  
  Seller.pay(bundleCollector.collectorPrice);  
  transfer(bundleCollector.collectorPrice).to(Disposal);
  commit();
  Seller.only(()=> {
    const bundleSeller = declassify(interact.sellBundle())
  })
  Seller.publish(bundleSeller)
  commit();
  each([Seller],()=>{
    interact.showSeller(bundleSeller.sellerName,bundleSeller.sellerLocation,bundleSeller.collectDate,bundleSeller.bundleCondition,bundleSeller.sellerPrice,bundleDisposal.bundleName)
  })


  Viewer.only(() => {
    interact.acceptPrice(bundleDisposal.bundleName,bundleCollector.collectorName,bundleSeller.sellerName,bundleSeller.bundleCondition,bundleSeller.sellerPrice);
  });
  Viewer.pay(bundleSeller.sellerPrice);  
  transfer(bundleSeller.sellerPrice).to(Seller);
  commit();
  Viewer.only(() => {
    interact.buyingDone(bundleDisposal.bundleName,bundleCollector.collectorName,bundleSeller.sellerName,bundleSeller.bundleCondition,bundleSeller.sellerPrice);
  });
  exit();
});

