import { atom } from 'recoil';

export const participantListState = atom<string[]>({
  key: 'participantListState',
  default: [],
});

export const drawnResultsState = atom<Map<string, string>>({
  key: 'drawnResultsState',
  default: new Map(),
});
export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
