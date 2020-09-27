import {callObjectStringify, callStringify} from './utils';

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

class Stringifier implements IStringifier {
    /**
     * Accumulator string.
     */
    public string: string;
    public options: StringifierOptions;

    constructor(options: StringifierOptions = {}) {
        this.string = '';

        this.options = options;
    }

    /**
     * Stringifies value and append it to current accumulator string.
     */
    public update(value: any): void {
        const type = typeof value;

        if (type !== 'object' || value === null) {
            if (this.options.includePrimitiveTypes) {
                this.string += `${type}^`;
            }

            this.string += String(value);
        } else if (!value.constructor) {
            callObjectStringify(value, this);
        } else {
            if (this.options.includeConstructorNames) {
                this.string += value.constructor.name;
            }

            callStringify(value, this);
        }
    }
}

export function stringifyit(value: unknown, options?: StringifierOptions): string {
    const stringifier = new Stringifier(options);

    stringifier.update(value);

    return stringifier.string;
}

export default Stringifier;
