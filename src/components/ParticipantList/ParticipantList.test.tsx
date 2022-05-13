import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ParticipantList } from '.';
import { useParticipantList } from '../../states/hooks/useParticipantList';

jest.mock('../../states/hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe('uma lista vazia de participantes <ParticipantList />', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });

  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });
});

describe('uma lista preenchida de participantes <ParticipantList />', () => {
  const participants = ['Ana', 'Catarina'];
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });

  test('deve ser renderizada cem elementos', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(participants.length);
  });
});
