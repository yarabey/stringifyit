import type {IStringifier} from '../Stringifier';
import stringify from './stringifySymbol';
import handleError from './handleError';

function callStringify(value: any, stringifier: IStringifier): void {
    try {
        value[stringify](stringifier);
    } catch (error: unknown) {
        handleError(error);
    }
}

export default callStringify;
