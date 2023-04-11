import { FC } from 'react';

import { Player } from '@/interfaces/Game';
import { useAppSelector } from '@/store/rootState';
import { MatchScore } from '@/store/slices';

export const BoardCounter: FC<Props> = ({ variation }) => {
  const { matchScore } = useAppSelector(state => state.match);
  const { player1 } = useAppSelector(state => state.game);

  const icon = getVariationIcon(variation);
  const color = getVariationColor(variation);
  const score = getVariationScore(matchScore, variation);
  const isOwner = getIsOwner(player1, variation);

  const label = isOwner ? '(YOU)' : '(P2)';

  return (
    <div
      className={`flex flex-col w-24 h-20 sm:w-36 rounded-lg justify-center items-center bg-${color}`}
    >
      <p className="text-sm font-medium text-dark-navy">{icon ? `${icon} ${label}` : 'TIES'}</p>
      <span className="text-2xl font-bold text-dark-navy">{score}</span>
    </div>
  );
};

type Props = {
  variation: BoardCounterVariation;
};

type BoardCounterVariation = 'cross' | 'nought' | 'tie';

const getVariationIcon = (variation: BoardCounterVariation) => {
  if (variation === 'cross') return 'X';
  if (variation === 'nought') return 'O';

  return null;
};

const getVariationColor = (variation: BoardCounterVariation) => {
  if (variation === 'cross') return 'light-blue';
  if (variation === 'nought') return 'light-yellow';

  return 'silver';
};

const getVariationScore = (matchScore: MatchScore, variation: BoardCounterVariation): number => {
  if (variation === 'cross') return matchScore.crosses;
  if (variation === 'nought') return matchScore.noughts;

  return matchScore.ties;
};

const getIsOwner = (player1: Player, variation: BoardCounterVariation) => {
  if (player1 === Player.CROSSES) {
    return variation === 'cross';
  }

  return variation === 'nought';
};
