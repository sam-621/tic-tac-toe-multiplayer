import { FC } from 'react';

export const BoardCounter: FC<Props> = ({ variation }) => {
  const icon = getVariationIcon(variation);
  const color = getVariationColor(variation);

  return (
    <div
      className={`flex flex-col w-24 h-20 sm:w-36 rounded-lg justify-center items-center bg-${color}`}
    >
      <p className="text-sm font-medium text-dark-navy">{icon ? `${icon} (YOU)` : 'TIES'}</p>
      <span className="text-2xl font-bold text-dark-navy">14</span>
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
