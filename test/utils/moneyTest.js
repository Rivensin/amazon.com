import formatCurrency from "../../scripts/utils/money.js";

describe('test suite: format currency', () => {
  it('convert cents into dollar', () => {
    expect(formatCurrency(2095)).toEqual('20.95')
  });
  it('work with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00')
  });
  it('rounds to nearest cents', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01')
  })
})

