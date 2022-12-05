import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage('currentUser', null);