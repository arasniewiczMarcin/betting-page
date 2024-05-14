import Bet from '@/features/Bet'
import Fixtures from '@/features/Fixtures'
import SportsMenu from '@/features/SportsMenu'
import matches from '@/public/mocks/mock_bet.json'
import type Match from '@/interfaces/Match'
import React from 'react'

const Home = (): JSX.Element => {
  const match: Match[] = matches.matches
  return (
      <div className="flex flex-row justify-center gap-6">
        <SportsMenu />
        <Fixtures />
        <Bet matches={match} />
      </div>
  )
}
export default Home
