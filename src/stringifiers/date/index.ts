import type {IStringifier} from '../../Stringifier';
import {stringify} from '../../utils';

function stringifyDate(this: Date, stringifier: IStringifier): void {
    stringifier.string += `date^${String(this.getTime())}`;
}

// @ts-ignore
Date.prototype[stringify] = stringifyDate;

export default stringifyDate;
