import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BoardItemStatus } from '@/interfaces/match';

interface MatchSliceSchema {
  board: BoardItemStatus[][];
}

const initialState: MatchSliceSchema = {
  board: [
    [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
    [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
    [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY]
  ]
};

const MatchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    updateBoard: (state, { payload }: PayloadAction<UpdateBoardPayload>) => {
      const [x, y] = payload.position;

      const tempBoard = state.board;
      tempBoard[x][y] = payload.type;

      return {
        ...state,
        board: tempBoard
      };
    }
  }
});

export const { updateBoard } = MatchSlice.actions;

export const MatchReducer = MatchSlice.reducer;

// Payloads types

type UpdateBoardPayload = {
  type: BoardItemStatus;
  position: [number, number];
};
