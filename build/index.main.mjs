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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v306 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v307 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v307, v306],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v307, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v311, v312], secs: v314, time: v313, didSend: v53, from: v310 } = txn1;
      
      sim_r.txns.push({
        amt: v311,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v323 = stdlib.safeAdd(v313, v312);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v311, v312], secs: v314, time: v313, didSend: v53, from: v310 } = txn1;
  ;
  const v323 = stdlib.safeAdd(v313, v312);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v323],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v310, v311, v312, v323],
      evt_cnt: 0,
      funcNum: 2,
      lct: v313,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v486, time: v485, didSend: v259, from: v484 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v486, time: v485, didSend: v259, from: v484 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeOut(), {
      at: './index.rsh:36:35:application',
      fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:53:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v329, time: v328, didSend: v62, from: v327 } = txn2;
    const v331 = stdlib.add(v311, v311);
    ;
    let v332 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v333 = v328;
    let v340 = v331;
    
    let txn3 = txn2;
    while (await (async () => {
      const v348 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v348;})()) {
      const v355 = stdlib.safeAdd(v333, v312);
      const v359 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:62:48:application',
        fs: ['at ./index.rsh:61:19:application call to [unknown function] (defined at: ./index.rsh:61:22:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v360 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:63:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:61:19:application call to [unknown function] (defined at: ./index.rsh:61:22:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v361 = stdlib.digest([ctc0, ctc0], [v360, v359]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v310, v311, v312, v327, v340, v355, v361],
        evt_cnt: 1,
        funcNum: 4,
        lct: v333,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:67:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v364], secs: v366, time: v365, didSend: v88, from: v363 } = txn4;
          
          ;
          const v374 = stdlib.safeAdd(v365, v312);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v355],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v310, v311, v312, v327, v340, v355],
          evt_cnt: 0,
          funcNum: 5,
          lct: v333,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v443, time: v442, didSend: v203, from: v441 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v310,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v443, time: v442, didSend: v203, from: v441 } = txn5;
        ;
        const v444 = stdlib.addressEq(v310, v441);
        const v445 = stdlib.addressEq(v327, v441);
        const v446 = v444 ? true : v445;
        stdlib.assert(v446, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:68:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeOut(), {
          at: './index.rsh:36:35:application',
          fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:68:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v364], secs: v366, time: v365, didSend: v88, from: v363 } = txn4;
        ;
        const v367 = stdlib.addressEq(v310, v363);
        stdlib.assert(v367, {
          at: './index.rsh:67:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v374 = stdlib.safeAdd(v365, v312);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v374],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v310, v311, v312, v327, v340, v364, v374],
            evt_cnt: 0,
            funcNum: 7,
            lct: v365,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v425, time: v424, didSend: v169, from: v423 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v310,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v425, time: v424, didSend: v169, from: v423 } = txn6;
          ;
          const v426 = stdlib.addressEq(v310, v423);
          const v427 = stdlib.addressEq(v327, v423);
          const v428 = v426 ? true : v427;
          stdlib.assert(v428, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:75:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeOut(), {
            at: './index.rsh:36:35:application',
            fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:75:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v380], secs: v382, time: v381, didSend: v98, from: v379 } = txn5;
          ;
          const v383 = stdlib.addressEq(v327, v379);
          stdlib.assert(v383, {
            at: './index.rsh:74:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v390 = stdlib.safeAdd(v381, v312);
          const txn6 = await (ctc.sendrecv({
            args: [v310, v311, v312, v327, v340, v364, v380, v390, v359, v360],
            evt_cnt: 2,
            funcNum: 8,
            lct: v381,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:82:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v395, v396], secs: v398, time: v397, didSend: v108, from: v394 } = txn6;
              
              ;
              const v402 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:23:decimal', stdlib.UInt_max, '4'), v380);
              const v403 = stdlib.safeAdd(v395, v402);
              const v404 = stdlib.safeMod(v403, stdlib.checkedBigNumberify('./index.rsh:7:41:decimal', stdlib.UInt_max, '3'));
              const cv332 = v404;
              const cv333 = v397;
              const cv340 = v340;
              
              await (async () => {
                const v332 = cv332;
                const v333 = cv333;
                const v340 = cv340;
                
                if (await (async () => {
                  const v348 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v348;})()) {
                  const v355 = stdlib.safeAdd(v333, v312);
                  sim_r.isHalt = false;
                  }
                else {
                  const v459 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v460 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                  const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  const v463 = v460 ? v461 : v462;
                  const v464 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v465 = v459 ? v464 : v463;
                  const v466 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '0')];
                  const v467 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '1')];
                  const v468 = stdlib.safeMul(v466, v311);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v310,
                    tok: undefined /* Nothing */
                    });
                  const v473 = stdlib.safeMul(v467, v311);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v327,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v390],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v310, v311, v312, v327, v340, v364, v380, v390],
              evt_cnt: 0,
              funcNum: 9,
              lct: v381,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v407, time: v406, didSend: v135, from: v405 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v310,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v407, time: v406, didSend: v135, from: v405 } = txn7;
            ;
            const v408 = stdlib.addressEq(v310, v405);
            const v409 = stdlib.addressEq(v327, v405);
            const v410 = v408 ? true : v409;
            stdlib.assert(v410, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:83:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeOut(), {
              at: './index.rsh:36:35:application',
              fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:83:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeOut',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v395, v396], secs: v398, time: v397, didSend: v108, from: v394 } = txn6;
            ;
            const v399 = stdlib.addressEq(v310, v394);
            stdlib.assert(v399, {
              at: './index.rsh:82:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v400 = stdlib.digest([ctc0, ctc0], [v396, v395]);
            const v401 = stdlib.digestEq(v364, v400);
            stdlib.assert(v401, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:85:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v402 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:23:decimal', stdlib.UInt_max, '4'), v380);
            const v403 = stdlib.safeAdd(v395, v402);
            const v404 = stdlib.safeMod(v403, stdlib.checkedBigNumberify('./index.rsh:7:41:decimal', stdlib.UInt_max, '3'));
            const cv332 = v404;
            const cv333 = v397;
            const cv340 = v340;
            
            v332 = cv332;
            v333 = cv333;
            v340 = cv340;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v459 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v460 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v463 = v460 ? v461 : v462;
    const v464 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v465 = v459 ? v464 : v463;
    const v466 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '0')];
    const v467 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '1')];
    const v468 = stdlib.safeMul(v466, v311);
    ;
    const v473 = stdlib.safeMul(v467, v311);
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v332), {
      at: './index.rsh:102:28:application',
      fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v311, v312], secs: v314, time: v313, didSend: v53, from: v310 } = txn1;
  ;
  const v323 = stdlib.safeAdd(v313, v312);
  stdlib.protect(ctc1, await interact.acceptWager(v311), {
    at: './index.rsh:50:29:application',
    fs: ['at ./index.rsh:49:13:application call to [unknown function] (defined at: ./index.rsh:49:16:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v310, v311, v312, v323],
    evt_cnt: 0,
    funcNum: 1,
    lct: v313,
    onlyIf: true,
    out_tys: [],
    pay: [v311, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v329, time: v328, didSend: v62, from: v327 } = txn2;
      
      const v331 = stdlib.add(v311, v311);
      sim_r.txns.push({
        amt: v311,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v332 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v333 = v328;
      const v340 = v331;
      
      if (await (async () => {
        const v348 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v348;})()) {
        const v355 = stdlib.safeAdd(v333, v312);
        sim_r.isHalt = false;
        }
      else {
        const v459 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v460 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v463 = v460 ? v461 : v462;
        const v464 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v465 = v459 ? v464 : v463;
        const v466 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '0')];
        const v467 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '1')];
        const v468 = stdlib.safeMul(v466, v311);
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        const v473 = stdlib.safeMul(v467, v311);
        sim_r.txns.push({
          kind: 'from',
          to: v327,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v323],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v310, v311, v312, v323],
      evt_cnt: 0,
      funcNum: 2,
      lct: v313,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v486, time: v485, didSend: v259, from: v484 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v486, time: v485, didSend: v259, from: v484 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeOut(), {
      at: './index.rsh:36:35:application',
      fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:53:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v329, time: v328, didSend: v62, from: v327 } = txn2;
    const v331 = stdlib.add(v311, v311);
    ;
    let v332 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v333 = v328;
    let v340 = v331;
    
    let txn3 = txn2;
    while (await (async () => {
      const v348 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v348;})()) {
      const v355 = stdlib.safeAdd(v333, v312);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v355],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v310, v311, v312, v327, v340, v355],
          evt_cnt: 0,
          funcNum: 5,
          lct: v333,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v443, time: v442, didSend: v203, from: v441 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v310,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v443, time: v442, didSend: v203, from: v441 } = txn5;
        ;
        const v444 = stdlib.addressEq(v310, v441);
        const v445 = stdlib.addressEq(v327, v441);
        const v446 = v444 ? true : v445;
        stdlib.assert(v446, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:68:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeOut(), {
          at: './index.rsh:36:35:application',
          fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:68:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v364], secs: v366, time: v365, didSend: v88, from: v363 } = txn4;
        ;
        const v367 = stdlib.addressEq(v310, v363);
        stdlib.assert(v367, {
          at: './index.rsh:67:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v374 = stdlib.safeAdd(v365, v312);
        const v378 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:72:56:application',
          fs: ['at ./index.rsh:71:17:application call to [unknown function] (defined at: ./index.rsh:71:20:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v310, v311, v312, v327, v340, v364, v374, v378],
          evt_cnt: 1,
          funcNum: 6,
          lct: v365,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:74:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v380], secs: v382, time: v381, didSend: v98, from: v379 } = txn5;
            
            ;
            const v390 = stdlib.safeAdd(v381, v312);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v374],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v310, v311, v312, v327, v340, v364, v374],
            evt_cnt: 0,
            funcNum: 7,
            lct: v365,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v425, time: v424, didSend: v169, from: v423 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v310,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v425, time: v424, didSend: v169, from: v423 } = txn6;
          ;
          const v426 = stdlib.addressEq(v310, v423);
          const v427 = stdlib.addressEq(v327, v423);
          const v428 = v426 ? true : v427;
          stdlib.assert(v428, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:75:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:36:35:application',
            fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:75:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v380], secs: v382, time: v381, didSend: v98, from: v379 } = txn5;
          ;
          const v383 = stdlib.addressEq(v327, v379);
          stdlib.assert(v383, {
            at: './index.rsh:74:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v390 = stdlib.safeAdd(v381, v312);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v390],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v310, v311, v312, v327, v340, v364, v380, v390],
              evt_cnt: 0,
              funcNum: 9,
              lct: v381,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v407, time: v406, didSend: v135, from: v405 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v310,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v407, time: v406, didSend: v135, from: v405 } = txn7;
            ;
            const v408 = stdlib.addressEq(v310, v405);
            const v409 = stdlib.addressEq(v327, v405);
            const v410 = v408 ? true : v409;
            stdlib.assert(v410, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:83:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeOut(), {
              at: './index.rsh:36:35:application',
              fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:34:30:function exp)', 'at ./index.rsh:83:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeOut',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v395, v396], secs: v398, time: v397, didSend: v108, from: v394 } = txn6;
            ;
            const v399 = stdlib.addressEq(v310, v394);
            stdlib.assert(v399, {
              at: './index.rsh:82:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v400 = stdlib.digest([ctc0, ctc0], [v396, v395]);
            const v401 = stdlib.digestEq(v364, v400);
            stdlib.assert(v401, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:85:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v402 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:23:decimal', stdlib.UInt_max, '4'), v380);
            const v403 = stdlib.safeAdd(v395, v402);
            const v404 = stdlib.safeMod(v403, stdlib.checkedBigNumberify('./index.rsh:7:41:decimal', stdlib.UInt_max, '3'));
            const cv332 = v404;
            const cv333 = v397;
            const cv340 = v340;
            
            v332 = cv332;
            v333 = cv333;
            v340 = cv340;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v459 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v460 = stdlib.eq(v332, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v461 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v462 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v463 = v460 ? v461 : v462;
    const v464 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v465 = v459 ? v464 : v463;
    const v466 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '0')];
    const v467 = v465[stdlib.checkedBigNumberify('./index.rsh:92:11:array', stdlib.UInt_max, '1')];
    const v468 = stdlib.safeMul(v466, v311);
    ;
    const v473 = stdlib.safeMul(v467, v311);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v332), {
      at: './index.rsh:102:28:application',
      fs: ['at ./index.rsh:101:9:application call to [unknown function] (defined at: ./index.rsh:101:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAQAAFQCAUJIAcoeAKAAQQDWDAmAwEAAQEAIjUAMRhBBOIqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAIrSSEHDEABNkklDEAA3UkhBQxAAFYhBRJEIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gASiBWaOsDIGNAMhC1sPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0ID+kghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJIls1/iVbNf2ABDUaKtA0/hZQNP0WULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT9FjT+FlABEkQ0/zQDIQZbNAMhCFs0A1cwIDT+IQw0AyEJWwkIIQ0YMgY0AyRbQgLGSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE4huzqbAyBjQDIQlbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAydJgQYMQACXSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpXACA1/yEGWzX+IQhbNf1XMCA1/CRbNftXWCA1+kk1BRc1+YAEcO3vejT5FlCwMgY0AyEJWwxENPwxABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUDT4FlAoSwFXAH9nKUsBV38JZ0ghBTUBMgY1AkICpUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABMyZklywMgY0AyEOWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgI5SSEKDEAA0UkhDAxAAIlIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hCFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDlsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIBviEKEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgFhSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhD1sMRDT/iAGZNANXACA0/zQDIQhbMQAjMgY0/0kIQgBfSIGgjQaIAXkiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAUkyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCANA1/zX+Nf01/DX7Nfo1+TT9IxJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAjIAQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAAAAAAAAAAAAjT9IhJNgBAAAAAAAAAAAgAAAAAAAAAANP0hChJNNfixIrIBNPgiWzT6C7III7IQNPmyB7OxIrIBNPglWzT6C7III7IQNPyyB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQ0xNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
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
                "internalType": "uint256",
                "name": "v311",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v312",
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
                "internalType": "uint256",
                "name": "v311",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v312",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
    "name": "_reach_e7",
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
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
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
    "name": "_reach_e8",
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
    "name": "_reach_e9",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
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
        "internalType": "struct T7",
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
                "internalType": "uint256",
                "name": "v380",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
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
    "name": "_reach_m8",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001e0d38038062001e0d8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611a90806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611621565b610197565b6100a16100e8366004611621565b610326565b3480156100f957600080fd5b506001546100b4565b6100a161011036600461163d565b6104a4565b6100a1610123366004611621565b6106d3565b6100a1610136366004611621565b61086a565b6100a1610149366004611621565b610b0a565b34801561015a57600080fd5b50610163610d4d565b6040516100be92919061164f565b6100a161017f366004611621565b610dea565b6100a1610192366004611621565b610f44565b6101a7600160005414600961109a565b6101c1813515806101ba57506001548235145b600a61109a565b6000808055600280546101d3906116ac565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906116ac565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906116fd565b905061027781606001514310600b61109a565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a8929190611776565b60405180910390a16102c181602001513414600861109a565b6102c9611445565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152518001602082015160400152610321816110c0565b505050565b610336600160005414600d61109a565b6103508135158061034957506001548235145b600e61109a565b600080805560028054610362906116ac565b80601f016020809104026020016040519081016040528092919081815260200182805461038e906116ac565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b50505050508060200190518101906103f391906116fd565b90506104078160600151431015600f61109a565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051610438929190611776565b60405180910390a161044c3415600c61109a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610489573d6000803e3d6000fd5b50600080805560018190556104a09060029061149e565b5050565b6104b4600960005414602761109a565b6104ce813515806104c757506001548235145b602861109a565b6000808055600280546104e0906116ac565b80601f016020809104026020016040519081016040528092919081815260200182805461050c906116ac565b80156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b505050505080602001905181019061057191906117b3565b90506105848160e001514310602961109a565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16105df3415602461109a565b80516105f7906001600160a01b03163314602561109a565b604080516106449161061e9190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a0015114602661109a565b61064c611445565b815181516001600160a01b03918216905260208084015183518201526040808501518451909101526060808501518451931692019190915260c08301516106ae916106a79190860135906106a2906004906112f6565b61134b565b6003611398565b60208083018051929092528151439101526080830151905160400152610321816110c0565b6106e3600560005414601761109a565b6106fd813515806106f657506001548235145b601861109a565b60008080556002805461070f906116ac565b80601f016020809104026020016040519081016040528092919081815260200182805461073b906116ac565b80156107885780601f1061075d57610100808354040283529160200191610788565b820191906000526020600020905b81548152906001019060200180831161076b57829003601f168201915b50505050508060200190518101906107a0919061185f565b90506107b48160a00151431015601961109a565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107e5929190611776565b60405180910390a16107f93415601561109a565b805161082d906001600160a01b031633146108235760608201516001600160a01b03163314610826565b60015b601661109a565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610489573d6000803e3d6000fd5b61087a600760005414601c61109a565b6108948135158061088d57506001548235145b601d61109a565b6000808055600280546108a6906116ac565b80601f01602080910402602001604051908101604052809291908181526020018280546108d2906116ac565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b505050505080602001905181019061093791906118f3565b905061094f6040518060200160405280600081525090565b6109608260c001514310601e61109a565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3384604051610991929190611991565b60405180910390a16109a53415601a61109a565b60608201516109c0906001600160a01b03163314601b61109a565b6109ce43836040015161134b565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610adf9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b039291906114db565b5050505050565b610b1a600560005414601261109a565b610b3481351580610b2d57506001548235145b601361109a565b600080805560028054610b46906116ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610b72906116ac565b8015610bbf5780601f10610b9457610100808354040283529160200191610bbf565b820191906000526020600020905b815481529060010190602001808311610ba257829003601f168201915b5050505050806020019051810190610bd7919061185f565b9050610bef6040518060200160405280600081525090565b610c008260a001514310601461109a565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c31929190611991565b60405180910390a1610c453415601061109a565b8151610c5d906001600160a01b03163314601161109a565b610c6b43836040015161134b565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610adf565b600060606000546002808054610d62906116ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8e906116ac565b8015610ddb5780601f10610db057610100808354040283529160200191610ddb565b820191906000526020600020905b815481529060010190602001808311610dbe57829003601f168201915b50505050509050915091509091565b610dfa600760005414602161109a565b610e1481351580610e0d57506001548235145b602261109a565b600080805560028054610e26906116ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610e52906116ac565b8015610e9f5780601f10610e7457610100808354040283529160200191610e9f565b820191906000526020600020905b815481529060010190602001808311610e8257829003601f168201915b5050505050806020019051810190610eb791906118f3565b9050610ecb8160c00151431015602361109a565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610efc929190611776565b60405180910390a1610f103415601f61109a565b805161082d906001600160a01b03163314610f3a5760608201516001600160a01b03163314610f3d565b60015b602061109a565b610f54600960005414602c61109a565b610f6e81351580610f6757506001548235145b602d61109a565b600080805560028054610f80906116ac565b80601f0160208091040260200160405190810160405280929190818152602001828054610fac906116ac565b8015610ff95780601f10610fce57610100808354040283529160200191610ff9565b820191906000526020600020905b815481529060010190602001808311610fdc57829003601f168201915b505050505080602001905181019061101191906117b3565b90506110258160e00151431015602e61109a565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611056929190611776565b60405180910390a161106a3415602a61109a565b805161082d906001600160a01b031633146110945760608201516001600160a01b03163314611097565b60015b602b5b816104a05760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6110c861155f565b602082015151600114156111e3576110f082602001516020015183600001516040015161134b565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906111dd9291906114db565b50505050565b6020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251830191909152908301515114611244576020820151511561123a57806040015161124a565b806020015161124a565b80606001515b608082018190528251805191516020909101516001600160a01b03909216916108fc91611276916113e6565b6040518115909202916000818181858888f1935050505015801561129e573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc6112ce8360800151602001518560000151602001516113e6565b6040518115909202916000818181858888f19350505050158015610489573d6000803e3d6000fd5b60008261130383826119ce565b91508111156113455760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016110b7565b92915050565b60008261135883826119e5565b91508110156113455760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016110b7565b6000816113d55760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016110b7565b6113df8284611a13565b9392505050565b600081158061140a575082826113fc8183611a27565b92506114089083611a46565b145b6113455760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016110b7565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161149960405180606001604052806000815260200160008152602001600081525090565b905290565b5080546114aa906116ac565b6000825580601f106114ba575050565b601f0160209004906000526020600020908101906114d891906115f4565b50565b8280546114e7906116ac565b90600052602060002090601f016020900481019282611509576000855561154f565b82601f1061152257805160ff191683800117855561154f565b8280016001018555821561154f579182015b8281111561154f578251825591602001919060010190611534565b5061155b9291506115f4565b5090565b6040518060a001604052806000815260200161158e604051806040016040528060008152602001600081525090565b81526020016115b0604051806040016040528060008152602001600081525090565b81526020016115d2604051806040016040528060008152602001600081525090565b8152602001611499604051806040016040528060008152602001600081525090565b5b8082111561155b57600081556001016115f5565b60006040828403121561161b57600080fd5b50919050565b60006040828403121561163357600080fd5b6113df8383611609565b60006060828403121561161b57600080fd5b82815260006020604081840152835180604085015260005b8181101561168357858101830151858201606001528201611667565b81811115611695576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806116c057607f821691505b6020821081141561161b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146116f857600080fd5b919050565b60006080828403121561170f57600080fd5b6040516080810181811067ffffffffffffffff8211171561174057634e487b7160e01b600052604160045260246000fd5b60405261174c836116e1565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146117a457600080fd5b80604085015250509392505050565b60006101008083850312156117c757600080fd5b6040519081019067ffffffffffffffff821181831017156117f857634e487b7160e01b600052604160045260246000fd5b81604052611805846116e1565b81526020840151602082015260408401516040820152611827606085016116e1565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c0828403121561187157600080fd5b60405160c0810181811067ffffffffffffffff821117156118a257634e487b7160e01b600052604160045260246000fd5b6040526118ae836116e1565b815260208301516020820152604083015160408201526118d0606084016116e1565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561190557600080fd5b60405160e0810181811067ffffffffffffffff8211171561193657634e487b7160e01b600052604160045260246000fd5b604052611942836116e1565b81526020830151602082015260408301516040820152611964606084016116e1565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152606081016113df602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b6000828210156119e0576119e06119b8565b500390565b600082198211156119f8576119f86119b8565b500190565b634e487b7160e01b600052601260045260246000fd5b600082611a2257611a226119fd565b500690565b6000816000190483118215151615611a4157611a416119b8565b500290565b600082611a5557611a556119fd565b50049056fea2646970667358221220c5a3bf4766de0d2e90bdb06a59d114d5c03c715ad1ffca8c2f8c0e62030dfad664736f6c634300080c0033`,
  BytecodeLen: 7693,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:53:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:99:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:60:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:68:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:69:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:75:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:77:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:83:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
