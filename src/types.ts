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
    string: string;
    options: StringifierOptions;

    update(value: any): void;
}
