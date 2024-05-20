const getTodayDate = (): string => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  return date.toISOString().split('T')[0]
}
const getEndOfTheSeasonDate = (): string => {
  const date = new Date()
  if (date.getMonth() < 6) return `${date.getFullYear()}-07-01`
  return `${date.getFullYear() + 1}-07-01`
}
const getParsedLinkForFixtures = (league: number): string => {
  return `https://v3.football.api-sports.io/fixtures?league=${league}&season=2023&from=${getTodayDate()}&to=${getEndOfTheSeasonDate()}`
}
export default getParsedLinkForFixtures
