type DecimalSeparator = '.' | ',';
export interface ParsingOptions {
    decimalSeparator: DecimalSeparator;
}
export declare function getLocaleDecimalSeparator(): DecimalSeparator;
export declare const defaultParsingOptions: ParsingOptions;
export default function parseNumeric(numericString: string, userParsingOptions?: Partial<ParsingOptions>): number;
export {};
