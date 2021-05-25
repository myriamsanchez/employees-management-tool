import { StatusPipe } from './status.pipe';

const pipe = new StatusPipe();

describe('StatusPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });

  it ('transforms 1 to "Inactive"', () => {
    expect(pipe.transform(1)).toBe('Inactive');
  });

  it ('transforms null to "unknown"', () => {
    expect(pipe.transform(null)).toBe('unknown');
  });
});
