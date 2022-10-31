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
      4: [ctc0, ctc0],
      5: [ctc0, ctc0, ctc6]
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
  const {data: [v160, v161], secs: v163, time: v162, didSend: v33, from: v159 } = txn1;
  ;
  const v172 = v160.disposePrice;
  stdlib.protect(ctc4, await interact.acceptPrice(v172), {
    at: './index.rsh:70:25:application',
    fs: ['at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:21:function exp)'],
    msg: 'acceptPrice',
    who: 'Collector'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v159, v160],
    evt_cnt: 0,
    funcNum: 1,
    lct: v162,
    onlyIf: true,
    out_tys: [],
    pay: [v172, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v176, time: v175, didSend: v52, from: v174 } = txn2;
      
      const v177 = v160.disposePrice;
      sim_r.txns.push({
        amt: v177,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v159,
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
  const {data: [], secs: v176, time: v175, didSend: v52, from: v174 } = txn2;
  const v177 = v160.disposePrice;
  ;
  ;
  const v187 = stdlib.protect(ctc5, await interact.collectBundle(), {
    at: './index.rsh:77:62:application',
    fs: ['at ./index.rsh:76:17:application call to [unknown function] (defined at: ./index.rsh:76:20:function exp)'],
    msg: 'collectBundle',
    who: 'Collector'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v159, v174, v187],
    evt_cnt: 1,
    funcNum: 2,
    lct: v175,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v193], secs: v195, time: v194, didSend: v71, from: v192 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v193], secs: v195, time: v194, didSend: v71, from: v192 } = txn3;
  ;
  const v196 = stdlib.addressEq(v174, v192);
  stdlib.assert(v196, {
    at: './index.rsh:79:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Collector'
    });
  const v199 = v193.collectorName;
  const v200 = v193.collectorLocation;
  const v201 = v193.destinationLocation;
  const v202 = v193.collectorPrice;
  stdlib.protect(ctc4, await interact.showCollector(v199, v200, v201, v202), {
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
  const {data: [], secs: v209, time: v208, didSend: v90, from: v207 } = txn4;
  const v210 = v193.collectorPrice;
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
  const {data: [v227], secs: v229, time: v228, didSend: v110, from: v226 } = txn5;
  ;
  const v230 = stdlib.addressEq(v207, v226);
  stdlib.assert(v230, {
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
  const {data: [], secs: v248, time: v247, didSend: v135, from: v246 } = txn6;
  const v249 = v227.sellerPrice;
  ;
  const v252 = stdlib.addressEq(v207, v246);
  stdlib.assert(v252, {
    at: './index.rsh:106:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Collector'
    });
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
  
  
  const v151 = stdlib.protect(ctc0, interact.deadline, 'for Disposal\'s interact field deadline');
  
  const v154 = stdlib.protect(ctc3, await interact.registerBundle(), {
    at: './index.rsh:59:60:application',
    fs: ['at ./index.rsh:58:16:application call to [unknown function] (defined at: ./index.rsh:58:20:function exp)'],
    msg: 'registerBundle',
    who: 'Disposal'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v154, v151],
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
      
      
      const {data: [v160, v161], secs: v163, time: v162, didSend: v33, from: v159 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v160, v161], secs: v163, time: v162, didSend: v33, from: v159 } = txn1;
  ;
  const v166 = v160.bundleName;
  const v167 = v160.boughtDate;
  const v168 = v160.boughtPrice;
  const v169 = v160.disposePrice;
  stdlib.protect(ctc4, await interact.showDisposal(v166, v167, v168, v169), {
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
  const {data: [], secs: v176, time: v175, didSend: v52, from: v174 } = txn2;
  const v177 = v160.disposePrice;
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
  const {data: [v193], secs: v195, time: v194, didSend: v71, from: v192 } = txn3;
  ;
  const v196 = stdlib.addressEq(v174, v192);
  stdlib.assert(v196, {
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
  const {data: [], secs: v209, time: v208, didSend: v90, from: v207 } = txn4;
  const v210 = v193.collectorPrice;
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
  const {data: [v227], secs: v229, time: v228, didSend: v110, from: v226 } = txn5;
  ;
  const v230 = stdlib.addressEq(v207, v226);
  stdlib.assert(v230, {
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
  const {data: [], secs: v248, time: v247, didSend: v135, from: v246 } = txn6;
  const v249 = v227.sellerPrice;
  ;
  const v252 = stdlib.addressEq(v207, v246);
  stdlib.assert(v252, {
    at: './index.rsh:106:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Disposal'
    });
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
  const {data: [v160, v161], secs: v163, time: v162, didSend: v33, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v176, time: v175, didSend: v52, from: v174 } = txn2;
  const v177 = v160.disposePrice;
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
  const {data: [v193], secs: v195, time: v194, didSend: v71, from: v192 } = txn3;
  ;
  const v196 = stdlib.addressEq(v174, v192);
  stdlib.assert(v196, {
    at: './index.rsh:79:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v205 = v193.collectorPrice;
  stdlib.protect(ctc5, await interact.acceptPrice(v205), {
    at: './index.rsh:86:25:application',
    fs: ['at ./index.rsh:85:14:application call to [unknown function] (defined at: ./index.rsh:85:18:function exp)'],
    msg: 'acceptPrice',
    who: 'Seller'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v159, v193],
    evt_cnt: 0,
    funcNum: 3,
    lct: v194,
    onlyIf: true,
    out_tys: [],
    pay: [v205, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v209, time: v208, didSend: v90, from: v207 } = txn4;
      
      const v210 = v193.collectorPrice;
      sim_r.txns.push({
        amt: v210,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v159,
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
  const {data: [], secs: v209, time: v208, didSend: v90, from: v207 } = txn4;
  const v210 = v193.collectorPrice;
  ;
  ;
  const v220 = stdlib.protect(ctc6, await interact.sellBundle(), {
    at: './index.rsh:93:56:application',
    fs: ['at ./index.rsh:92:14:application call to [unknown function] (defined at: ./index.rsh:92:17:function exp)'],
    msg: 'sellBundle',
    who: 'Seller'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v159, v207, v220],
    evt_cnt: 1,
    funcNum: 4,
    lct: v208,
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:95:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v227], secs: v229, time: v228, didSend: v110, from: v226 } = txn5;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v227], secs: v229, time: v228, didSend: v110, from: v226 } = txn5;
  ;
  const v230 = stdlib.addressEq(v207, v226);
  stdlib.assert(v230, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v233 = v227.sellerName;
  const v234 = v227.sellerLocation;
  const v235 = v227.collectDate;
  const v236 = v227.bundleCondition;
  const v237 = v227.sellerPrice;
  stdlib.protect(ctc5, await interact.showSeller(v233, v234, v235, v236, v237), {
    at: './index.rsh:98:24:application',
    fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:19:function exp)'],
    msg: 'showSeller',
    who: 'Seller'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v159, v207, v227],
    evt_cnt: 0,
    funcNum: 5,
    lct: v228,
    onlyIf: true,
    out_tys: [],
    pay: [v237, []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v248, time: v247, didSend: v135, from: v246 } = txn6;
      
      const v249 = v227.sellerPrice;
      sim_r.txns.push({
        amt: v249,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v159,
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
    tys: [ctc7, ctc7, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v248, time: v247, didSend: v135, from: v246 } = txn6;
  const v249 = v227.sellerPrice;
  ;
  const v252 = stdlib.addressEq(v207, v246);
  stdlib.assert(v252, {
    at: './index.rsh:106:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
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
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc3, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v160, v161], secs: v163, time: v162, didSend: v33, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v176, time: v175, didSend: v52, from: v174 } = txn2;
  const v177 = v160.disposePrice;
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
  const {data: [v193], secs: v195, time: v194, didSend: v71, from: v192 } = txn3;
  ;
  const v196 = stdlib.addressEq(v174, v192);
  stdlib.assert(v196, {
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
  const {data: [], secs: v209, time: v208, didSend: v90, from: v207 } = txn4;
  const v210 = v193.collectorPrice;
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
  const {data: [v227], secs: v229, time: v228, didSend: v110, from: v226 } = txn5;
  ;
  const v230 = stdlib.addressEq(v207, v226);
  stdlib.assert(v230, {
    at: './index.rsh:95:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Viewer'
    });
  const v240 = v160.bundleName;
  const v241 = v193.collectorName;
  const v242 = v227.sellerName;
  const v243 = v227.bundleCondition;
  const v244 = v227.sellerPrice;
  stdlib.protect(ctc6, await interact.showViewer(v240, v241, v242, v243, v244), {
    at: './index.rsh:103:24:application',
    fs: ['at ./index.rsh:102:14:application call to [unknown function] (defined at: ./index.rsh:102:18:function exp)'],
    msg: 'showViewer',
    who: 'Viewer'
    });
  
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v248, time: v247, didSend: v135, from: v246 } = txn6;
  const v249 = v227.sellerPrice;
  ;
  const v252 = stdlib.addressEq(v207, v246);
  stdlib.assert(v252, {
    at: './index.rsh:106:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Viewer'
    });
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByANAAEFfwME/QIC9AII/AP7BCAmCAEAAQEBAgEDAQQBBQABBiI1ADEYQQMvJwZkSSJbNQEhCVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAFlSSEFDEAA70kkDEAAZSQSRCQ0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUCcEZFAnBWRQJwdkUDUDgATMmZJcsDQDgUCB0AVYgcgFWzX/NP+IAso0A1cgIDEAEkSxIrIBNP+yCCOyEDQDVwAgsgezQgI9SCEFNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf9XICA1/kk1BTX9gARDa5JxNP1QsDT+MQASRDT/NP5QNP1QKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIQYlWGcnBEsBIQolWGcnBUsBIQslWGcnB0sBgfoFgRZYZ0gkNQEyBjUCQgHUSCEENAESRDQESSISTDQCEhFEKGQpZFAqZFArZFAnBGRQJwVkUEk1A1cAIDX/gASnZcS0sDQDIQyB7ARYgeQCWzX+NP6IAeCxIrIBNP6yCCOyEDT/sgezNP8xAFAoSwFXAEBnSCEFNQEyBjUCQgFlSSMMQADhSSEHDEAAdUghBzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEHWSm2jT+ULA0A1cgIDEAEkQ0/zT+UChLAVcAf2cpSwFXf39nKksBV/5/ZytLASEGJVhnJwRLASEKJVhnJwVLASELgRFYZ0ghBDUBMgY1AkIA40gjNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNXACA1/4AEmouRdLA0AyEMIQhYgewCWzX+NP6IAPmxIrIBNP6yCCOyEDT/sgezNP8xAFAoSwFXAEBnSCEHNQEyBjUCQgB+SIGgjQaIAMkiNAESRDQESSISTDQCEhFESTUFSSIhCFg1/yEIWzX+gASwQfxPNP9QNP4WULAxADT/UChLAVcAf2cpSwFXf39nKksBV/5/ZytLASEGgRdYZ0gjNQEyBjUCQgAbMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEJMTUSRCIxNhJEIjE3EkQiNQEiNQJC/600AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 7,
  stateSize: 784,
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
                "name": "v160",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v161",
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
                "name": "v160",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v161",
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
                "name": "v193",
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
                "name": "v227",
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
                "name": "v193",
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
                "name": "v227",
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
  Bytecode: `0x608060405260405162001c2e38038062001c2e83398101604081905262000026916200035c565b60008055436003556040517f4453b2c6f4290a916904d3b0fb3d35e560f324ecb08dc0a949ad490cebf0db7c9062000062903390849062000458565b60405180910390a16200007834156007620000da565b6200008262000104565b338152602080830151518183015260016000819055439055604051620000ab9183910162000534565b60405160208183030381529060405260029080519060200190620000d1929190620001af565b50505062000638565b81620001005760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806040016040528060006001600160a01b03168152602001620001aa60408051610100810190915260006080820181815260a0830182905260c0830182905260e083019190915281908152600060208083018290526040805161010081018252838152918201839052818101839052606082018390526080820183905260a0820183905260c0820183905260e08201929092529101908152602001600081525090565b905290565b828054620001bd90620005fb565b90600052602060002090601f016020900481019282620001e157600085556200022c565b82601f10620001fc57805160ff19168380011785556200022c565b828001600101855582156200022c579182015b828111156200022c5782518255916020019190600101906200020f565b506200023a9291506200023e565b5090565b5b808211156200023a57600081556001016200023f565b604080519081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b6000610100808385031215620002d257600080fd5b604051908101906001600160401b03821181831017156200030357634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60008183036102008112156200037157600080fd5b6200037b62000255565b83518152601f19820191506101e0808312156200039757600080fd5b620003a162000255565b6101c080851215620003b257600080fd5b620003bc6200028c565b6080861215620003cb57600080fd5b620003d56200028c565b9550602088015186526040880151602087015260608801516040870152608088015163ffffffff60e01b811681146200040d57600080fd5b606087015285815260a088015160208201526200042e8960c08a01620002bd565b60408201529087015160608201528152940151602080860191909152810193909352509092915050565b60006102208201905060018060a01b038416825282516020830152602083015162000521604084018251805180518352602081015160208401526040810151604084015263ffffffff60e01b606082015116606084015250602081015160808301526040810151805160a0840152602081015160c0840152604081015160e08401526060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e08101516101808401525060608101516101a08301525050565b6020810151610200840152509392505050565b81516001600160a01b031681526020808301516101e0830191620005f490840182805180518352602081015160208401526040810151604084015263ffffffff60e01b606082015116606084015250602081015160808301526040810151805160a0840152602081015160c0840152604081015160e08401526060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e08101516101808401525060608101516101a08301525050565b5092915050565b600181811c908216806200061057607f821691505b602082108114156200063257634e487b7160e01b600052602260045260246000fd5b50919050565b6115e680620006486000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e157806398f21c2c146100f4578063ab53f2c614610107578063d0ea126b1461012a57005b80631e93b0f1146100825780632c10a159146100a657806373b4522c146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610c20565b61013d565b6100806100c7366004610c20565b610305565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610c20565b6104a7565b610080610102366004610c38565b61063b565b34801561011357600080fd5b5061011c6107c1565b60405161009d929190610c4b565b610080610138366004610ca8565b61085e565b61014d60016000541460096109d5565b6101678135158061016057506001548235145b600a6109d5565b60008080556002805461017990610cbb565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610cbb565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610ed8565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610f5d565b60405180910390a161025a816020015160600151341460086109d5565b80516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561029b573d6000803e3d6000fd5b506040805180820182526000808252602080830182815285516001600160a01b03168452339052600290915543600155915190916102db91839101610f9a565b604051602081830303815290604052600290805190602001906102ff9291906109fa565b50505050565b61031560036000541460106109d5565b61032f8135158061032857506001548235145b60116109d5565b60008080556002805461034190610cbb565b80601f016020809104026020016040519081016040528092919081815260200182805461036d90610cbb565b80156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b50505050508060200190518101906103d29190610fc4565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610405929190610f5d565b60405180910390a16104228160200151604001513414600f6109d5565b80600001516001600160a01b03166108fc8260200151604001519081150290604051600060405180830381858888f19350505050158015610467573d6000803e3d6000fd5b506040805180820182526000808252602080830182815285516001600160a01b03168452339052600490915543600155915190916102db91839101610f9a565b6104b760056000541460186109d5565b6104d1813515806104ca57506001548235145b60196109d5565b6000808055600280546104e390610cbb565b80601f016020809104026020016040519081016040528092919081815260200182805461050f90610cbb565b801561055c5780601f106105315761010080835404028352916020019161055c565b820191906000526020600020905b81548152906001019060200180831161053f57829003601f168201915b50505050508060200190518101906105749190611057565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516105a7929190610f5d565b60405180910390a16105c4816040015160800151341460166109d5565b60208101516105df906001600160a01b0316331460176109d5565b80516040808301516080015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610620573d6000803e3d6000fd5b506000808055600181905561063790600290610a7e565b5050565b61064b60046000541460146109d5565b6106658135158061065e57506001548235145b60156109d5565b60008080556002805461067790610cbb565b80601f01602080910402602001604051908101604052809291908181526020018280546106a390610cbb565b80156106f05780601f106106c5576101008083540402835291602001916106f0565b820191906000526020600020905b8154815290600101906020018083116106d357829003601f168201915b5050505050806020019051810190610708919061114a565b90507fe6566ad1d4f3d660311f78e9a0f523f33b417d8ce284d1e29e0852668f7508c8338360405161073b9291906111f5565b60405180910390a161074f341560126109d5565b602081015161076a906001600160a01b0316331460136109d5565b610772610abb565b81516001600160a01b039081168252602080840151909116818301526107a09036859003850190850161131a565b604080830191909152600560005543600155516102db908290602001611408565b6000606060005460028080546107d690610cbb565b80601f016020809104026020016040519081016040528092919081815260200182805461080290610cbb565b801561084f5780601f106108245761010080835404028352916020019161084f565b820191906000526020600020905b81548152906001019060200180831161083257829003601f168201915b50505050509050915091509091565b61086e600260005414600d6109d5565b6108888135158061088157506001548235145b600e6109d5565b60008080556002805461089a90610cbb565b80601f01602080910402602001604051908101604052809291908181526020018280546108c690610cbb565b80156109135780601f106108e857610100808354040283529160200191610913565b820191906000526020600020905b8154815290600101906020018083116108f657829003601f168201915b505050505080602001905181019061092b919061114a565b90507fdfbe07d9cede69f6c287ad9f6aae49e21b47398ecd9692d383c8d3e5dc4ea379338360405161095e92919061148d565b60405180910390a16109723415600b6109d5565b602081015161098d906001600160a01b03163314600c6109d5565b610995610adf565b81516001600160a01b031681526109b4368490038401602085016114f1565b6020808301919091526003600055436001556040516102db91839101611550565b816106375760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610a0690610cbb565b90600052602060002090601f016020900481019282610a285760008555610a6e565b82601f10610a4157805160ff1916838001178555610a6e565b82800160010185558215610a6e579182015b82811115610a6e578251825591602001919060010190610a53565b50610a7a929150610b02565b5090565b508054610a8a90610cbb565b6000825580601f10610a9a575050565b601f016020900490600052602060002090810190610ab89190610b02565b50565b6040805160608101825260008082526020820152908101610ada610b17565b905290565b604051806040016040528060006001600160a01b03168152602001610ada610b92565b5b80821115610a7a5760008155600101610b03565b6040518060a00160405280610b2a610bdc565b8152604080516080810182526000808252602082810182905292820181905260608201529101908152602001610b5e610bdc565b8152604080516080810182526000808252602082810182905292820181905260608201529101908152602001600081525090565b6040518060800160405280610ba5610bdc565b815260408051608081018252600080825260208281018290529282018190526060820152910190815260200160008152602001610ada5b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b600060408284031215610c3257600080fd5b50919050565b60006103408284031215610c3257600080fd5b82815260006020604081840152835180604085015260005b81811015610c7f57858101830151858201606001528201610c63565b81811115610c91576000606083870101525b50601f01601f191692909201606001949350505050565b60006102c08284031215610c3257600080fd5b600181811c90821680610ccf57607f821691505b60208210811415610c3257634e487b7160e01b600052602260045260246000fd5b6040516080810167ffffffffffffffff81118282101715610d2157634e487b7160e01b600052604160045260246000fd5b60405290565b604051610100810167ffffffffffffffff81118282101715610d2157634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610d2157634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610d2157634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610d2157634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114610e0357600080fd5b919050565b6001600160e01b031981168114610ab857600080fd5b600060808284031215610e3057600080fd5b610e38610cf0565b90508151815260208201516020820152604082015160408201526060820151610e6081610e08565b606082015292915050565b60006101008284031215610e7e57600080fd5b610e86610d27565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015292915050565b60008183036101e0811215610eec57600080fd5b610ef4610d59565b610efd84610dec565b81526101c080601f1984011215610f1357600080fd5b610f1b610cf0565b9250610f2a8660208701610e1e565b835260a08501516020840152610f438660c08701610e6b565b604084015293909301516060820152602083015250919050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610f8b57600080fd5b80604085015250509392505050565b60408101610fbe828480516001600160a01b03908116835260209182015116910152565b92915050565b60008183036102c0811215610fd857600080fd5b610fe0610d59565b610fe984610dec565b81526102a0601f1983011215610ffe57600080fd5b611006610cf0565b91506110158560208601610e6b565b8252611025856101208601610e1e565b60208301526101a08401516040830152611043856101c08601610e6b565b606083015260208101919091529392505050565b600081830361036081121561106b57600080fd5b611073610d8a565b61107c84610dec565b815261108a60208501610dec565b6020820152610320603f19830112156110a257600080fd5b6110aa610dbb565b91506110b98560408601610e6b565b82526110c9856101408601610e1e565b60208301526110dc856101c08601610e6b565b60408301526110ef856102c08601610e1e565b606083015261034093909301516080820152604083015250919050565b60006040828403121561111e57600080fd5b611126610d59565b905061113182610dec565b815261113f60208301610dec565b602082015292915050565b60006040828403121561115c57600080fd5b611166838361110c565b9392505050565b803582526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b80358252602081013560208301526040810135604083015260608101356111e181610e08565b63ffffffff60e01b81166060840152505050565b6001600160a01b03831681528135602080830191909152610360820190611222906040840190850161116d565b611234610140830161012085016111bb565b6112466101c083016101a0850161116d565b6112586102c083016102a085016111bb565b6103208301356103408301529392505050565b6000610100828403121561127e57600080fd5b611286610d27565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015292915050565b6000608082840312156112ea57600080fd5b6112f2610cf0565b90508135815260208201356020820152604082013560408201526060820135610e6081610e08565b6000610320828403121561132d57600080fd5b611335610dbb565b61133f848461126b565b815261134f8461010085016112d8565b602082015261136284610180850161126b565b60408201526113758461028085016112d8565b60608201526103009290920135608083015250919050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b8051825260208082015190830152604080820151908301526060908101516001600160e01b031916910152565b81516001600160a01b03908116825260208084015190911690820152604080830151805161036084019261143f919085019061138d565b60208101516114526101408501826113db565b5060408101516114666101c085018261138d565b50606081015161147a6102c08501826113db565b5060808101516103408401525092915050565b6001600160a01b038316815281356020808301919091526102e08201906114ba906040840190850161116d565b6114cc610140830161012085016111bb565b6101c06101a0840135818401526114e96101e0840182860161116d565b509392505050565b60006102a0828403121561150457600080fd5b61150c610cf0565b611516848461126b565b81526115268461010085016112d8565b60208201526101808301356040820152611544846101a0850161126b565b60608201529392505050565b81516001600160a01b0316815260208083015180516102c0840192611578919085019061138d565b602081015161158b6101208501826113db565b5060408101516101a0840152606001516115a96101c084018261138d565b509291505056fea2646970667358221220879c2ffd6e7827487604f292971631f6ef799f2581d7782950e8ba049e04bbdc64736f6c634300080c0033`,
  BytecodeLen: 7214,
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
    at: './index.rsh:108:11:after expr stmt semicolon',
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
