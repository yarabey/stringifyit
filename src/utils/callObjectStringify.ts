import type {IStringifier} from '../types';
import stringify from './stringify';
import handleError from './handleError';

function callObjectStringify(value: any, stringifier: IStringifier): void {
    try {
        // @ts-ignore
        Object.prototype[stringify].call(value, stringifier);
    } catch (error: unknown) {
        handleError(error);
    }
}

export default callObjectStringify;
