import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorState, participantListState } from '../states/atom';

export const useAddParticipant = () => {
  const list = useRecoilValue(participantListState);
  const setList = useSetRecoilState(participantListState);
  const setError = useSetRecoilState(errorState);

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setError('');
      }, 5000);
      return;
    }
    return setList((currentList) => [...currentList, participantName]);
  };
};
