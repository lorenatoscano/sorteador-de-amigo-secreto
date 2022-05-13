import { useRecoilValue } from 'recoil';
import { drawnResultsState } from '../atom';

export const useDrawnResults = () => {
  return useRecoilValue(drawnResultsState);
};
