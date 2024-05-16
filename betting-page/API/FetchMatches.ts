import { useState } from 'react'

const getTodayDate = (): string => {
  const date = new Date().toISOString().split('T')[0]
  return date
}
const getEndOfTheSeasonDate = (): string => {
  const date = new Date()
  if (date.getMonth() < 6) return `${date.getFullYear()}-07-01`
  return `${date.getFullYear() + 1}-07-01`
}
interface FetchMatchesProps {
  league: number
}
const FetchMatches = async (props: FetchMatchesProps): Promise<any> => {
  const [data, setData] = useState<any>()
  fetch(`https://v3.football.api-sports.io/fixtures?league=${props.league}&season=2023&from=${getTodayDate()}&to=${getEndOfTheSeasonDate()}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'b199a4155fb01d034531b8a3bb7ea758'
    }
  })
    .then(async response => await response.json())
    .then(json => { setData(json) })
    .catch(err => {
      console.log(err)
    })
}
export default FetchMatches
