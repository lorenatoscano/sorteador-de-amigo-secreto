import { useSetRecoilState } from 'recoil';
import { drawnResultsState } from '../atom';
import { draw } from '../helpers/draw';
import { useParticipantList } from './useParticipantList';

export const useDrawing = () => {
  const participants = useParticipantList();
  const setResult = useSetRecoilState(drawnResultsState);

  return () => {
    const result = draw(participants);
    setResult(result);
  };
};
