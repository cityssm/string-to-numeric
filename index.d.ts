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
export declare function parseNumeric(numericString: undefined | null): undefined;
export declare function parseNumeric(numericString: string): number;
export default parseNumeric;
