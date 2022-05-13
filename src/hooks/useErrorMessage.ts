import { useRecoilValue } from 'recoil';
import { errorState } from '../states/atom';

export const useErrorMessage = () => {
  const message = useRecoilValue(errorState);
  return message;
};
