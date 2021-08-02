import React, {useEffect, useState} from 'react'

const Main = () => {

    let cardValueMatrix = {
        "ACE": 14,
        "KING": 13,
        "QUEEN": 12,
        "JACK": 11
    }

    //keep track of the deck id
    const [deckid, setDeckID] = useState(null)
    //assign cards to player1
    const [player1, setPlayer1Cards] = useState([])
    const [player1Pile, setPlayer1Pile] = useState(null)

    //keep track of which card is being played
    const [playerCard, setPlayerCard] = useState()
    const [dealerCard, setDealerCard] = useState()

    const getCards = async () => { 
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        const data = await response.json()
        const deckid = data.deck_id
        setDeckID(deckid)
        const deal1 = await fetch(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=26`)
        const deal1data = await deal1.json()
        setPlayer1Cards(deal1data.cards)

    }

        useEffect(() => {
           getCards()

        }, [])

        // console.log(deckid)
        // console.log(player1)
        let handleClick = async () => {
            let cardCodes = player1.map(({code}) => code);
            let cardCodesSplit = cardCodes.join();
            //console.log(cardCodesSplit);
            const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckid}/pile/player1/add/?cards=${cardCodesSplit}`);
            const data = await response.json();
            setPlayer1Pile(data);  
        }

        let calculateWiner = (card1, card2) => {
            let card1Value = card1
            let card2Value = card2 
            if (isNaN(card1)) {
                card1Value = cardValueMatrix[card1]
            }
            if (isNaN(card2)) {
                card2Value = cardValueMatrix[card2]
            } 
            card1Value = Number(card1Value)
            card2Value = Number(card2Value)
            if  (card1Value > card2Value) {
                console.log("player1 wins", card1Value, card2Value)
            } else if(card2Value > card1Value) {
                console.log("Computer wins", card1Value, card2Value);
            } else {
                console.log("WARRRRRRR!!!!!!!!!", card1Value,card2Value)
            }
        }

        let playRound = async () => {
            let player1Card = await fetch(`https://deckofcardsapi.com/api/deck/${deckid}/pile/player1/draw/?count=1`);
            let dealerCard = await fetch(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`);
            let player1CardData = await player1Card.json();
            let dealerCardData = await dealerCard.json();
            // console.log(player1CardData.cards[0], dealerCardData.cards[0])
            calculateWiner(player1CardData.cards[0].value,dealerCardData.cards[0].value);
            setPlayerCard(player1CardData.cards[0].image)
            setDealerCard(dealerCardData.cards[0].image)

        };
    
    return (
        <div>
            <h1>this is the  main pages</h1>
            <button onClick={handleClick}>Deal</button>
            <button onClick={playRound}>Play</button>
           { playerCard ? <img src={playerCard} alt="player card"></img> : <img src="https://www.vanishingincmagic.com/gallery/photos/jumbo-bicycle-card-blank-face-blue-backed-1.jpg" alt="blue playing card"></img>}
           { dealerCard ? <img src={dealerCard} alt="dealer card"></img> : <img src="https://www.vanishingincmagic.com/gallery/photos/jumbo-bicycle-card-blank-face-blue-backed-1.jpg" alt="blue playing card"></img>}
        </div>
    )
}
export default Main