import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player } from '@/interfaces/Game';
import { BoardItemStatus, BoardPosition } from '@/interfaces/match';

const PLAYER_WHO_ALWAYS_GOES_FIRST = Player.CROSSES;

const INITIAL_BOARD: BoardState = [
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY]
];

const INITIAL_MATCH_STATUS: MatchStatus = {
  winner: null,
  isTied: false
};

export type MatchStatus = {
  winner: Player | null;
  isTied: boolean;
};

interface MatchSliceSchema {
  board: BoardState;
  currentTurn: Player;
  matchStatus: MatchStatus;
  moves: number;
}

export type BoardState = BoardItemStatus[][];

const initialState: MatchSliceSchema = {
  board: INITIAL_BOARD,
  currentTurn: PLAYER_WHO_ALWAYS_GOES_FIRST,
  matchStatus: INITIAL_MATCH_STATUS,
  moves: 0
};

const MatchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    updateBoard: (state, { payload }: PayloadAction<UpdateBoardPayload>) => {
      const { x, y } = payload.position;

      return {
        ...state,
        board: state.board.map((row, i) =>
          row.map((item, j) =>
            i === x && y === j && item === BoardItemStatus.EMPTY ? payload.type : item
          )
        )
      };
    },
    changeTurn: (state, { payload }: PayloadAction<ChangeTurnPayload>) => {
      return {
        ...state,
        currentTurn: payload.turn === Player.CROSSES ? Player.NOUGHTS : Player.CROSSES,
        moves: payload.moves
      };
    },
    resetBoard: state => {
      return {
        ...state,
        board: INITIAL_BOARD
      };
    },
    setMatchStatus: (state, { payload }: PayloadAction<setMatchStatusPayload>) => {
      return {
        ...state,
        matchStatus: payload
      };
    }
  }
});

export const { updateBoard, changeTurn, resetBoard, setMatchStatus } = MatchSlice.actions;

export const MatchReducer = MatchSlice.reducer;

// Payloads types

type UpdateBoardPayload = {
  type: BoardItemStatus;
  position: BoardPosition;
};

type ChangeTurnPayload = {
  turn: Player;
  moves: number;
};

type setMatchStatusPayload = MatchStatus;
