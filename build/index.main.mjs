// Automatically generated with Reach 0.1.12 (af6530ae)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (af6530ae)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc4 = stdlib.T_Object({
    boughtDate: ctc1,
    boughtPrice: ctc2,
    bundleName: ctc3,
    disposePrice: ctc2
    });
  const ctc5 = stdlib.T_Object({
    collectorLocation: ctc3,
    collectorName: ctc1,
    collectorPrice: ctc2,
    destinationLocation: ctc3
    });
  const ctc6 = stdlib.T_Object({
    bundleCondition: ctc3,
    collectDate: ctc1,
    sellerLocation: ctc3,
    sellerName: ctc1,
    sellerPrice: ctc2
    });
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc4],
      2: [ctc0, ctc0],
      3: [ctc0, ctc5],
      4: [ctc0],
      5: [ctc0, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Collector(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Collector expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Collector expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    boughtDate: ctc0,
    boughtPrice: ctc1,
    bundleName: ctc2,
    disposePrice: ctc1
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Object({
    collectorLocation: ctc2,
    collectorName: ctc0,
    collectorPrice: ctc1,
    destinationLocation: ctc2
    });
  const ctc6 = stdlib.T_Object({
    bundleCondition: ctc2,
    collectDate: ctc0,
    sellerLocation: ctc2,
    sellerName: ctc0,
    sellerPrice: ctc1
    });
  const ctc7 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc3, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v169, v170], secs: v172, time: v171, didSend: v33, from: v168 } = txn1;
  ;
  const v181 = v169.disposePrice;
  stdlib.protect(ctc4, await interact.acceptPrice(v181), {
    at: './index.rsh:70:25:application',
    fs: ['at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:21:function exp)'],
    msg: 'acceptPrice',
    who: 'Collector'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v168, v169],
    evt_cnt: 0,
    funcNum: 1,
    lct: v171,
    onlyIf: true,
    out_tys: [],
    pay: [v181, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v185, time: v184, didSend: v52, from: v183 } = txn2;
      
      const v186 = v169.disposePrice;
      sim_r.txns.push({
        amt: v186,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v168,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v185, time: v184, didSend: v52, from: v183 } = txn2;
  const v186 = v169.disposePrice;
  ;
  ;
  const v196 = stdlib.protect(ctc5, await interact.collectBundle(), {
    at: './index.rsh:77:62:application',
    fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:20:function exp)'],
    msg: 'collectBundle',
    who: 'Collector'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v168, v183, v196],
    evt_cnt: 1,
    funcNum: 2,
    lct: v184,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v202], secs: v204, time: v203, didSend: v71, from: v201 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v71, from: v201 } = txn3;
  ;
  const v205 = stdlib.addressEq(v183, v201);
  stdlib.assert(v205, {
    at: './index.rsh:79:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Collector'
    });
  const v208 = v202.collectorName;
  const v209 = v202.collectorLocation;
  const v210 = v202.destinationLocation;
  const v211 = v202.collectorPrice;
  const v212 = v169.bundleName;
  stdlib.protect(ctc4, await interact.showCollector(v208, v209, v210, v211, v212), {
    at: './index.rsh:82:27:application',
    fs: ['at ./index.rsh:81:7:application call to [unknown function] (defined at: ./index.rsh:81:22:function exp)'],
    msg: 'showCollector',
    who: 'Collector'
    });
  
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v219, time: v218, didSend: v91, from: v217 } = txn4;
  const v220 = v202.collectorPrice;
  ;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v237], secs: v239, time: v238, didSend: v111, from: v236 } = txn5;
  ;
  const v240 = stdlib.addressEq(v217, v236);
  stdlib.assert(v240, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Collector'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v259, time: v258, didSend: v136, from: v257 } = txn6;
  const v260 = v237.sellerPrice;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Disposal(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Disposal expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Disposal expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    boughtDate: ctc1,
    boughtPrice: ctc0,
    bundleName: ctc2,
    disposePrice: ctc0
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Object({
    collectorLocation: ctc2,
    collectorName: ctc1,
    collectorPrice: ctc0,
    destinationLocation: ctc2
    });
  const ctc6 = stdlib.T_Object({
    bundleCondition: ctc2,
    collectDate: ctc1,
    sellerLocation: ctc2,
    sellerName: ctc1,
    sellerPrice: ctc0
    });
  
  
  const v160 = stdlib.protect(ctc0, interact.deadline, 'for Disposal\'s interact field deadline');
  
  const v163 = stdlib.protect(ctc3, await interact.registerBundle(), {
    at: './index.rsh:59:60:application',
    fs: ['at ./index.rsh:58:16:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
    msg: 'registerBundle',
    who: 'Disposal'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v163, v160],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:62:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v169, v170], secs: v172, time: v171, didSend: v33, from: v168 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v169, v170], secs: v172, time: v171, didSend: v33, from: v168 } = txn1;
  ;
  const v175 = v169.bundleName;
  const v176 = v169.boughtDate;
  const v177 = v169.boughtPrice;
  const v178 = v169.disposePrice;
  stdlib.protect(ctc4, await interact.showDisposal(v175, v176, v177, v178), {
    at: './index.rsh:66:26:application',
    fs: ['at ./index.rsh:65:7:application call to [unknown function] (defined at: ./index.rsh:65:21:function exp)'],
    msg: 'showDisposal',
    who: 'Disposal'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v185, time: v184, didSend: v52, from: v183 } = txn2;
  const v186 = v169.disposePrice;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v71, from: v201 } = txn3;
  ;
  const v205 = stdlib.addressEq(v183, v201);
  stdlib.assert(v205, {
    at: './index.rsh:79:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Disposal'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v219, time: v218, didSend: v91, from: v217 } = txn4;
  const v220 = v202.collectorPrice;
  ;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v237], secs: v239, time: v238, didSend: v111, from: v236 } = txn5;
  ;
  const v240 = stdlib.addressEq(v217, v236);
  stdlib.assert(v240, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Disposal'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v259, time: v258, didSend: v136, from: v257 } = txn6;
  const v260 = v237.sellerPrice;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    boughtDate: ctc0,
    boughtPrice: ctc1,
    bundleName: ctc2,
    disposePrice: ctc1
    });
  const ctc4 = stdlib.T_Object({
    collectorLocation: ctc2,
    collectorName: ctc0,
    collectorPrice: ctc1,
    destinationLocation: ctc2
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Object({
    bundleCondition: ctc2,
    collectDate: ctc0,
    sellerLocation: ctc2,
    sellerName: ctc0,
    sellerPrice: ctc1
    });
  const ctc7 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc3, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v169, v170], secs: v172, time: v171, didSend: v33, from: v168 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v185, time: v184, didSend: v52, from: v183 } = txn2;
  const v186 = v169.disposePrice;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v71, from: v201 } = txn3;
  ;
  const v205 = stdlib.addressEq(v183, v201);
  stdlib.assert(v205, {
    at: './index.rsh:79:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v215 = v202.collectorPrice;
  stdlib.protect(ctc5, await interact.acceptPrice(v215), {
    at: './index.rsh:86:25:application',
    fs: ['at ./index.rsh:85:14:application call to [unknown function] (defined at: ./index.rsh:85:18:function exp)'],
    msg: 'acceptPrice',
    who: 'Seller'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v168, v202],
    evt_cnt: 0,
    funcNum: 3,
    lct: v203,
    onlyIf: true,
    out_tys: [],
    pay: [v215, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v219, time: v218, didSend: v91, from: v217 } = txn4;
      
      const v220 = v202.collectorPrice;
      sim_r.txns.push({
        amt: v220,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v168,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v219, time: v218, didSend: v91, from: v217 } = txn4;
  const v220 = v202.collectorPrice;
  ;
  ;
  const v230 = stdlib.protect(ctc6, await interact.sellBundle(), {
    at: './index.rsh:93:56:application',
    fs: ['at ./index.rsh:92:14:application call to [unknown function] (defined at: ./index.rsh:92:17:function exp)'],
    msg: 'sellBundle',
    who: 'Seller'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v217, v230],
    evt_cnt: 1,
    funcNum: 4,
    lct: v218,
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:95:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v237], secs: v239, time: v238, didSend: v111, from: v236 } = txn5;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v237], secs: v239, time: v238, didSend: v111, from: v236 } = txn5;
  ;
  const v240 = stdlib.addressEq(v217, v236);
  stdlib.assert(v240, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v243 = v237.sellerName;
  const v244 = v237.sellerLocation;
  const v245 = v237.collectDate;
  const v246 = v237.bundleCondition;
  const v247 = v237.sellerPrice;
  const v248 = v169.bundleName;
  stdlib.protect(ctc5, await interact.showSeller(v243, v244, v245, v246, v247, v248), {
    at: './index.rsh:98:24:application',
    fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:19:function exp)'],
    msg: 'showSeller',
    who: 'Seller'
    });
  
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v259, time: v258, didSend: v136, from: v257 } = txn6;
  const v260 = v237.sellerPrice;
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Viewer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Viewer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Viewer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Object({
    boughtDate: ctc0,
    boughtPrice: ctc1,
    bundleName: ctc2,
    disposePrice: ctc1
    });
  const ctc4 = stdlib.T_Object({
    collectorLocation: ctc2,
    collectorName: ctc0,
    collectorPrice: ctc1,
    destinationLocation: ctc2
    });
  const ctc5 = stdlib.T_Object({
    bundleCondition: ctc2,
    collectDate: ctc0,
    sellerLocation: ctc2,
    sellerName: ctc0,
    sellerPrice: ctc1
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc3, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v169, v170], secs: v172, time: v171, didSend: v33, from: v168 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v185, time: v184, didSend: v52, from: v183 } = txn2;
  const v186 = v169.disposePrice;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v202], secs: v204, time: v203, didSend: v71, from: v201 } = txn3;
  ;
  const v205 = stdlib.addressEq(v183, v201);
  stdlib.assert(v205, {
    at: './index.rsh:79:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Viewer'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v219, time: v218, didSend: v91, from: v217 } = txn4;
  const v220 = v202.collectorPrice;
  ;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v237], secs: v239, time: v238, didSend: v111, from: v236 } = txn5;
  ;
  const v240 = stdlib.addressEq(v217, v236);
  stdlib.assert(v240, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Viewer'
    });
  const v251 = v169.bundleName;
  const v252 = v202.collectorName;
  const v253 = v237.sellerName;
  const v254 = v237.bundleCondition;
  const v255 = v237.sellerPrice;
  stdlib.protect(ctc6, await interact.acceptPrice(v251, v252, v253, v254, v255), {
    at: './index.rsh:103:25:application',
    fs: ['at ./index.rsh:102:14:application call to [unknown function] (defined at: ./index.rsh:102:18:function exp)'],
    msg: 'acceptPrice',
    who: 'Viewer'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v217, v237],
    evt_cnt: 0,
    funcNum: 5,
    lct: v238,
    onlyIf: true,
    out_tys: [],
    pay: [v255, []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v259, time: v258, didSend: v136, from: v257 } = txn6;
      
      const v260 = v237.sellerPrice;
      sim_r.txns.push({
        amt: v260,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v217,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v259, time: v258, didSend: v136, from: v257 } = txn6;
  const v260 = v237.sellerPrice;
  ;
  ;
  stdlib.protect(ctc6, await interact.buyingDone(v251, v252, v253, v254, v260), {
    at: './index.rsh:109:24:application',
    fs: ['at ./index.rsh:108:14:application call to [unknown function] (defined at: ./index.rsh:108:18:function exp)'],
    msg: 'buyingDone',
    who: 'Viewer'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAMAAEFfwMEIP0CAvQC/AP7BCYHAQABAQECAQMBBAEFACI1ADEYQQMGJwZkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAE8SSEFDEAAzEkkDEAAWCQSRCQ0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUCcEZFAnBWRQNQOABMyZklywNAMhBoHQBViByAVbNf80/4gCpbEisgE0/7III7IQNANXACCyB7NCAiFIIQU0ARJENARJIhJMNAISEUQoZEk1AzX/STUFNf6ABENrknE0/lCwNP8xABJENP80/lAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwEhByVYZycESwEhCiVYZycFSwEhC4F1WGdIJDUBMgY1AkIBzkghBDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQJwRkUCcFZFA1A4AEp2XEtLA0AyEGgewEWIHkAls1/zT/iAHgsSKyATT/sggjshA0A1cAILIHszEAKEsBVwAgZ0ghBTUBMgY1AkIBZUkjDEAA4UkhCAxAAHVIIQg0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABB1kpto0/lCwNANXICAxABJENP80/lAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwEhByVYZycESwEhCiVYZycFSwEhC4ERWGdIIQQ1ATIGNQJCAONIIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDVwAgNf+ABJqLkXSwNAMhBiEJWIHsAls1/jT+iAD5sSKyATT+sggjshA0/7IHszT/MQBQKEsBVwBAZ0ghCDUBMgY1AkIAfkiBoI0GiADJIjQBEkQ0BEkiEkw0AhIRREk1BUkiIQlYNf8hCVs1/oAEsEH8TzT/UDT+FlCwMQA0/1AoSwFXAH9nKUsBV39/ZypLAVf+f2crSwEhB4EXWGdIIzUBMgY1AkIAGzEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwY0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBBzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+tNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 6,
  stateSize: 752,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_boughtDate",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_boughtPrice",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_bundleName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_disposePrice",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v169",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_boughtDate",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_boughtPrice",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_bundleName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_disposePrice",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v169",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_collectorLocation",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_collectorName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_collectorPrice",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_destinationLocation",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v202",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_bundleCondition",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_collectDate",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_sellerLocation",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_sellerName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_sellerPrice",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v237",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_collectorLocation",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_collectorName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_collectorPrice",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_destinationLocation",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v202",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_bundleCondition",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_collectDate",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem6",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem7",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_sellerLocation",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes4",
                        "name": "elem3",
                        "type": "bytes4"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "_sellerName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_sellerPrice",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v237",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001bde38038062001bde83398101604081905262000026916200035c565b60008055436003556040517f4453b2c6f4290a916904d3b0fb3d35e560f324ecb08dc0a949ad490cebf0db7c9062000062903390849062000458565b60405180910390a16200007834156007620000da565b6200008262000104565b338152602080830151518183015260016000819055439055604051620000ab9183910162000534565b60405160208183030381529060405260029080519060200190620000d1929190620001af565b50505062000638565b81620001005760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806040016040528060006001600160a01b03168152602001620001aa60408051610100810190915260006080820181815260a0830182905260c0830182905260e083019190915281908152600060208083018290526040805161010081018252838152918201839052818101839052606082018390526080820183905260a0820183905260c0820183905260e08201929092529101908152602001600081525090565b905290565b828054620001bd90620005fb565b90600052602060002090601f016020900481019282620001e157600085556200022c565b82601f10620001fc57805160ff19168380011785556200022c565b828001600101855582156200022c579182015b828111156200022c5782518255916020019190600101906200020f565b506200023a9291506200023e565b5090565b5b808211156200023a57600081556001016200023f565b604080519081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b6000610100808385031215620002d257600080fd5b604051908101906001600160401b03821181831017156200030357634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60008183036102008112156200037157600080fd5b6200037b62000255565b83518152601f19820191506101e0808312156200039757600080fd5b620003a162000255565b6101c080851215620003b257600080fd5b620003bc6200028c565b6080861215620003cb57600080fd5b620003d56200028c565b9550602088015186526040880151602087015260608801516040870152608088015163ffffffff60e01b811681146200040d57600080fd5b606087015285815260a088015160208201526200042e8960c08a01620002bd565b60408201529087015160608201528152940151602080860191909152810193909352509092915050565b60006102208201905060018060a01b038416825282516020830152602083015162000521604084018251805180518352602081015160208401526040810151604084015263ffffffff60e01b606082015116606084015250602081015160808301526040810151805160a0840152602081015160c0840152604081015160e08401526060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e08101516101808401525060608101516101a08301525050565b6020810151610200840152509392505050565b81516001600160a01b031681526020808301516101e0830191620005f490840182805180518352602081015160208401526040810151604084015263ffffffff60e01b606082015116606084015250602081015160808301526040810151805160a0840152602081015160c0840152604081015160e08401526060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e08101516101808401525060608101516101a08301525050565b5092915050565b600181811c908216806200061057607f821691505b602082108114156200063257634e487b7160e01b600052602260045260246000fd5b50919050565b61159680620006486000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e157806398f21c2c146100f4578063ab53f2c614610107578063d0ea126b1461012a57005b80631e93b0f1146100825780632c10a159146100a657806373b4522c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610bed565b61013d565b6100806100c7366004610bed565b610314565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610bed565b61049d565b610080610102366004610c05565b610616565b34801561011357600080fd5b5061011c61078a565b60405161009d929190610c18565b610080610138366004610c75565b610827565b61014d600160005414600961099e565b6101678135158061016057506001548235145b600a61099e565b60008080556002805461017990610c88565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610c88565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610e74565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610ef9565b60405180910390a161025a8160200151606001513414600861099e565b80516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561029b573d6000803e3d6000fd5b50604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260026000554360015560408051918201939093529051909216908201526060015b6040516020818303038152906040526002908051906020019061030e9291906109c3565b50505050565b610324600360005414601061099e565b61033e8135158061033757506001548235145b601161099e565b60008080556002805461035090610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461037c90610c88565b80156103c95780601f1061039e576101008083540402835291602001916103c9565b820191906000526020600020905b8154815290600101906020018083116103ac57829003601f168201915b50505050508060200190518101906103e19190610f36565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610414929190610ef9565b60405180910390a16104318160200151604001513414600f61099e565b80600001516001600160a01b03166108fc8260200151604001519081150290604051600060405180830381858888f19350505050158015610476573d6000803e3d6000fd5b506040805160208082018352338083526004600055436001558351918201529091016102ea565b6104ad600560005414601761099e565b6104c7813515806104c057506001548235145b601861099e565b6000808055600280546104d990610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461050590610c88565b80156105525780601f1061052757610100808354040283529160200191610552565b820191906000526020600020905b81548152906001019060200180831161053557829003601f168201915b505050505080602001905181019061056a9190610fc9565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161059d929190610ef9565b60405180910390a16105ba8160200151608001513414601661099e565b80516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105fb573d6000803e3d6000fd5b506000808055600181905561061290600290610a47565b5050565b610626600460005414601461099e565b6106408135158061063957506001548235145b601561099e565b60008080556002805461065290610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461067e90610c88565b80156106cb5780601f106106a0576101008083540402835291602001916106cb565b820191906000526020600020905b8154815290600101906020018083116106ae57829003601f168201915b50505050508060200190518101906106e3919061106b565b90507fe6566ad1d4f3d660311f78e9a0f523f33b417d8ce284d1e29e0852668f7508c8338360405161071692919061114b565b60405180910390a161072a3415601261099e565b8051610742906001600160a01b03163314601361099e565b61074a610a84565b81516001600160a01b0316815261076936849003840160208501611270565b6020808301919091526005600055436001556040516102ea9183910161135e565b60006060600054600280805461079f90610c88565b80601f01602080910402602001604051908101604052809291908181526020018280546107cb90610c88565b80156108185780601f106107ed57610100808354040283529160200191610818565b820191906000526020600020905b8154815290600101906020018083116107fb57829003601f168201915b50505050509050915091509091565b610837600260005414600d61099e565b6108518135158061084a57506001548235145b600e61099e565b60008080556002805461086390610c88565b80601f016020809104026020016040519081016040528092919081815260200182805461088f90610c88565b80156108dc5780601f106108b1576101008083540402835291602001916108dc565b820191906000526020600020905b8154815290600101906020018083116108bf57829003601f168201915b50505050508060200190518101906108f491906113d4565b90507fdfbe07d9cede69f6c287ad9f6aae49e21b47398ecd9692d383c8d3e5dc4ea379338360405161092792919061143d565b60405180910390a161093b3415600b61099e565b6020810151610956906001600160a01b03163314600c61099e565b61095e610aac565b81516001600160a01b0316815261097d368490038401602085016114a1565b6020808301919091526003600055436001556040516102ea91839101611500565b816106125760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546109cf90610c88565b90600052602060002090601f0160209004810192826109f15760008555610a37565b82601f10610a0a57805160ff1916838001178555610a37565b82800160010185558215610a37579182015b82811115610a37578251825591602001919060010190610a1c565b50610a43929150610acf565b5090565b508054610a5390610c88565b6000825580601f10610a63575050565b601f016020900490600052602060002090810190610a819190610acf565b50565b604051806040016040528060006001600160a01b03168152602001610aa7610ae4565b905290565b604051806040016040528060006001600160a01b03168152602001610aa7610b5f565b5b80821115610a435760008155600101610ad0565b6040518060a00160405280610af7610ba9565b8152604080516080810182526000808252602082810182905292820181905260608201529101908152602001610b2b610ba9565b8152604080516080810182526000808252602082810182905292820181905260608201529101908152602001600081525090565b6040518060800160405280610b72610ba9565b815260408051608081018252600080825260208281018290529282018190526060820152910190815260200160008152602001610aa75b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b600060408284031215610bff57600080fd5b50919050565b60006103408284031215610bff57600080fd5b82815260006020604081840152835180604085015260005b81811015610c4c57858101830151858201606001528201610c30565b81811115610c5e576000606083870101525b50601f01601f191692909201606001949350505050565b60006102c08284031215610bff57600080fd5b600181811c90821680610c9c57607f821691505b60208210811415610bff57634e487b7160e01b600052602260045260246000fd5b6040516080810167ffffffffffffffff81118282101715610cee57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610100810167ffffffffffffffff81118282101715610cee57634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610cee57634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610cee57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114610d9f57600080fd5b919050565b6001600160e01b031981168114610a8157600080fd5b600060808284031215610dcc57600080fd5b610dd4610cbd565b90508151815260208201516020820152604082015160408201526060820151610dfc81610da4565b606082015292915050565b60006101008284031215610e1a57600080fd5b610e22610cf4565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015292915050565b60008183036101e0811215610e8857600080fd5b610e90610d26565b610e9984610d88565b81526101c080601f1984011215610eaf57600080fd5b610eb7610cbd565b9250610ec68660208701610dba565b835260a08501516020840152610edf8660c08701610e07565b604084015293909301516060820152602083015250919050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610f2757600080fd5b80604085015250509392505050565b60008183036102c0811215610f4a57600080fd5b610f52610d26565b610f5b84610d88565b81526102a0601f1983011215610f7057600080fd5b610f78610cbd565b9150610f878560208601610e07565b8252610f97856101208601610dba565b60208301526101a08401516040830152610fb5856101c08601610e07565b606083015260208101919091529392505050565b6000818303610340811215610fdd57600080fd5b610fe5610d26565b610fee84610d88565b815261032080601f198401121561100457600080fd5b61100c610d57565b925061101b8660208701610e07565b835261102b866101208701610dba565b602084015261103e866101a08701610e07565b6040840152611051866102a08701610dba565b606084015293909301516080820152602083015250919050565b60006020828403121561107d57600080fd5b6040516020810181811067ffffffffffffffff821117156110ae57634e487b7160e01b600052604160045260246000fd5b6040526110ba83610d88565b81529392505050565b803582526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b803582526020810135602083015260408101356040830152606081013561113781610da4565b63ffffffff60e01b81166060840152505050565b6001600160a01b0383168152813560208083019190915261036082019061117890604084019085016110c3565b61118a61014083016101208501611111565b61119c6101c083016101a085016110c3565b6111ae6102c083016102a08501611111565b6103208301356103408301529392505050565b600061010082840312156111d457600080fd5b6111dc610cf4565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015292915050565b60006080828403121561124057600080fd5b611248610cbd565b90508135815260208201356020820152604082013560408201526060820135610dfc81610da4565b6000610320828403121561128357600080fd5b61128b610d57565b61129584846111c1565b81526112a584610100850161122e565b60208201526112b88461018085016111c1565b60408201526112cb84610280850161122e565b60608201526103009290920135608083015250919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b8051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b81516001600160a01b03168152602080830151805161034084019261138691908501906112e3565b6020810151611399610120850182611331565b5060408101516113ad6101a08501826112e3565b5060608101516113c16102a0850182611331565b5060808101516103208401525092915050565b6000604082840312156113e657600080fd5b6040516040810181811067ffffffffffffffff8211171561141757634e487b7160e01b600052604160045260246000fd5b60405261142383610d88565b815261143160208401610d88565b60208201529392505050565b6001600160a01b038316815281356020808301919091526102e082019061146a90604084019085016110c3565b61147c61014083016101208501611111565b6101c06101a0840135818401526114996101e084018286016110c3565b509392505050565b60006102a082840312156114b457600080fd5b6114bc610cbd565b6114c684846111c1565b81526114d684610100850161122e565b602082015261018083013560408201526114f4846101a085016111c1565b60608201529392505050565b81516001600160a01b0316815260208083015180516102c084019261152891908501906112e3565b602081015161153b610120850182611331565b5060408101516101a0840152606001516115596101c08401826112e3565b509291505056fea26469706673582212206358007fc28ab639ea645b4e49851d7057eb152595ea71735619a841b6b595d264736f6c634300080c0033`,
  BytecodeLen: 7134,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:64:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:75:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:91:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:96:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:107:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Collector": Collector,
  "Disposal": Disposal,
  "Seller": Seller,
  "Viewer": Viewer
  };
export const _APIs = {
  };
