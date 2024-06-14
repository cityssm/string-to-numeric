export function getLocaleDecimalSeparator() {
    return (1.1).toLocaleString().charAt(1);
}
export const defaultParsingOptions = {
    decimalSeparator: getLocaleDecimalSeparator()
};
export default function parseNumeric(numericString, userParsingOptions) {
    const options = Object.assign({}, defaultParsingOptions, userParsingOptions);
    let finalMultiplier = 1;
    let processingString = (numericString ?? '').trim().toLowerCase();
    /*
     * Remove thousands separators
     */
    processingString =
        options.decimalSeparator === '.'
            ? numericString.replaceAll(',', '')
            : numericString.replaceAll('.', '');
    /*
     * Make decimal separator a decimal
     */
    processingString = processingString.replaceAll(',', '.');
    /*
     * Replace enclosing circle brackets with a negative sign
     */
    if (processingString.startsWith('(') && processingString.endsWith(')')) {
        processingString = processingString.slice(1, -1);
        finalMultiplier = -1;
    }
    /*
     * Remove any leading units
     */
    while (processingString !== '') {
        if ('0123456789'.includes(processingString.charAt(0))) {
            break;
        }
        else {
            if (processingString.startsWith('-')) {
                finalMultiplier = -1;
            }
            processingString = processingString.slice(1);
        }
    }
    return Number.parseFloat(processingString) * finalMultiplier;
}
