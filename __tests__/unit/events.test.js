import Token from '../../src/app/schemas/Token';
import '../../src/database';

describe('Token', () => {
  afterAll(async () => {
    await Token.drop();
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});
