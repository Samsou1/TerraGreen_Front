import { atom } from "jotai";
import APIManager from "../services/api";
export const projectStatusesAtom = atom(APIManager.getProjectStatuses());
