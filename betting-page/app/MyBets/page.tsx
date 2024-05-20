'use client'
import type SelectedMatches from '@/interfaces/SelectedMatches'
import React, { useState, useEffect } from 'react'

const MyBets = (): JSX.Element => {
  const [myBets, setMyBets] = useState<SelectedMatches[]>([])

  return (
    <div>
      {myBets.map((match, index) => (
        <div key={index}>
          {/* Display the match details here */}
        </div>
      ))}
    </div>
  )
}

export default MyBets
