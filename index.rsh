'reach 0.1';

const Bundle = Object({//Immutable attributes under object
  id: UInt, //Identifier for Bundle
  // startBidPrice: UInt,
  // currentBidPrice: UInt,
  // bundleOwner:Bytes(256),
  bundleName: Bytes(256), // String storage for the name of the bundle
  // bundleLocation: Bytes(256),
  // boughtDate: Bytes(256), // String storage for the bought day of bundle
  // boughtPrice: UInt, // Float storage for the roughly boughtPrice 
  // soldDate: Bytes (256),
  // soldPrice: UInt,
});

const functions = {
  // sendBundle : Fun([Bundle],Null),
  registerBundle: Fun([UInt,Bytes(256),Bytes(256),Bytes(256)],Null),
  // registerBundle: Fun([UInt,UInt,Bytes(256),Bytes(256),Bytes(256)],Bundle),
  // getBundle:Fun([UInt,Bytes(256)],Bundle),
  informTimeout: Fun([],Null)
}
export const main = Reach.App(() => {//This is one contract

  const Disposal = Participant('Disposal', {
    ...functions,
    bundleID:UInt,
    bundleName:Bytes(256),
    disposalName: Bytes(256),
    disposalLocation:Bytes(256),
    // disposalStartBidPrice : UInt, //Bidding part
    deadline : UInt,
    price:UInt,
  });
  const Collector = Participant('Collector', {
    
    ...functions,
    acceptPrice: Fun([UInt], Null),
    collectorName: Bytes(256),
    collectorLocation:Bytes(256),
    // collectorBidPrice : UInt, // Bidding part
    // requestBundle : Fun([UInt], Bundle),
    bundle : Bundle
  });

  init();

  const informTimeout = () =>{
    each ([Disposal,Collector],() => {
      interact.informTimeout();
    })
  }

  Disposal.only(() => {
    const bundleID=declassify(interact.bundleID);
    const disposalName = declassify(interact.disposalName);
    const disposalLocation = declassify(interact.disposalLocation);
    const bundleName=declassify(interact.bundleName);
    const price=declassify(interact.price);
    // const disposalStartBidPrice = declassify(interact.disposalStartBidPrice);
    const deadline = declassify(interact.deadline);
    const bundle= declassify(interact.registerBundle(bundleID,disposalName,disposalLocation,bundleName));
  });
  // Disposal.publish(disposalName,disposalStartBidPrice,disposalLocation,deadline); //Bidding part
  Disposal.publish(bundle,price,deadline);
  commit();
  
  
  Collector.only(() => {
    interact.acceptPrice(price);
    const collectorName = declassify(interact.collectorName);
    const collectorLocation = declassify(interact.collectorLocation);
    // const collectorBidPrice = declassify(interact.collectorBidPrice);
  });
  
  // Collector.publish(collectorName, collectorLocation,collectorBidPrice).pay(collectorBidPrice);  //Bidding part
  Collector.publish().pay(price);  
  // transfer(collectorBidPrice).to(Disposal);
  transfer(price).to(Disposal);
  each([Disposal, Collector], () => {
    // interact.sendBundle(bundle);
  });
  commit();
  
  // write your program here
  exit();
});

//}
