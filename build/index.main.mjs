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
      1: [ctc0, ctc1]
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v83, v84, v85], secs: v87, time: v86, didSend: v39, from: v82 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.acceptPrice(v84), {
    at: './index.rsh:70:25:application',
    fs: ['at ./index.rsh:69:17:application call to [unknown function] (defined at: ./index.rsh:69:21:function exp)'],
    msg: 'acceptPrice',
    who: 'Collector'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v82, v84],
    evt_cnt: 0,
    funcNum: 1,
    lct: v86,
    onlyIf: true,
    out_tys: [],
    pay: [v84, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v92, time: v91, didSend: v48, from: v90 } = txn2;
      
      sim_r.txns.push({
        amt: v84,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v82,
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
    tys: [ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v48, from: v90 } = txn2;
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc2 = stdlib.T_Null;
  
  
  const v69 = stdlib.protect(ctc0, interact.bundleID, 'for Disposal\'s interact field bundleID');
  const v70 = stdlib.protect(ctc1, interact.bundleName, 'for Disposal\'s interact field bundleName');
  const v71 = stdlib.protect(ctc0, interact.deadline, 'for Disposal\'s interact field deadline');
  const v72 = stdlib.protect(ctc1, interact.disposalLocation, 'for Disposal\'s interact field disposalLocation');
  const v73 = stdlib.protect(ctc1, interact.disposalName, 'for Disposal\'s interact field disposalName');
  const v74 = stdlib.protect(ctc0, interact.price, 'for Disposal\'s interact field price');
  
  stdlib.protect(ctc2, await interact.registerBundle(v69, v73, v72, v70), {
    at: './index.rsh:62:53:application',
    fs: ['at ./index.rsh:54:16:application call to [unknown function] (defined at: ./index.rsh:54:20:function exp)'],
    msg: 'registerBundle',
    who: 'Disposal'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [null, v74, v71],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:65:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v83, v84, v85], secs: v87, time: v86, didSend: v39, from: v82 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v83, v84, v85], secs: v87, time: v86, didSend: v39, from: v82 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v92, time: v91, didSend: v48, from: v90 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByADAAEIJgIAAQAiNQAxGEEBDyhkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAPyMSRCM0ARJENARJIhJMNAISEUQpZEk1A4EgWzX/gASai5F0sDT/iADXsSKyATT/sggjshA0A1cAILIHs0IAU0iBoI0GiAC5IjQBEkQ0BEkiEkw0AhIRREk1BUlJSCg1/yJbNf4kWzX9gATQpk0tNP9QNP4WUDT9FlCwMQA0/hZQKUsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "internalType": "bool",
                "name": "v83",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "bool",
                "name": "v83",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
        "internalType": "struct T4",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516107a63803806107a6833981016040819052610022916101ee565b6000805543600355604080513381528251602080830191909152808401518051151583850152908101516060830152820151608082015290517f97a494553b8bd1c1c176bf0f80cfd33476231c5752ebf034f4cca56079a7affe9181900360a00190a1610091341560076100f6565b60408051808201825260006020808301828152338085528683015183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100ee926002929091019061011f565b5050506102c7565b8161011b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012b9061028c565b90600052602060002090601f01602090048101928261014d5760008555610193565b82601f1061016657805160ff1916838001178555610193565b82800160010185558215610193579182015b82811115610193578251825591602001919060010190610178565b5061019f9291506101a3565b5090565b5b8082111561019f57600081556001016101a4565b604051606081016001600160401b03811182821017156101e857634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561020157600080fd5b604080519081016001600160401b038111828210171561023157634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561024a57600080fd5b6102526101b8565b91506020840151801515811461026757600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806102a057607f821691505b602082108114156102c157634e487b7160e01b600052602260045260246000fd5b50919050565b6104d0806102d66000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610341565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610229565b604051610064929190610359565b6100c860016000541460096102c6565b6100e2813515806100db57506001548235145b600a6102c6565b6000808055600280546100f4906103b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103b6565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103eb565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101b892919061045d565b60405180910390a16101d18160200151341460086102c6565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561020e573d6000803e3d6000fd5b5060008080556001819055610225906002906102eb565b5050565b60006060600054600280805461023e906103b6565b80601f016020809104026020016040519081016040528092919081815260200182805461026a906103b6565b80156102b75780601f1061028c576101008083540402835291602001916102b7565b820191906000526020600020905b81548152906001019060200180831161029a57829003601f168201915b50505050509050915091509091565b816102255760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102f7906103b6565b6000825580601f10610307575050565b601f0160209004906000526020600020908101906103259190610328565b50565b5b8082111561033d5760008155600101610329565b5090565b60006040828403121561035357600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561038d57858101830151858201606001528201610371565b8181111561039f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103ca57607f821691505b6020821081141561035357634e487b7160e01b600052602260045260246000fd5b6000604082840312156103fd57600080fd5b6040516040810181811067ffffffffffffffff8211171561042e57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461044857600080fd5b81526020928301519281019290925250919050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461048b57600080fd5b8060408501525050939250505056fea2646970667358221220598b5b33ca8ee1277574b64b5bdbc66667e9aa94b6b5d22ad6968fb12e221a7164736f6c634300080c0033`,
  BytecodeLen: 1958,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:66:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:83:11:after expr stmt semicolon',
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
  "Disposal": Disposal
  };
export const _APIs = {
  };
