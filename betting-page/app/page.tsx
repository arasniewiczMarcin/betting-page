'use client'
import Bet from '@/features/Bet'
import Fixtures from '@/features/Fixtures'
import SportsMenu from '@/features/SportsMenu'
import React, { useState } from 'react'
import type SelectedMatches from '@/interfaces/SelectedMatches'
import MyBets from '@/features/MyBets'
import type MyBetsType from '@/interfaces/MyBetsType'

const Home = (): JSX.Element => {
  const [league, setLeague] = useState<number>(39)
  const [selectedMatches, setSelectedMatches] = useState<SelectedMatches[]>([])
  const [myBets, setMyBets] = useState<MyBetsType[]>([])
  return (
      <div className="flex flex-row justify-center gap-6">
        <SportsMenu setLeague={setLeague}/>
        <Fixtures league={league} selectedMatches={selectedMatches} setSelectedMatches={setSelectedMatches} />
        <div>
          <Bet matches={selectedMatches} setMatches={setSelectedMatches} setMyBets={setMyBets} />
          <MyBets myBets={myBets} />
        </div>
      </div>
  )
}
export default Home
