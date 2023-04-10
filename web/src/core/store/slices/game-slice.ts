import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameMode, GameStatus, Player } from '@/interfaces/Game';

const INITIAL_PLAYER_1_STATE = Player.CROSSES;
const INITIAL_GAME_STATUS = GameStatus.CREATING;
const INITIAL_GAME_MODE = GameMode.LOCAL_MACHINE;

interface GameSliceSchema {
  player1: Player;
  player2: Player | null;
  roomCode: string;
  status: GameStatus;
  mode: GameMode;
}

const initialState: GameSliceSchema = {
  player1: INITIAL_PLAYER_1_STATE,
  player2: null,
  roomCode: '',
  status: INITIAL_GAME_STATUS,
  mode: INITIAL_GAME_MODE
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
    },
    restartGame: state => {
      return {
        ...state,
        player1: INITIAL_PLAYER_1_STATE,
        player2: null,
        roomCode: '',
        status: INITIAL_GAME_STATUS,
        mode: INITIAL_GAME_MODE
      };
    }
  }
});

export const { setPlayer1, setPlayer2, setRoomCode, setGameStatus, setGameMode, restartGame } =
  GameSlice.actions;

export const GameReducer = GameSlice.reducer;
