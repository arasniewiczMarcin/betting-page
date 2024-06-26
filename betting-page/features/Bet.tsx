'use client'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import PlaceBetForm from '@/components/PlaceBetForm'
import type SelectedMatches from '@/interfaces/SelectedMatches'
import type MyBetsType from '@/interfaces/MyBetsType'

interface BetProps {
  matches: SelectedMatches[]
  setMatches: (selectedMatches: SelectedMatches[]) => void
  setMyBets: (myBets: MyBetsType[]) => void
}

const Bet = (props: BetProps): JSX.Element => {
  const cancelIcon = '/icons/cancel.svg'

  const [title, setTitle] = useState<string>('No Matches Selected')

  useEffect(() => {
    if (props.matches.length > 0) {
      setTitle(`${props.matches.length} Matches Selected`)
    } else {
      setTitle('No Matches Selected')
    }
  }, [props.matches])

  const countOdds = (): number => {
    let odds = 1
    props.matches.forEach((match: SelectedMatches) => {
      odds *= parseFloat(match.odd)
    })
    return odds > 1 ? odds : 0
  }

  const deleteMatch = (name: string): void => {
    const newMatches = props.matches.filter((match: SelectedMatches) => match.home !== name)
    props.setMatches(newMatches)
  }
  const sendBet = (stake: number): void => {
    const bets = props.matches.map((match: SelectedMatches) => {
      return { stake, ...match }
    })
    props.setMyBets(bets)
    props.setMatches([])
    console.log(bets)
  }

  return (
        <div className="flex flex-col w-80 h-[calc(100vh-100px)] divide-y bg-white px-4 pt-4 rounded-lg shadow-m mr-4 mt-6">
            <Typography className="text-xs font-semibold mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
            </Typography>
            <div className="overflow-y-auto px-2">
            {props.matches.map((match: SelectedMatches, index: number) => (
                <Card className="w-full bg-white p-2 rounded-lg border" key={index} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                        <div className="flex justify-between gap-8">
                            <div className="text-[10px] font-semibold">
                                {match.home} - {match.away}
                            </div>
                            <Image className='cursor-pointer' src={cancelIcon} alt="Cancel" width={13} height={13} onClick={() => { deleteMatch(match.home) }} />
                        </div>
                        <div className="flex justify-between gap-8 py-2">
                            <div className="flex gap-1">
                                <Typography className="text-sm font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Type:
                                </Typography>
                                <Typography className="text-sm font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {match.type}
                                </Typography>
                            </div>
                            <Typography className="text-sm font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                {match.odd}
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            ))}
            </div>
            <PlaceBetForm odd={countOdds()} setMyBets={sendBet} />
        </div>
  )
}

export default Bet
