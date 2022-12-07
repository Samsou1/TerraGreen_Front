import { regionsAtom } from "../store/region"
import { countriesAtom } from "../store/country";
import { projectStatusesAtom } from "../store/projectStatus";
import { useAtomValue } from "jotai"

export const getRegionFromId= (id) => {
  const regions = useAtomValue(regionsAtom);
  return regions.filter(region => region.id === id)[0]
}

export const getCountryFromId= (id) => {
  const countries = useAtomValue(countriesAtom);
  return countries.filter(country => country.id === id)[0]
}

export const getProjectStatusFromId= (id) => {
  const projectStatuses = useAtomValue(projectStatusesAtom);
  return projectStatuses.filter(projectStatus => projectStatus.id === id)[0]
}