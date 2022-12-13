export const convertTimeStampToDate = (time) => {
  return time.split('T')[0].replace(/-/g, ' ') + ' at ' + time.split('T')[1].split('.')[0].substring(0,5)
}