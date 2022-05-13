import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Draw } from '.';
import { useDrawnResults } from '../../states/hooks/useDrawnResults';
import { useParticipantList } from '../../states/hooks/useParticipantList';

jest.mock('../../states/hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock('../../states/hooks/useDrawnResults', () => {
  return {
    useDrawnResults: jest.fn(),
  };
});

describe('na pagina de sorteio', () => {
  const participants = ['Ana', 'Catarina', 'Jorel'];
  const drawnResults = new Map([
    ['Ana', 'Jorel'],
    ['Jorel', 'Catarina'],
    ['Catarina', 'Ana'],
  ]);

  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useDrawnResults as jest.Mock).mockReturnValue(drawnResults);
  });

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length);
  });

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione seu nome');
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const nameDrawn = screen.getByRole('alert');

    expect(nameDrawn).toBeInTheDocument();
  });
});
