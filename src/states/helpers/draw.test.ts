import { draw } from './draw';

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie o próprio nome', () => {
    const participants = ['Ana', 'Catarina', 'João', 'Roberta', 'Natália'];

    const drawResult = draw(participants);
    participants.forEach((participant) => {
      const nameDrawn = drawResult.get(participant);
      expect(nameDrawn).not.toEqual(participant);
    });
  });
});
