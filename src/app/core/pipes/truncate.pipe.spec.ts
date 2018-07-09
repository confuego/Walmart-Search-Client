import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {

  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe()
  });

  it('create an instance', () => {
    pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('truncates a string', () => {
    const result = pipe.transform('ha', 1);
    expect(result).toBe('h...');
  });

  it('returns empty on non-string', () => {
    const result = pipe.transform(new Object() as string, 5);
    expect(result).toBe('');
  });

  it('ignores strings smaller than truncation size', () => {
    const result = pipe.transform('g', 5);
    expect(result).toBe('g');
  });
});
