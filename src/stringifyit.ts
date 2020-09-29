import type {StringifierOptions} from './types';
import Stringifier from './Stringifier';

function stringifyit(value: unknown, options?: StringifierOptions): string {
    const stringifier = new Stringifier(options);

    stringifier.update(value);

    return stringifier.string;
}

export default stringifyit;
