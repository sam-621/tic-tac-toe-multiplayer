import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player } from '@/interfaces/Game';
import { BoardItemStatus, BoardPosition } from '@/interfaces/match';

const PLAYER_WHO_ALWAYS_GOES_FIRST = Player.CROSSES;

const INITIAL_MOVES = 0;

const INITIAL_BOARD: BoardState = [
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY],
  [BoardItemStatus.EMPTY, BoardItemStatus.EMPTY, BoardItemStatus.EMPTY]
];

const INITIAL_MATCH_STATUS: MatchStatus = {
  winner: null,
  isTied: false
};

const INITIAL_MATCH_SCORE: MatchScore = {
  crosses: 0,
  noughts: 0,
  ties: 0
};

export type MatchStatus = {
  winner: Player | null;
  isTied: boolean;
};

export type MatchScore = {
  crosses: number;
  noughts: number;
  ties: number;
};

interface MatchSliceSchema {
  board: BoardState;
  currentTurn: Player;
  matchStatus: MatchStatus;
  moves: number;
  matchScore: MatchScore;
}

export type BoardState = BoardItemStatus[][];

const initialState: MatchSliceSchema = {
  board: INITIAL_BOARD,
  currentTurn: PLAYER_WHO_ALWAYS_GOES_FIRST,
  matchStatus: INITIAL_MATCH_STATUS,
  moves: INITIAL_MOVES,
  matchScore: INITIAL_MATCH_SCORE
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
    setMatchStatus: (state, { payload }: PayloadAction<setMatchStatusPayload>) => {
      return {
        ...state,
        matchStatus: payload
      };
    },
    updateMatchScore: (state, { payload }: PayloadAction<UpdateMatchScorePayload>) => {
      return {
        ...state,
        matchScore: {
          ...state.matchScore,
          ...payload
        }
      };
    },
    restartMatch: state => {
      return {
        ...state,
        board: INITIAL_BOARD,
        currentTurn: PLAYER_WHO_ALWAYS_GOES_FIRST,
        matchStatus: INITIAL_MATCH_STATUS,
        moves: INITIAL_MOVES
      };
    }
  }
});

export const { updateBoard, changeTurn, setMatchStatus, updateMatchScore, restartMatch } =
  MatchSlice.actions;

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

type UpdateMatchScorePayload = MatchScore;
