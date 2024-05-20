const getMatchDate = (time: string): string => {
  return time.split('T')[0].split('-').reverse().join('-').slice(0, 5)
}
export default getMatchDate
