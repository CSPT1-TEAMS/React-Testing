import operate from '../logic/operate'

describe('operate', () => {
  it('should be a function with three arguments', () => {
    expect(operate.length).toBe(3)
  })

  it('should throw when called with ("+", 1, 2)', () => {
    expect(() => {
      operate('+', 1, 2)
    }).toThrow()
  })

  it('should add when called with (1, 2, "+")', () => {
    expect(operate(1, 2, '+')).toBe('3')
  })

  it('should be commutative', () => {
    expect(operate(1, 2, '+')).toBe('3')
    expect(operate(2, 1, '+')).toBe('3')
  })

  // ... test the rest of the operations too

  it('should throw when called with (1, 2, "&"', () => {
    expect(() => {
      operate(1, 2, '&')
    }).toThrow()
  })
})