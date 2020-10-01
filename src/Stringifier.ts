import type {IStringifier, StringifierOptions} from './types';
import {callObjectStringify, callStringify} from './utils';

class Stringifier implements IStringifier {
    /**
     * Accumulator string.
     */
    public string: string;
    public readonly options: StringifierOptions;

    constructor(options: StringifierOptions = {}) {
        this.string = '';

        this.options = options;
    }

    /**
     * Stringifies value and append it to current accumulator string.
     */
    public update(value: unknown): void {
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

export default Stringifier;
