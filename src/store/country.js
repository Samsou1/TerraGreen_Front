import { atom } from 'jotai'
import APIManager from '../services/api'
export const countriesAtom = atom(APIManager.getCountries())