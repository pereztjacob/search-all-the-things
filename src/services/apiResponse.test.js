import { checkResponse } from './bookApi.js';

describe('search response', () => {

  it('check if Response is true', () => {
    const data = { Response: 'True' };
    const output = checkResponse(data);
    expect(output).toBe(data);
  });

  it('error throw for false response', () => {
    const data = { Response: 'False', Error: 'ERR' };
    expect(() => {
      checkResponse(data);
    }).toThrow(data.Error);
  });
});