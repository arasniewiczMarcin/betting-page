'use client'

import { useEffect, useState, type SetStateAction } from 'react'
import { Button, Card, CardBody } from '@material-tailwind/react'
import React from 'react'

interface FixturesProps {
  league: number
}

const Fixtures = (props: FixturesProps): JSX.Element => {
  const [data, setData] = useState<SetStateAction<any>>([])
  /* po wlaczeniu strony maja sie wlaczyc mecze premier league - czyli sprawdzenie czy
   istnieje plik json z meczami premier league z dzisiejsza data modyfikacji. Jesli nie to pobrac z API do pliku

   Jesli uzytkownik wybierze inna lige, to tak samo ma sprawdzic czy istnieje plik z dzisiejsza data modyfikacji
   jesli nie to pobrac z API do pliku
  */

  const getTodayDate = (): string => {
    const date = new Date().toISOString().split('T')[0]
    return date
  }
  const getEndOfTheSeasonDate = (): string => {
    const date = new Date()
    if (date.getMonth() < 6) return `${date.getFullYear()}-07-01`
    return `${date.getFullYear() + 1}-07-01`
  }

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/fixtures?league=${props.league}&season=2023&from=${getTodayDate()}&to=${getEndOfTheSeasonDate()}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'b199a4155fb01d034531b8a3bb7ea758'
      }
    })
      .then(async response => await response.json())
      .then(json => { setData(json.response) })
      .catch(err => {
        console.log(err)
      })

    // setData(fixtures.response)
  }, [props.league])
  const getMatchDate = (time: string): string => {
    return time.split('T')[0].split('-').reverse().join('-').slice(0, 5)
  }
  return (
        <div className="grow">
            {data?.sort((a: any, b: any) => new Date(a.fixture.date as string).getTime() - new Date(b.fixture.date as string).getTime()).map((fixture: any, index: number) => (
            <Card className="mt-6 w-full bg-white p-2 rounded-lg" key={index} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="p-2 mb-1 flex justify-between gap-8">

                    <div>
                      <p className="flex items-center mb-2 text-xs text-black/50">
                        {fixture.league.name} · {getMatchDate(fixture.fixture.date as string)} · {fixture.fixture.date.split('T')[1].slice(0, 5)}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <img src={fixture.teams.home.logo} alt={fixture.teams.home.name} className="mx-1" width={20} height={20} />
                        <p className="text-sm font-semibold">{fixture.teams.home.name}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={fixture.teams.away.logo} alt={fixture.teams.away.name} className="mx-1" width={20} height={20} />
                        <p className="text-sm font-semibold">{fixture.teams.away.name}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="flex items-center mb-2 text-xs text-black/50">Match</p>
                      <div className="flex gap-2">
                        <Button
                        variant="filled"
                        size="md"
                        className="rounded-md p-2 text-black bg-gray-200 hover:bg-gray-300 w-24"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        >
                          <div className="flex justify-between">
                            <p className="text-left">1</p>
                            <p className="text-right">1.72</p>
                          </div>

                        </Button>
                        <Button
                        variant="filled"
                        size="md"
                        className="rounded-md p-2 text-black bg-gray-200 hover:bg-gray-300 w-24"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        >
                          <div className="flex justify-between">
                            <p className="text-left">X</p>
                            <p className="text-right">3.50</p>
                          </div>

                        </Button>
                        <Button
                        variant="filled"
                        size="md"
                        className="rounded-md p-2 text-black bg-gray-200 hover:bg-gray-300 w-24"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        >
                          <div className="flex justify-between">
                            <p className="text-left">2</p>
                            <p className="text-right">4.75</p>
                          </div>

                        </Button>
                      </div>

                    </div>

                </CardBody>
              </Card>
            ))}
        </div>
  )
}
export default Fixtures
