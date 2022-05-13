import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Footer } from '.';
import { useParticipantList } from '../../hooks/useParticipantList';

jest.mock('../../hooks/useParticipantList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('<Footer /> quando não existem participantes suficientes', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('<Footer /> quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([
      'Ana',
      'Catarina',
      'Josefina',
    ]);
  });

  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/draw');
  });
});
