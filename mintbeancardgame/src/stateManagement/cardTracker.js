import { createSlice } from "@reduxjs/toolkit";


export const player1Slice = createSlice({
    name: "player1",
    initialState: {
        hand: [], 
        score: 0
    },

    reducers: {
        addToScore: (state, action)=>{},
        addToHand:(state, action)=>{},
        discard:(state, action)=>{},
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
        addToScore: (state, action)=>{},
        addToHand:(state, action)=>{},
        discard:(state, action)=>{},
        playCards:(state, action)=>{}
    }
})

export const discardPileSlice = createSlice({
    name: "discardPile",
    initialState: [],
    reducers: {
        addToDiscard: (state, action)=>{},
        takeFromDiscard: (state, action)=>{}
    }
})

//exports here