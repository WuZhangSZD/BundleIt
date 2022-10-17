'reach 0.1';

const Player = {
  ...hasRandom,
  get: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Disposal  = Participant('Disposal', {
    ...Player,
    BundleName: Bytes(256), // String storage for the name of the bundle
    BoughtDay: Bytes(256), // String storage for the bought day ofbundle
    BoughtPrice: FixedPoint, // Float storage for the roughly boughtPrice  
    BidPrice: UInt // UINt for the bid price by disposal for the bundle
  });
  const Collector = Participant('Collector', {
    ...Player,
    acceptWager: Fun([UInt], Null),
    CollectorName: Bytes(256), //String storage for the name of collector (maybe company name)
    CollectorLocation: Bytes(256), //String storage for the current location the collect ocfurred
    DestinationLocation: Bytes(256), //String storagte for the destionation bundle will arrive
    BidPrice: UInt // UINt for the bid price by collector
  });
  const Seller  = Participant('Seller',{
    ...Player,
    acceptWager: Fun([UInt], Null),
    SellerName: Bytes(256), //String storage for the name of seller
    SellerLocation: Bytes(256), //String storage for seller location
    DateCollected: Bytes(256), //String storage for the date
    BundleCondition: Bytes(256), //String storage for bundle condition description
    BidPrice: UInt // UINt for the bid price by seller
  })
  init();

  // const informTimeout = () => {
  //   each([Alice, Bob], () => {
  //     interact.informTimeout();
  //   });
  // };
  Disposal.only(()=>{
    const BuddleName = declassify(interact.BundleName);
    const BoughtDay = declassify(interact.BoughtDay);
    const BoughtPrice = declassify(interact.BoughtPrice);
    const BidPrice = declassify(interact.Bidprice);
  })
  Disposal.publish(BunddleName, BoughtDay, BoughtPrice, BidPrice);
  commit();
  Collector.only(()=>{
    interact.acceptBidPrice(BidPrice);
  })
  Collector.pay(BidPrice)
  transfer(BidPrice).to(Diposal);
  commit();
  Collector.only(()=>{
    const CollectorName = declassify(interact.CollectorName);
    const CollectorLocation = declassify(interact.CollectorName);
    const DestinationLocation = declassify(interact.DestinationLocation);
    const BidPrice = declassify(interact.BidPrice);
  })
  Collector.publish(CollectorName, CollectorLocation, DestinationLocation, BidPrice);
  commit();
  Seller.only(()=>{
    interact.acceptBidPrice(BidPrice);
  })
  Seller.pay(BidPrice);
  transfer(BidPrice).to(Collector);
  commit();
  Seller.only(()=>{
    const SellerName = declassify(interact.SellerName);
    const SellerLocation = declassify(interact.SellerLocation);
    const DateCollected = declassify(interact.DateCollected);
    const BidPrice = declassify(interact.BidPrice);
  })
  Seller.publish(SellerName, SellerLocation, DateCollected, BidPrice);
  commit();

  each([Disposal, Collector, Seller], () => {
    interact.seeOutcome(outcome);
  });
});