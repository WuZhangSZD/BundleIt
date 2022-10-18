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
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0],
      3: [ctc0, ctc1],
      4: [ctc0]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    scale: ctc0
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    i: ctc2,
    sign: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v124 = stdlib.protect(ctc0, interact.BidPriceCollector, 'for Collector\'s interact field BidPriceCollector');
  const v126 = stdlib.protect(ctc1, interact.CollectorName, 'for Collector\'s interact field CollectorName');
  const v127 = stdlib.protect(ctc1, interact.DestinationLocation, 'for Collector\'s interact field DestinationLocation');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc1, ctc1, ctc4, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v136, v137, v138, v139], secs: v141, time: v140, didSend: v46, from: v135 } = txn1;
  ;
  stdlib.protect(ctc5, await interact.acceptBidPrice(v139), {
    at: './index.rsh:51:28:application',
    fs: ['at ./index.rsh:50:17:application call to [unknown function] (defined at: ./index.rsh:50:20:function exp)'],
    msg: 'acceptBidPrice',
    who: 'Collector'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v135, v139],
    evt_cnt: 0,
    funcNum: 1,
    lct: v140,
    onlyIf: true,
    out_tys: [],
    pay: [v139, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v146, time: v145, didSend: v55, from: v144 } = txn2;
      
      sim_r.txns.push({
        amt: v139,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v135,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v146, time: v145, didSend: v55, from: v144 } = txn2;
  ;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v144, v126, v126, v127, v124],
    evt_cnt: 4,
    funcNum: 2,
    lct: v145,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v156, v157, v158, v159], secs: v161, time: v160, didSend: v71, from: v155 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v156, v157, v158, v159], secs: v161, time: v160, didSend: v71, from: v155 } = txn3;
  ;
  const v162 = stdlib.addressEq(v144, v155);
  stdlib.assert(v162, {
    at: './index.rsh:62:13:dot',
    fs: [],
    msg: 'sender correct',
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
  const {data: [], secs: v167, time: v166, didSend: v80, from: v165 } = txn4;
  ;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 4,
    out_tys: [ctc1, ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v177, v178, v179, v180], secs: v182, time: v181, didSend: v96, from: v176 } = txn5;
  ;
  const v183 = stdlib.addressEq(v165, v176);
  stdlib.assert(v183, {
    at: './index.rsh:76:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Collector'
    });
  stdlib.protect(ctc5, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5')), {
    at: './index.rsh:80:24:application',
    fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:42:function exp)'],
    msg: 'seeOutcome',
    who: 'Collector'
    });
  
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    scale: ctc0
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    i: ctc2,
    sign: ctc3
    });
  const ctc5 = stdlib.T_Null;
  
  
  const v116 = stdlib.protect(ctc0, interact.BidPriceDisposal, 'for Disposal\'s interact field BidPriceDisposal');
  const v117 = stdlib.protect(ctc1, interact.BoughtDay, 'for Disposal\'s interact field BoughtDay');
  const v118 = stdlib.protect(ctc4, interact.BoughtPrice, 'for Disposal\'s interact field BoughtPrice');
  const v123 = stdlib.protect(ctc1, interact.BundleName, 'for Disposal\'s interact field BundleName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v123, v117, v118, v116],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc4, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v136, v137, v138, v139], secs: v141, time: v140, didSend: v46, from: v135 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v136, v137, v138, v139], secs: v141, time: v140, didSend: v46, from: v135 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v146, time: v145, didSend: v55, from: v144 } = txn2;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v156, v157, v158, v159], secs: v161, time: v160, didSend: v71, from: v155 } = txn3;
  ;
  const v162 = stdlib.addressEq(v144, v155);
  stdlib.assert(v162, {
    at: './index.rsh:62:13:dot',
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
  const {data: [], secs: v167, time: v166, didSend: v80, from: v165 } = txn4;
  ;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 4,
    out_tys: [ctc1, ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v177, v178, v179, v180], secs: v182, time: v181, didSend: v96, from: v176 } = txn5;
  ;
  const v183 = stdlib.addressEq(v165, v176);
  stdlib.assert(v183, {
    at: './index.rsh:76:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Disposal'
    });
  stdlib.protect(ctc5, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5')), {
    at: './index.rsh:80:24:application',
    fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:42:function exp)'],
    msg: 'seeOutcome',
    who: 'Disposal'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    scale: ctc0
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    i: ctc2,
    sign: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v128 = stdlib.protect(ctc0, interact.BidPriceSeller, 'for Seller\'s interact field BidPriceSeller');
  const v130 = stdlib.protect(ctc1, interact.DateCollected, 'for Seller\'s interact field DateCollected');
  const v131 = stdlib.protect(ctc1, interact.SellerLocation, 'for Seller\'s interact field SellerLocation');
  const v132 = stdlib.protect(ctc1, interact.SellerName, 'for Seller\'s interact field SellerName');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc1, ctc1, ctc4, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v136, v137, v138, v139], secs: v141, time: v140, didSend: v46, from: v135 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v146, time: v145, didSend: v55, from: v144 } = txn2;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 2,
    out_tys: [ctc1, ctc1, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v156, v157, v158, v159], secs: v161, time: v160, didSend: v71, from: v155 } = txn3;
  ;
  const v162 = stdlib.addressEq(v144, v155);
  stdlib.assert(v162, {
    at: './index.rsh:62:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  stdlib.protect(ctc5, await interact.acceptBidPrice(v159), {
    at: './index.rsh:65:28:application',
    fs: ['at ./index.rsh:64:14:application call to [unknown function] (defined at: ./index.rsh:64:17:function exp)'],
    msg: 'acceptBidPrice',
    who: 'Seller'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v144, v159],
    evt_cnt: 0,
    funcNum: 3,
    lct: v160,
    onlyIf: true,
    out_tys: [],
    pay: [v159, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v167, time: v166, didSend: v80, from: v165 } = txn4;
      
      sim_r.txns.push({
        amt: v159,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v144,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v167, time: v166, didSend: v80, from: v165 } = txn4;
  ;
  ;
  const txn5 = await (ctc.sendrecv({
    args: [v165, v132, v131, v130, v128],
    evt_cnt: 4,
    funcNum: 4,
    lct: v166,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v177, v178, v179, v180], secs: v182, time: v181, didSend: v96, from: v176 } = txn5;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v177, v178, v179, v180], secs: v182, time: v181, didSend: v96, from: v176 } = txn5;
  ;
  const v183 = stdlib.addressEq(v165, v176);
  stdlib.assert(v183, {
    at: './index.rsh:76:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  stdlib.protect(ctc5, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:80:25:decimal', stdlib.UInt_max, '5')), {
    at: './index.rsh:80:24:application',
    fs: ['at ./index.rsh:79:7:application call to [unknown function] (defined at: ./index.rsh:79:42:function exp)'],
    msg: 'seeOutcome',
    who: 'Seller'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAJAAGAAgIEA4AEgAYgJgIBAAAiNQAxGEECRSlkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAARNJIQUMQACnSSEEDEAAUCEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkNQNJNQVJSiIkWDX/JCRYNf4hBiRYNf0hB1s1/IAEIH+bFTT/UDT+UDT9UDT8FlCwNAMxABJEQgFpSCEFNAESRDQESSISTDQCEhFEKGRJNQMhCFs1/4AEp2XEtLA0/4gBrrEisgE0/7III7IQNANXACCyB7MxAChLAVcAIGdIIQQ1ATIGNQJCATVIJTQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQVJSiIkWDX+JCRYNf0hBiRYNfwhB1s1+4AEk/FdcDT+UDT9UDT8UDT7FlCwNP8xABJENP80+xZQKEsBVwAoZ0ghBTUBMgY1AkIA0EkjDEAATkgjNAESRDQESSISTDQCEhFEKGRJNQMhCFs1/4AEmouRdLA0/4gA9LEisgE0/7III7IQNANXACCyB7MxAChLAVcAIGdIJTUBMgY1AkIAfEiBoI0GiADFIjQBEkQ0BEkiEkw0AhIRREk1BUlKIiRYNf8kJFg1/iEGgRFYNf2BkQRbNfyABJXP1x80/1A0/lA0/VA0/BZQsDEANPwWUChLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "name": "v136",
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
                "name": "v137",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_i",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_scale",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_i",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_sign",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T3",
                "name": "v138",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v139",
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
                "name": "v136",
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
                "name": "v137",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_i",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_scale",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_i",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_sign",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T3",
                "name": "v138",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v139",
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
                "name": "v156",
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
                "name": "v157",
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
                "name": "v158",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
                "name": "v177",
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
                "name": "v178",
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
                "name": "v179",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v156",
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
                "name": "v157",
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
                "name": "v158",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                "name": "v177",
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
                "name": "v178",
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
                "name": "v179",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010b6380380620010b68339810160408190526200002691620002bc565b60008055436003556040517faea46870bb914f01e6786bf4231b63e1c45855a475f1f12940e7d923dfa44b2590620000629033908490620003ad565b60405180910390a16200007834156007620000e5565b604080518082018252600060208083018281523380855286830151606090810151835260019485905543909455855192830152519381019390935290910160405160208183030381529060405260029080519060200190620000dc9291906200010f565b505050620004f6565b816200010b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200011d90620004b9565b90600052602060002090601f0160209004810192826200014157600085556200018c565b82601f106200015c57805160ff19168380011785556200018c565b828001600101855582156200018c579182015b828111156200018c5782518255916020019190600101906200016f565b506200019a9291506200019e565b5090565b5b808211156200019a57600081556001016200019f565b604080519081016001600160401b0381118282101715620001e657634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620001e657634e487b7160e01b600052604160045260246000fd5b60006101008083850312156200023257600080fd5b604051908101906001600160401b03821181831017156200026357634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60008183036102a0811215620002d157600080fd5b620002db620001b5565b8351815261028080601f1984011215620002f457600080fd5b620002fe620001ec565b6200030d87602088016200021d565b81526200031f8761012088016200021d565b602082015261021f198401935060608412156200033b57600080fd5b62000345620001b5565b60408512156200035457600080fd5b6200035e620001b5565b610220880151815261024088015160208201528152610260870151945084151585146200038a57600080fd5b602081810195909552604082015294015160608501529081019290925250919050565b60006102c08201905060018060a01b038416825282516020830152602083015162000425604084018251805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b602081810151805161014086015290810151610160850152604081015161018085015260608101516101a085015260808101516101c085015260a08101516101e085015260c081015161020085015260e08101516102208501525060408101518051805161024086015260209081015161026086015201511515610280840152606001516102a09092019190915292915050565b600181811c90821680620004ce57607f821691505b60208210811415620004f057634e487b7160e01b600052602260045260246000fd5b50919050565b610bb080620005066000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c15780639cdbe0d4146100d6578063a5c7fc71146100e9578063ab53f2c6146100fc57005b80631e93b0f1146100775780632c10a1591461009b57806373b4522c146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610899565b61011f565b6100756100bc366004610899565b6102c2565b3480156100cd57600080fd5b50600154610088565b6100756100e43660046108c4565b61043f565b6100756100f73660046108c4565b610585565b34801561010857600080fd5b50610111610701565b6040516100929291906108e8565b61012f600160005414600961079e565b6101498135158061014257506001548235145b600a61079e565b60008080556002805461015b90610945565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610945565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec91906109fb565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610a17565b60405180910390a161023881602001513414600861079e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610275573d6000803e3d6000fd5b506040805160208082018352338083526002600055436001558351918201529091015b604051602081830303815290604052600290805190602001906102bc9291906107c3565b50505050565b6102d2600360005414601061079e565b6102ec813515806102e557506001548235145b601161079e565b6000808055600280546102fe90610945565b80601f016020809104026020016040519081016040528092919081815260200182805461032a90610945565b80156103775780601f1061034c57610100808354040283529160200191610377565b820191906000526020600020905b81548152906001019060200180831161035a57829003601f168201915b505050505080602001905181019061038f91906109fb565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516103c2929190610a17565b60405180910390a16103db81602001513414600f61079e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610418573d6000803e3d6000fd5b50604080516020808201835233808352600460005543600155835191820152909101610298565b61044f600460005414601461079e565b6104698135158061046257506001548235145b601561079e565b60008080556002805461047b90610945565b80601f01602080910402602001604051908101604052809291908181526020018280546104a790610945565b80156104f45780601f106104c9576101008083540402835291602001916104f4565b820191906000526020600020905b8154815290600101906020018083116104d757829003601f168201915b505050505080602001905181019061050c9190610aae565b90507fd8b1c8886da3e12389da6f068c5a09668f5894f7f92810a82e8dde8d432e1981338360405161053f929190610b5c565b60405180910390a16105533415601261079e565b805161056b906001600160a01b03163314601361079e565b6000808055600181905561058190600290610847565b5050565b610595600260005414600d61079e565b6105af813515806105a857506001548235145b600e61079e565b6000808055600280546105c190610945565b80601f01602080910402602001604051908101604052809291908181526020018280546105ed90610945565b801561063a5780601f1061060f5761010080835404028352916020019161063a565b820191906000526020600020905b81548152906001019060200180831161061d57829003601f168201915b50505050508060200190518101906106529190610aae565b90507fc320279e5d731e911714b6cd63bcab6757a80358d275077b76fbd1a01ba3475e3383604051610685929190610b5c565b60405180910390a16106993415600b61079e565b80516106b1906001600160a01b03163314600c61079e565b6040805180820182526000808252602080830182815285516001600160a01b0316808552610320880135825260039093554360015584519182019290925290519281019290925290606001610298565b60006060600054600280805461071690610945565b80601f016020809104026020016040519081016040528092919081815260200182805461074290610945565b801561078f5780601f106107645761010080835404028352916020019161078f565b820191906000526020600020905b81548152906001019060200180831161077257829003601f168201915b50505050509050915091509091565b816105815760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546107cf90610945565b90600052602060002090601f0160209004810192826107f15760008555610837565b82601f1061080a57805160ff1916838001178555610837565b82800160010185558215610837579182015b8281111561083757825182559160200191906001019061081c565b50610843929150610884565b5090565b50805461085390610945565b6000825580601f10610863575050565b601f0160209004906000526020600020908101906108819190610884565b50565b5b808211156108435760008155600101610885565b6000604082840312156108ab57600080fd5b50919050565b600061034082840312156108ab57600080fd5b600061034082840312156108d757600080fd5b6108e183836108b1565b9392505050565b82815260006020604081840152835180604085015260005b8181101561091c57858101830151858201606001528201610900565b8181111561092e576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061095957607f821691505b602082108114156108ab57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461099157600080fd5b919050565b6000604082840312156109a857600080fd5b6040516040810181811067ffffffffffffffff821117156109d957634e487b7160e01b600052604160045260246000fd5b6040529050806109e88361097a565b8152602083015160208201525092915050565b600060408284031215610a0d57600080fd5b6108e18383610996565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610a4557600080fd5b80604085015250509392505050565b600060208284031215610a6657600080fd5b6040516020810181811067ffffffffffffffff82111715610a9757634e487b7160e01b600052604160045260246000fd5b604052905080610aa68361097a565b905292915050565b600060208284031215610ac057600080fd5b6108e18383610a54565b803582526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b80358252610b2c6020830160208301610aca565b610120610b3d818401828401610aca565b50610220610b4f818401828401610aca565b5061032090810135910152565b6001600160a01b038316815261036081016108e16020830184610b1856fea2646970667358221220675b5a97478c255e7ad363b78f507a37408d7d14a138a8097ee379e7fbc798c364736f6c634300080c0033`,
  BytecodeLen: 4278,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:63:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:77:11:after expr stmt semicolon',
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
  "Seller": Seller
  };
export const _APIs = {
  };
