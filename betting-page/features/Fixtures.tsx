'use client'

import { useEffect, useState, type SetStateAction } from 'react'
import fixtures from '../public/mocks/mock_premier_league.json'
import { Button, Card, CardBody } from '@material-tailwind/react'
import React from 'react'

const Fixtures = (): JSX.Element => {
  const [data, setData] = useState<SetStateAction<any>>([])

  useEffect(() => {
    /* fetch("https://v3.football.api-sports.io/fixtures?league=39&season=2023&from=2024-04-25&to=2024-06-30", {
        "method": "GET",
        "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "b199a4155fb01d034531b8a3bb7ea758"
            }
        })
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => {
            console.log(err);
        }); */
    setData(fixtures.response)
  }, [])
  console.log(data)
  const getDate = (time: string): string => {
    return time.split('T')[0].split('-').reverse().join('-').slice(0, 5)
  }
  return (
        <div className="grow">
            {data.sort((a: any, b: any) => new Date(a.fixture.date as string).getTime() - new Date(b.fixture.date as string).getTime())
              .map((fixture: any, index: number) => (
            <Card className="mt-6 w-full bg-white p-2 rounded-lg" key={index} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className="p-2 mb-1 flex justify-between gap-8">

                    <div>
                      <p className="flex items-center mb-2 text-xs text-black/50">
                        {fixture.league.name} · {getDate(fixture.fixture.date as string)} · {fixture.fixture.date.split('T')[1].slice(0, 5)}
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
