import type {IStringifier} from '../../Stringifier';
import {stringify} from '../../utils';

function stringifySet(this: ArrayLike<any>, stringifier: IStringifier): void {
    stringifier.string += 'set^';

    Array.from(this)[stringify as any](stringifier, true);
}

// @ts-ignore
Set.prototype[stringify] = stringifySet;
// @ts-ignore
WeakSet.prototype[stringify] = stringifySet;

export default stringifySet;
