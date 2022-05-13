import { useRecoilValue } from 'recoil';
import { participantListState } from '../states/atom';

export const useParticipantList = () => {
  return useRecoilValue(participantListState);
};
