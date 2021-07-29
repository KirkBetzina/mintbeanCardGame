import React, {useState} from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

//game instructions taken from: https://bicyclecards.com/how-to-play/rummy-rum/

const ModalInstructions = (props) => {

        const [modalOpen, setModalOpen] = useState(false)

        return (
          <>
            <Button
              color="primary"
              type="button"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Instructions
            </Button>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
              <div className=" modal-header">
                <h5 className=" modal-title" id="exampleModalLabel">
                  Instructions - How to Play
                </h5>
                <button
                  aria-label="Close"
                  className=" close"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <ModalBody> 
                  <p><strong>Card Ranking</strong></p>
                  <p>K(high), Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2, A(low)</p>
                  <p><strong>The Deal</strong></p>
                  <p>Dealer gives each player one card at a time, each player is given 7 cards</p>
                  <p>Remaining cards are placed face down on the table to form the draw pile</p>
                  <p>Top card is removed from the draw pile and placed face up next to the draw pile and becomes the first card in the discard pile</p>
                <p><strong>Object of the Game</strong></p>
                <p>Each player forms matched sets consisting of groups of three or four of a kind, or sequences of three or more cards of the same suit</p>
                <p><strong>The Play</strong></p>
                <p>Players may either draw the top card off the draw pile or the top card of the discard pile and add it to their hand</p>
                <p>Players may also lay down a matched set on the table.  If the player cannot lay down a matched set, they discard one card face up on the discard pile.</p>
                <p>The player may not discard the same card drawn from the draw pile on that turn</p>
                <p><strong>Laying Off</strong></p>
                <p>Player may add one or more from their hand to any matched set on the table. </p>
                <p>Examples: if there are threes present, may add the fourth three; if 10, 9, 8 are present, they may add J, Q or 7, 6 of the same suit </p>
                <p><strong>Going Out</strong></p>
                <p>When a player gets rid of all their cards, they WIN the game!</p>
                <p>If all of their remaining cards are matched, the player may lay them down without discarding on their last turn.  This will end the game. </p>
                <p>If the last card of the draw pile has been drawn and no player is out, the next player may either take the top card on the discard pile or may turn the discard pile over to form a new stock draw pile (without shuffling) and draw the top card.  Play then continues as before. </p>
                <p><strong>Scoring</strong></p>
                <p>Each player pays to the winner the pip value of the cards remaining in their hand.  Face cards count 10 each, aces 1 each, and every other card its pip value.</p>
                <p>A player goes "rummy" when they get rid of all their cards in their hand at once, without having laid down any cards previusly. If this occurs, every other player pays double, twice the pip value of each card remaining in their hand.</p>
                </ModalBody>
              <ModalFooter>
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  Close
                </Button>
                {/* <Button color="primary" type="button">
                  Save changes
                </Button> */}
              </ModalFooter>
            </Modal>
          </>
        );
}

export default ModalInstructions




