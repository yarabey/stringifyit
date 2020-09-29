export type StringifierOptions = {
    /**
     * Sort arrays before stringify.
     */
    sortArrays?: boolean;
    /**
     * Stringify primitive values (and functions) types.
     */
    includePrimitiveTypes?: boolean;
    /**
     * Stringify non-primitive values constructor names.
     */
    includeConstructorNames?: boolean;
};

export interface IStringifier {
    string: string;
    options: StringifierOptions;

    update(value: unknown): void;
}
