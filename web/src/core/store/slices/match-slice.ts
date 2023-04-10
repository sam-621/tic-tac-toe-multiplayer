import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player } from '@/interfaces/Game';
import { BoardItemStatus, BoardPosition } from '@/interfaces/match';

const PLAYER_WHO_ALWAYS_GOES_FIRST = Player.CROSSES;

const INITIAL_BOARD = [
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY]
];

interface MatchSliceSchema {
  board: BoardState;
  currentTurn: Player;
  winner: Player | null;
  moves: number;
}

export type BoardState = BoardItemStatus[][];

const initialState: MatchSliceSchema = {
  board: INITIAL_BOARD,
  currentTurn: PLAYER_WHO_ALWAYS_GOES_FIRST,
  winner: null,
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
    setWinner: (state, { payload }: PayloadAction<SetWinnerPayload>) => {
      return {
        ...state,
        winner: payload.winner
      };
    }
  }
});

export const { updateBoard, changeTurn, resetBoard, setWinner } = MatchSlice.actions;

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

type SetWinnerPayload = {
  winner: Player;
};
