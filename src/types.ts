export type StringifierOptions = {
    /**
     * Sort arrays before stringify.
     */
    readonly sortArrays?: boolean;

    /**
     * Stringify primitive values (and functions) types.
     */
    readonly includePrimitiveTypes?: boolean;

    /**
     * Stringify non-primitive values constructor names.
     */
    readonly includeConstructorNames?: boolean;
};

export interface IStringifier {
    /**
     * Stringifier options.
     */
    options: StringifierOptions;

    /**
     * Accumulator string.
     */
    string: string;

    /**
     * Stringifies value and append it to current accumulator string.
     */
    update(value: unknown): void;
}
