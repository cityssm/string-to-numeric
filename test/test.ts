// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-magic-numbers */

import assert from 'node:assert'
import { describe, it } from 'node:test'

import stringToNumeric from '../index.js'

await describe('string-to-numeric', async () => {
  await it('Converts simple strings into numeric values', () => {
    assert.strictEqual(stringToNumeric('33'), 33)
    assert.strictEqual(stringToNumeric('1.1'), 1.1)
    assert.strictEqual(stringToNumeric('5e+2'), 500)
  })

  await it('Converts strings with thousands separators into numeric values', () => {
    assert.strictEqual(stringToNumeric('1,234.1'), 1234.1)

    assert.strictEqual(
      stringToNumeric('1.234,1', {
        decimalSeparator: ','
      }),
      1234.1
    )
  })

  await it('Converts strings with leading decimal into numeric values', () => {
    assert.strictEqual(stringToNumeric('.2'), 0.2)

    assert.strictEqual(stringToNumeric(',3', {decimalSeparator: ','}), 0.3)
  })

  await it('Converts strings with leading units into numeric values', () => {
    assert.strictEqual(stringToNumeric('$2'), 2)

    assert.strictEqual(stringToNumeric('# 456'), 456)

    assert.strictEqual(stringToNumeric('No. 812'), 812)

    assert.strictEqual(stringToNumeric('$58,742.200'), 58_742.2)
  })

  await it('Converts strings with trailing units into numeric values', () => {
    assert.strictEqual(stringToNumeric('99 red balloons'), 99)

    assert.strictEqual(stringToNumeric('100mm'), 100)
  })

  await it('Converts strings with negative indicators into numeric values', () => {
    assert.strictEqual(stringToNumeric('-2'), -2)

    assert.strictEqual(stringToNumeric('(4.2)'), -4.2)

    assert.strictEqual(stringToNumeric('($4.000)'), -4)
  })

  await it('Handles errors', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined, @typescript-eslint/no-confusing-void-expression
    assert.strictEqual(stringToNumeric(undefined), undefined)

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression, unicorn/no-null
    assert.strictEqual(stringToNumeric(null), undefined)

    assert.strictEqual(stringToNumeric(''), Number.NaN)

    assert.strictEqual(stringToNumeric('error'), Number.NaN)
  })
})
