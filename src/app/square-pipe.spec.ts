import { SquarePipe } from './square-pipe';

describe('SquarePipe', () => {
  const pipe = new SquarePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns the square of the input', () => {
    expect(pipe.transform(4)).toBe(16);
  });
});
