import { formatUserName } from './utils';

describe('utils', () => {
  test('formatUserName does not add @ when it is already provided', () => {
    expect(formatUserName('@jc')).toBe('@jc');
  });
});
