'use client'
import { Card, CardBody } from '@material-tailwind/react'
import React, { type SetStateAction, useEffect, useState } from 'react'
import BetButton from '@/components/BetButton'
import type SelectedMatches from '@/interfaces/SelectedMatches'
import getMatchDate from '@/utils/getMatchDate'
import getParsedLinkForFixtures from '@/utils/getParsedLinkForFixtures'
import odds from '@/public/mocks/odds.json'

interface FixturesProps {
  league: number
  setSelectedMatches: (selectedMatches: SelectedMatches[]) => void
  selectedMatches: SelectedMatches[]
}

const Fixtures = (props: FixturesProps): JSX.Element => {
  const [data, setData] = useState<SetStateAction<any>>([])

  const handleBetClick = (home: string, away: string, type: string, odd: string): void => {
    props.setSelectedMatches([...props.selectedMatches.filter((match: SelectedMatches) => match.home !== home), { home, away, type, odd }])
  }

  useEffect(() => {
    const parsedLink = getParsedLinkForFixtures(props.league)
    fetch(parsedLink, {
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
  }, [props.league])

  return (
        <div className="grow">
            {data?.sort((a: any, b: any) => new Date(a.fixture.date as string).getTime() - new Date(b.fixture.date as string).getTime()).map((fixture: any, index: number) => {
              const { home, draw, away } = odds.odds[index]
              return (
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
                        <BetButton odd={home} type="1" home={fixture.teams.home.name} away={fixture.teams.away.name} handleClick={handleBetClick} />
                        <BetButton odd={draw} type="X" home={fixture.teams.home.name} away={fixture.teams.away.name} handleClick={handleBetClick} />
                        <BetButton odd={away} type="2" home={fixture.teams.home.name} away={fixture.teams.away.name} handleClick={handleBetClick} />
                      </div>

                    </div>

                </CardBody>
              </Card>
              )
            })}
        </div>
  )
}
export default Fixtures
