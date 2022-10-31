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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    boughtDate: ctc1,
    boughtPrice: ctc2,
    bundleName: ctc1,
    disposePrice: ctc2
    });
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc3],
      2: [ctc0]
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    boughtDate: ctc0,
    boughtPrice: ctc1,
    bundleName: ctc0,
    disposePrice: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Object({
    collectorLocation: ctc0,
    collectorName: ctc0,
    collectorPrice: ctc1,
    destinationLocation: ctc0
    });
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc2, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v104, v105], secs: v107, time: v106, didSend: v33, from: v103 } = txn1;
  ;
  const v116 = v104.disposePrice;
  stdlib.protect(ctc3, await interact.acceptPrice(v116), {
    at: './index.rsh:65:25:application',
    fs: ['at ./index.rsh:64:17:application call to [unknown function] (defined at: ./index.rsh:64:21:function exp)'],
    msg: 'acceptPrice',
    who: 'Collector'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v103, v104],
    evt_cnt: 0,
    funcNum: 1,
    lct: v106,
    onlyIf: true,
    out_tys: [],
    pay: [v116, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v120, time: v119, didSend: v52, from: v118 } = txn2;
      
      const v121 = v104.disposePrice;
      sim_r.txns.push({
        amt: v121,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v103,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v52, from: v118 } = txn2;
  const v121 = v104.disposePrice;
  ;
  ;
  const v135 = stdlib.protect(ctc4, await interact.collectBundle(), {
    at: './index.rsh:76:62:application',
    fs: ['at ./index.rsh:75:17:application call to [unknown function] (defined at: ./index.rsh:75:20:function exp)'],
    msg: 'collectBundle',
    who: 'Collector'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v118, v135],
    evt_cnt: 1,
    funcNum: 2,
    lct: v119,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:78:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v141], secs: v143, time: v142, didSend: v77, from: v140 } = txn3;
      
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
    tys: [ctc5, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v141], secs: v143, time: v142, didSend: v77, from: v140 } = txn3;
  ;
  const v144 = stdlib.addressEq(v118, v140);
  stdlib.assert(v144, {
    at: './index.rsh:78:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Collector'
    });
  const v149 = v141.collectorName;
  const v150 = v141.collectorLocation;
  const v151 = v141.destinationLocation;
  const v152 = v141.collectorPrice;
  stdlib.protect(ctc3, await interact.showCollector(v149, v150, v151, v152), {
    at: './index.rsh:81:27:application',
    fs: ['at ./index.rsh:80:7:application call to [unknown function] (defined at: ./index.rsh:80:22:function exp)'],
    msg: 'showCollector',
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
    boughtDate: ctc1,
    boughtPrice: ctc0,
    bundleName: ctc1,
    disposePrice: ctc0
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Object({
    collectorLocation: ctc1,
    collectorName: ctc1,
    collectorPrice: ctc0,
    destinationLocation: ctc1
    });
  
  
  const v95 = stdlib.protect(ctc0, interact.deadline, 'for Disposal\'s interact field deadline');
  
  const v98 = stdlib.protect(ctc2, await interact.registerBundle(), {
    at: './index.rsh:54:60:application',
    fs: ['at ./index.rsh:53:16:application call to [unknown function] (defined at: ./index.rsh:53:20:function exp)'],
    msg: 'registerBundle',
    who: 'Disposal'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v98, v95],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:57:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v104, v105], secs: v107, time: v106, didSend: v33, from: v103 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v104, v105], secs: v107, time: v106, didSend: v33, from: v103 } = txn1;
  ;
  const v110 = v104.bundleName;
  const v111 = v104.boughtDate;
  const v112 = v104.boughtPrice;
  const v113 = v104.disposePrice;
  stdlib.protect(ctc3, await interact.showDisposal(v110, v111, v112, v113), {
    at: './index.rsh:61:26:application',
    fs: ['at ./index.rsh:60:7:application call to [unknown function] (defined at: ./index.rsh:60:21:function exp)'],
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
  const {data: [], secs: v120, time: v119, didSend: v52, from: v118 } = txn2;
  const v121 = v104.disposePrice;
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
  const {data: [v141], secs: v143, time: v142, didSend: v77, from: v140 } = txn3;
  ;
  const v144 = stdlib.addressEq(v118, v140);
  stdlib.assert(v144, {
    at: './index.rsh:78:13:dot',
    fs: [],
    msg: 'sender correct',
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    boughtDate: ctc0,
    boughtPrice: ctc1,
    bundleName: ctc0,
    disposePrice: ctc1
    });
  const ctc3 = stdlib.T_Object({
    collectorLocation: ctc0,
    collectorName: ctc0,
    collectorPrice: ctc1,
    destinationLocation: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc2, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v104, v105], secs: v107, time: v106, didSend: v33, from: v103 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v52, from: v118 } = txn2;
  const v121 = v104.disposePrice;
  ;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v141], secs: v143, time: v142, didSend: v77, from: v140 } = txn3;
  ;
  const v144 = stdlib.addressEq(v118, v140);
  stdlib.assert(v144, {
    at: './index.rsh:78:13:dot',
    fs: [],
    msg: 'sender correct',
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
  appApproval: `ByAEAAECkAQmBgEAAAEBAQIBAwEEIjUAMRhBAYMpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACXSSQMQAAvJBJEJDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEfuxtqjT/ULA0AzEAEkRCANBIIzQBEkQ0BEkiEkw0AhIRRChkKmRQK2RQJwRkUCcFZFA1A4AEmouRdLA0A4EgJViBiARbNf80/4gBA7EisgE0/7III7IQNANXACCyB7MxAChLAVcAIGdIJDUBMgY1AkIAikiBoI0GiADUIjQBEkQ0BEkiEkw0AhIRREk1BUkiJVg1/yVbNf6ABK9Q0M80/1A0/hZQsDEANP9QKEsBVwB/ZypLAVd/f2crSwFX/n9nJwRLAYH9AoF/WGcnBUsBgfwDgTRYZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEGMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 560,
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
                    "internalType": "struct T0",
                    "name": "_bundleName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_disposePrice",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1",
                "name": "v104",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                    "internalType": "struct T0",
                    "name": "_bundleName",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_disposePrice",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1",
                "name": "v104",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
        "internalType": "struct T7",
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
                    "internalType": "struct T0",
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
                    "internalType": "struct T0",
                    "name": "_destinationLocation",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T8",
                "name": "v141",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T7",
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
                    "internalType": "struct T0",
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
                    "internalType": "struct T0",
                    "name": "_destinationLocation",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T8",
                "name": "v141",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000ec938038062000ec9833981016040819052620000269162000355565b60008055436003556040517f149f14fbb028f43e7da13409f94f6709a1cc6e9db21419945de5e6742fdce6ab90620000629033908490620004cf565b60405180910390a162000078341560076200017e565b620001266040805180820182526000808252825161018081018452608080820183815260a080840185905260c080850186905260e0808601879052610100808701889052610120870188905261014087018890526101608701889052938652602086810188905289519485018a52878552848101889052848a018890526060858101899052958501889052928401879052908301869052820185905295830152810191909152909182015290565b3381526020808301515181830152600160008190554390556040516200014f9183910162000512565b6040516020818303038152906040526002908051906020019062000175929190620001a8565b5050506200057d565b81620001a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001b69062000540565b90600052602060002090601f016020900481019282620001da576000855562000225565b82601f10620001f557805160ff191683800117855562000225565b8280016001018555821562000225579182015b828111156200022557825182559160200191906001019062000208565b506200023392915062000237565b5090565b5b8082111562000233576000815560010162000238565b604080519081016001600160401b03811182821017156200027f57634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200027f57634e487b7160e01b600052604160045260246000fd5b6000610100808385031215620002cb57600080fd5b604051908101906001600160401b0382118183101715620002fc57634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60008183036102808112156200036a57600080fd5b620003746200024e565b83518152601f1982019150610260808312156200039057600080fd5b6200039a6200024e565b61024080851215620003ab57600080fd5b620003b562000285565b9450620003c68860208901620002b6565b85526101208701516020860152620003e3886101408901620002b6565b604086015286015160608501529283529093015160208083019190915283015250919050565b6200045e828251805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b60208181015161010084015260408083015180516101208601529182015161014085015281015161016084015260608082015161018085015260808201516101a085015260a08201516101c085015260c08201516101e085015260e090910151610200840152015161022090910152565b60006102a08201905060018060a01b0384168252825160208301526020830151620004ff60408401825162000409565b6020810151610280840152509392505050565b81516001600160a01b03168152602080830151610260830191620005399084018262000409565b5092915050565b600181811c908216806200055557607f821691505b602082108114156200057757634e487b7160e01b600052602260045260246000fd5b50919050565b61093c806200058d6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a1591461007857806376cc586a1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461055e565b6100d6565b610052610099366004610576565b610280565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86103c6565b60405161006f929190610589565b6100e66001600054146009610463565b610100813515806100f957506001548235145b600a610463565b600080805560028054610112906105e6565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105e6565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061070c565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101d69291906107bf565b60405180910390a16101f381602001516060015134146008610463565b80516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610234573d6000803e3d6000fd5b506040805160208082018352338083526002600055436001558351918201529091016040516020818303038152906040526002908051906020019061027a929190610488565b50505050565b610290600260005414600d610463565b6102aa813515806102a357506001548235145b600e610463565b6000808055600280546102bc906105e6565b80601f01602080910402602001604051908101604052809291908181526020018280546102e8906105e6565b80156103355780601f1061030a57610100808354040283529160200191610335565b820191906000526020600020905b81548152906001019060200180831161031857829003601f168201915b505050505080602001905181019061034d91906107fc565b90507f4fc7ecc7e6b26c0cc39b40a729f1cee6e8d13dcce836a088121ad6de2749b9e433836040516103809291906108a2565b60405180910390a16103943415600b610463565b80516103ac906001600160a01b03163314600c610463565b600080805560018190556103c29060029061050c565b5050565b6000606060005460028080546103db906105e6565b80601f0160208091040260200160405190810160405280929190818152602001828054610407906105e6565b80156104545780601f1061042957610100808354040283529160200191610454565b820191906000526020600020905b81548152906001019060200180831161043757829003601f168201915b50505050509050915091509091565b816103c25760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610494906105e6565b90600052602060002090601f0160209004810192826104b657600085556104fc565b82601f106104cf57805160ff19168380011785556104fc565b828001600101855582156104fc579182015b828111156104fc5782518255916020019190600101906104e1565b50610508929150610549565b5090565b508054610518906105e6565b6000825580601f10610528575050565b601f0160209004906000526020600020908101906105469190610549565b50565b5b80821115610508576000815560010161054a565b60006040828403121561057057600080fd5b50919050565b6000610340828403121561057057600080fd5b82815260006020604081840152835180604085015260005b818110156105bd578581018301518582016060015282016105a1565b818111156105cf576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806105fa57607f821691505b6020821081141561057057634e487b7160e01b600052602260045260246000fd5b6040516080810167ffffffffffffffff8111828210171561064c57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461066957600080fd5b919050565b600061010080838503121561068257600080fd5b6040519081019067ffffffffffffffff821181831017156106b357634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b600081830361026081121561072057600080fd5b6040516040810181811067ffffffffffffffff8211171561075157634e487b7160e01b600052604160045260246000fd5b60405261075d84610652565b815261024080601f198401121561077357600080fd5b61077b61061b565b925061078a866020870161066e565b835261012085015160208401526107a586610140870161066e565b604084015293909301516060820152602083015250919050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146107ed57600080fd5b80604085015250509392505050565b60006020828403121561080e57600080fd5b6040516020810181811067ffffffffffffffff8211171561083f57634e487b7160e01b600052604160045260246000fd5b60405261084b83610652565b81529392505050565b803582526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b038316815281356020808301919091526103608201906108cf9060408401908501610854565b6108e161014083016101208501610854565b610240610220840135818401526108fe6102608401828601610854565b50939250505056fea264697066735822122050bdd1e0d0c527b7c53c759267812ee942222cf54e078746aa4e0400223d0d0464736f6c634300080c0033`,
  BytecodeLen: 3785,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:59:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:74:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:79:11:after expr stmt semicolon',
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
