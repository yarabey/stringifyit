import {StringifierRangeError} from '../errors';

function handleError(error: unknown): void {
    if (error instanceof RangeError) {
        throw new StringifierRangeError();
    }

    throw error;
}

export default handleError;
