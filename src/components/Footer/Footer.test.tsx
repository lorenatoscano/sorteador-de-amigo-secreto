import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Footer } from '.';
import { useParticipantList } from '../../hooks/useParticipantList';

jest.mock('../../hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe('quando não existem participantes suficientes', () => {
  test('a brincadeira não pode ser iniciada', () => {
    beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue([]);
    });

    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('quando existem participantes suficientes', () => {
  test('a brincadeira pode ser iniciada', () => {
    beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue([
        'Ana',
        'Catarina',
        'Josefina',
      ]);
    });

    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });
});
