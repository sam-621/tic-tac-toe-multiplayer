import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player } from '@/interfaces/Game';

interface GameSliceSchema {
  player1: Player | null;
  player2: Player | null;
  roomCode: string;
}

const initialState: GameSliceSchema = {
  player1: null,
  player2: null,
  roomCode: ''
};

const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer1: (state, payload: PayloadAction<Player>) => {
      return {
        ...state,
        player1: payload.payload
      };
    },
    setPlayer2: (state, payload: PayloadAction<Player>) => {
      return {
        ...state,
        player2: payload.payload
      };
    },
    setRoomCode: (state, payload: PayloadAction<string>) => {
      return {
        ...state,
        roomCode: payload.payload
      };
    }
  }
});

export const { setPlayer1 } = GameSlice.actions;

export const GameReducer = GameSlice.reducer;
