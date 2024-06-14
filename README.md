# String to Numeric

**Parses formatted number strings into numbers.**

Supports formatted numbers that are not supported by Javascript's `parseInt()` and `parseFloat()` functions, including:

- Numbers with thousands separators.<br />
  i.e. `"1,234.56" => 1234.56`

- Numbers using a comma decimal separator.<br />
  i.e. `"1,23" => 1.23`

- Numbers with surrounding brackets.<br />
  i.e. `"(6000)" => -6000`

- Numbers with leading units.<br />
  i.e. `"$54.32" => 54.32`

- Combinations of formatting.<br />
  i.e. `"($65,432.10)" => -65432.1`

## Installation

```sh
npm install @cityssm/string-to-numeric
```

## Usage

```javascript
import stringToNumeric from '@cityssm/string-to-numeric'

console.log(stringToNumeric('1,234.56'))
// => 1234.56

console.log(stringToNumeric('$54.32'))
// => 54.32
```

## Note

The decimal separator will attempt to be detected based on the computer's settings.
If the computer's locale settings do not match the decimal separator in string being parsed,
set the `decimalSeparator` option.

```javascript
console.log(stringToNumeric('1,23', { decimalSeparator: ',' }))
// => 1.23
```
