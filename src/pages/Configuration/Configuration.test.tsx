import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Configuration } from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('a pagina de configuracao', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuration />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
