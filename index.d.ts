type DecimalSeparator = '.' | ',';
export interface ParsingOptions {
    decimalSeparator: DecimalSeparator;
}
/**
 * Retrieves the computer's locale decimal separator.
 * @returns Either "." or ",".
 */
export declare function getLocaleDecimalSeparator(): DecimalSeparator;
export declare const defaultParsingOptions: ParsingOptions;
/**
 * Converts a string into a number.
 * @param numericString - A string representing a number.
 * @param userParsingOptions - Optional parameters.
 * @returns A numeric representation of the given string.
 */
export default function parseNumeric(numericString: string, userParsingOptions?: Partial<ParsingOptions>): number;
export {};
