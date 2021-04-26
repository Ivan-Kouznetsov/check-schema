const checkSchema = require('../check-schema');

describe('checkSchema', () => {
  it('should check basic types', () => {
    const value = { name: 'John', age: 42, address: { street: 'First', unit: 123 } };

    expect(
      checkSchema(
        { '$.name': 'string', '$.age': 'number', '$.address.street': 'string', '$.address.unit': 'number' },
        value
      )
    ).toBe(true);
    expect(
      checkSchema(
        { '$.name': 'string', '$.age': 'number', '$.address.street': 'string', '$.address.unit': 'string' },
        value
      )
    ).toBe(false);
  });
});
