import { regionsAtom } from "../store/region";
import { countriesAtom } from "../store/country";
import { projectStatusesAtom } from "../store/projectStatus";
import { useAtomValue } from "jotai/utils";

export const getRegionFromId = (id) => {
  const regions = useAtomValue(regionsAtom);
  return regions.find((region) => region.id === id);
};

export const getCountryFromId = (id) => {
  const countries = useAtomValue(countriesAtom);
  return countries.find((country) => country.id === id);
};

export const getProjectStatusFromId = (id) => {
  const projectStatuses = useAtomValue(projectStatusesAtom);
  return projectStatuses.find((projectStatus) => projectStatus.id === id);
};

export const getRegionFromName = (name) => {
  const regions = useAtomValue(regionsAtom);
  return regions.find((region) => region.name === name);
};

export const getCountryFromName = (name) => {
  const countries = useAtomValue(countriesAtom);
  return countries.find((country) => country.name === name);
};

export const getProjectStatusFromName = (name) => {
  const projectStatuses = useAtomValue(projectStatusesAtom);
  return projectStatuses.find((projectStatus) => projectStatus.name === name);
};
