import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BoardItemStatus } from '@/interfaces/match';

interface MatchSliceSchema {
  board: BoardItemStatus[][];
}

const initialState: MatchSliceSchema = {
  board: [
    [BoardItemStatus.EMPTY, BoardItemStatus.CROSS, BoardItemStatus.EMPTY],
    [BoardItemStatus.EMPTY, BoardItemStatus.NOUGHT, BoardItemStatus.EMPTY],
    [BoardItemStatus.NOUGHT, BoardItemStatus.EMPTY, BoardItemStatus.CROSS]
  ]
};

const MatchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    updateBoard: (state, { payload }: PayloadAction<UpdateBoardPayload>) => {
      const [x, y] = payload.position;

      return {
        ...state,
        board: state.board.map((row, i) =>
          row.map((item, j) =>
            i === x && y === j && item === BoardItemStatus.EMPTY ? payload.type : item
          )
        )
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
