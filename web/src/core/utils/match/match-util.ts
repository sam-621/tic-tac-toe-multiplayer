/* eslint-disable no-plusplus */
import { Player } from '@/interfaces/Game';
import { BoardItemStatus } from '@/interfaces/match';
import { BoardState } from '@/store/slices';

export const getWinner = (board: BoardState): Player | null => {
  let winner: Player | null = null;

  winner = getInlineMatch(board);

  if (winner) return winner;

  const reverseBoard = getReverseBoard(board);
  winner = getInlineMatch(reverseBoard);

  return winner;
};

const getInlineMatch = (board: BoardState): Player | null => {
  let matchedItem: Player | null = null;

  board.forEach(row => {
    if (matchedItem) return;

    const isCrossWinner = row.every(i => i === BoardItemStatus.CROSS);

    if (isCrossWinner) {
      matchedItem = Player.CROSSES;
      return;
    }

    const isNoughtWinner = row.every(i => i === BoardItemStatus.NOUGHT);

    if (isNoughtWinner) {
      matchedItem = Player.NOUGHTS;
    }
  });

  return matchedItem;
};

const getReverseBoard = (board: BoardState): BoardState => {
  const reverseBoard: BoardState = [[], [], []];

  board.forEach(row => {
    row.forEach((item, j) => {
      reverseBoard[j].push(item);
    });
  });

  return reverseBoard;
};
