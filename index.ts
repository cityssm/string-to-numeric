/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-magic-numbers */

type DecimalSeparator = '.' | ','

const numbers = '0123456789'

export interface ParsingOptions {
  decimalSeparator: DecimalSeparator
}

/**
 * Retrieves the computer's locale decimal separator.
 * @returns Either "." or ",".
 */
export function getLocaleDecimalSeparator(): DecimalSeparator {
  return (1.1).toLocaleString().charAt(1) as DecimalSeparator
}

export const defaultParsingOptions: ParsingOptions = {
  decimalSeparator: getLocaleDecimalSeparator()
}

export function parseNumeric(
  numericString: undefined | null,
  userParsingOptions?: Partial<ParsingOptions>
): undefined
export function parseNumeric(
  numericString: string,
  userParsingOptions?: Partial<ParsingOptions>
): number

/**
 * Converts a string into a number.
 * @param numericString - A string representing a number.
 * @param userParsingOptions - Optional parameters.
 * @returns A numeric representation of the given string.
 */
export function parseNumeric(
  numericString: string | undefined | null,
  userParsingOptions?: Partial<ParsingOptions>
): number | undefined {
  if (numericString === undefined || numericString === null) {
    return undefined
  }

  const options = { ...defaultParsingOptions, ...userParsingOptions}

  let finalMultiplier = 1

  let processingString = numericString.trim().toLowerCase()

  /*
   * Remove thousands separators
   */

  processingString =
    options.decimalSeparator === '.'
      ? numericString.replaceAll(',', '')
      : numericString.replaceAll('.', '')

  /*
   * Make decimal separator a decimal
   */

  processingString = processingString.replaceAll(',', '.')

  /*
   * Replace enclosing circle brackets with a negative sign
   */

  if (processingString.startsWith('(') && processingString.endsWith(')')) {
    processingString = processingString.slice(1, -1)
    finalMultiplier = -1
  }

  /*
   * Remove any leading units
   */

  while (processingString !== '') {
    if (
      numbers.includes(processingString.charAt(0)) ||
      (processingString.startsWith('.') &&
        processingString.length > 1 &&
        numbers.includes(processingString.charAt(1)))
    ) {
      break
    } else {
      if (processingString.startsWith('-')) {
        finalMultiplier = -1
      }

      processingString = processingString.slice(1)
    }
  }

  return Number.parseFloat(processingString) * finalMultiplier
}

export default parseNumeric
