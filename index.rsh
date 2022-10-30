'reach 0.1';

const BundleDisposal = Object({//Immutable attributes under object
  bundleName: Bytes(256), // String storage for the name of the bundle
  boughtDate: Bytes(256), // String storage for the bought day of bundle
  boughtPrice: UInt,
  disposePrice: UInt
});

const BundleCollector = Object({//Immutable attributes under object
  collectorName: UInt,
  collectorLocation: Bytes(256),
  destinationLocation: Bytes(256),
  collectorPrice: UInt,
});

const BundleSeller = Object({//Immutable attributes under object
  sellerName: Bytes(256), // String storage for the name of the bundle
  sellerLocation: Bytes(256), // String storage for the name of the bundle
  collectDate: Bytes(256), // String storage for the name of the bundle
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
    showDisposal: Fun([Bytes(256),Bytes(256),UInt],Null),
    deadline : UInt,
  });
  const Collector = Participant('Collector', {
    collectBundle: Fun([],BundleCollector),
    showCollector: Fun([UInt,Bytes(256),Bytes(256),UInt],Null),
    acceptPrice: Fun([UInt], Null),
  });
  const Seller = Participant('Seller', {
    sellBundle: Fun([],BundleSeller),
    showSeller: Fun([Bytes(256),Bytes(256),Bytes(256),Bytes(256),UInt],Null),
    acceptPrice: Fun([UInt], Null),
  });
  init();

  const informTimeout = () =>{
    each ([Disposal,Collector,Seller],() => {
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
    interact.showDisposal(bundleDisposal.bundleName,bundleDisposal.boughtDate,bundleDisposal.boughtPrice )
  })
  
  Collector.only(() => {
    interact.acceptPrice(bundleDisposal.disposePrice);
  });
  
  // Collector.publish(collectorName, collectorLocation,collectorBidPrice).pay(collectorBidPrice);  //Bidding part
  Collector.pay(bundleDisposal.disposePrice);  
  transfer(bundleDisposal.disposePrice).to(Disposal);
  each([Disposal, Collector], () => {
    // interact.sendBundle(bundle);
  });
  commit();
  Collector.only(()=> {
    const bundleCollector = declassify(interact.collectBundle())
  })
  Collector.publish(bundleCollector)
  commit();
  each([Collector],()=>{
    interact.showCollector(bundleCollector.collectorName,bundleCollector.collectorLocation,bundleCollector.destinationLocation,bundleCollector.collectorPrice)
  })
  // write your program here
  exit();
});

//}
