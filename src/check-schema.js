const jsonpath = require('jsonpath');

const checkSchema = (schema, value) => {
  for (s in schema) {
    const values = jsonpath.query(value, s);
    for (const v of values) {
      if (typeof v !== schema[s]) return false;
    }
  }

  return true;
};

module.exports = checkSchema;
