const getOdds = (): string[] => {
  const homeWin = Math.random() * 0.8 + 0.1
  const awayWin = Math.random() * (0.9 - homeWin) + 0.1
  const draw = (1 - homeWin - awayWin) + 0.1
  return [(1 / homeWin).toFixed(2), (1 / draw).toFixed(2), (1 / awayWin).toFixed(2)]
}
export default getOdds
