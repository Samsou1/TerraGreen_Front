import { atom } from 'jotai'
import APIManager from '../services/api'
export const regionsAtom = atom(APIManager.getRegions())