'use client'
import Bet from '@/features/Bet'
import Fixtures from '@/features/Fixtures'
import SportsMenu from '@/features/SportsMenu'
import matches from '@/public/mocks/mock_bet.json'
import type Match from '@/interfaces/Match'
import React, { useState } from 'react'

const Home = (): JSX.Element => {
  const match: Match[] = matches.matches
  const [league, setLeague] = useState<number>(39)

  return (
      <div className="flex flex-row justify-center gap-6">
        <SportsMenu setLeague={setLeague}/>
        <Fixtures league={league} />
        <Bet matches={match} />
      </div>
  )
}
export default Home
