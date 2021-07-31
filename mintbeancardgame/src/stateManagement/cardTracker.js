import { createSlice } from "@reduxjs/toolkit";


export const player1Slice = createSlice({
    name: "player1",
    initialState: {
        hand: [], 
        score: 0
    },

    reducers: {
        addToScore: (state, action)=>{
            state.score += action.payload;
        },
        addToHand:(state, action)=>{
            //this assumes action.payload is an array of cards
            state.hand = state.hand.concat(action.payload);
        },
        discard:(state, action)=>{
            //assuming action.payload is an array of cards
            state.hand = state.hand.filter((card)=>!action.payload.includes(card));
        },
        playCards:(state, action)=>{}
    }
})

export const player2Slice = createSlice({
    name: "player2",
    initialState: {
        hand: [], 
        score: 0
    },

    reducers: {
        addToScore: (state, action)=>{
            state.score += action.payload;
        },
        addToHand:(state, action)=>{
            //this assumes action.payload is an array of cards
            state.hand = state.hand.concat(action.payload);
        },
        discard:(state, action)=>{
            //assuming action.payload is an array of cards
            state.hand = state.hand.filter((card)=>!action.payload.includes(card));
        },
        playCards:(state, action)=>{}
    }
})

export const discardPileSlice = createSlice({
    name: "discardPile",
    initialState: {
       discardPile: []
    },
    reducers: {
        addToDiscard: (state, action)=>{
            state.discardPile = state.discardPile.concat(action.payload);
        },
        takeFromDiscard: (state, action)=>{
            state.discardPile = state.discardPile.fileter((card)=>!action.payload.includes(card))
        }
    }
})

//exports here

