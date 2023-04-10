import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player } from '@/interfaces/Game';
import { BoardItemStatus, BoardPosition } from '@/interfaces/match';

const PLAYER_WHO_ALWAYS_GOES_FIRST = Player.CROSSES;

interface MatchSliceSchema {
  board: BoardState;
  currentTurn: Player;
  moves: number;
}

export type BoardState = BoardItemStatus[][];

const initialState: MatchSliceSchema = {
  board: [
    [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
    [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
    [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY]
  ],
  currentTurn: PLAYER_WHO_ALWAYS_GOES_FIRST,
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
    }
  }
});

export const { updateBoard, changeTurn } = MatchSlice.actions;

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
