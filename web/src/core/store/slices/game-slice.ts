import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameMode, GameStatus, Player } from '@/interfaces/Game';

interface GameSliceSchema {
  player1: Player | null;
  player2: Player | null;
  roomCode: string;
  status: GameStatus;
  mode: GameMode;
}

const initialState: GameSliceSchema = {
  player1: Player.CROSSES,
  player2: null,
  roomCode: '',
  status: GameStatus.CREATING,
  mode: GameMode.LOCAL_MACHINE
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
    },
    setGameStatus: (state, payload: PayloadAction<GameStatus>) => {
      return {
        ...state,
        status: payload.payload
      };
    },
    setGameMode: (state, payload: PayloadAction<GameMode>) => {
      return {
        ...state,
        mode: payload.payload
      };
    }
  }
});

export const { setPlayer1, setPlayer2, setRoomCode, setGameStatus, setGameMode } =
  GameSlice.actions;

export const GameReducer = GameSlice.reducer;
