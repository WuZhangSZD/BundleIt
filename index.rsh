'reach 0.1'

const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (handAlice, handBob) =>  
    ( ( handAlice + ( 4 - handBob ) ) % 3 );

forall(UInt, handAlice =>
    forall(UInt, handBob =>
        assert(isOutcome(winner(handAlice,handBob)))))

forall(UInt, (hand) =>
    assert(winner(hand,hand)==DRAW))
const Player = {
    ...hasRandom,
    getHand: Fun([],UInt),
    seeOutcome: Fun([UInt],Null),
    informTimeOut: Fun([],Null),
}
export const main = Reach.App(()=>{

    const Alice = Participant('Alice', {
        //Specify alice use case
        ...Player,
        wager: UInt,
        deadline: UInt,
    });
    const Bob = Participant('Bob', {
        //Specify Bob use case
        ...Player,
        acceptWager: Fun([UInt],Null),
    });
    const informTimeOut = () =>{
        each([Alice, Bob],()=>{
            interact.informTimeOut();
        })
    };
    init();
    //write program here
    Alice.only(()=>{
        const amount = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    })
    Alice.publish(amount,deadline)
        .pay(amount);
    commit();

    Bob.only(()=>{
        interact.acceptWager(amount);
    })
    Bob.pay(amount)
            .timeout(relativeTime(deadline),()=>closeTo(Alice,informTimeOut));

    
    var outcome = DRAW;
    invariant(isOutcome(outcome)&&balance()==2*amount);
    while(outcome==DRAW)
    {
        commit();
        Alice.only(()=>{
            const _handAlice = interact.getHand();
            const [_commitmentAlice, _saltAlice] = makeCommitment(interact, _handAlice);
            const commitAlice = declassify(_commitmentAlice);            

        });
        Alice.publish(commitAlice)
            .timeout(relativeTime(deadline),()=>closeTo(Alice,informTimeOut));
        commit();
        unknowable(Bob,Alice(_handAlice,_saltAlice));
        Bob.only(()=>{
            const handBob = declassify(interact.getHand());
        })
        Bob.publish(handBob)
            .timeout(relativeTime(deadline),()=>closeTo(Alice,informTimeOut));

        commit();
        Alice.only(()=>{
            const saltAlice = declassify(_saltAlice);
            const handAlice = declassify(_handAlice);
        })
        Alice.publish(handAlice, saltAlice)
            .timeout(relativeTime(deadline),()=>closeTo(Alice,informTimeOut));

        checkCommitment(commitAlice, saltAlice, handAlice);

        outcome = winner(handAlice, handBob);
        continue;
    }


    const [forAlice,forBob] = 
        outcome == A_WINS ?  [2,0]:
        outcome == B_WINS ?  [0,2]:
                        [1,1];
    
    transfer(forAlice * amount).to(Alice);
    transfer(forBob * amount).to(Bob);
    commit()

    each([Alice, Bob],() => {
        interact.seeOutcome(outcome)
    })
})