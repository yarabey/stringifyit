import type {IStringifier} from '../../types';
import {stringify} from '../../utils';

function stringifyObject(this: any, stringifier: IStringifier): void {
    const keys = Object.keys(this).sort();
    let key: string;

    stringifier.string += '{';

    for (let i = 0; i < keys.length; i++) {
        key = keys[i];

        stringifier.string += key;
        stringifier.update(this[key]);
    }

    stringifier.string += '}';
}

// @ts-ignore
Object.prototype[stringify] = stringifyObject;

export default stringifyObject;
